import cn from 'classnames';
import dayjs from 'dayjs';
import type { MouseEventHandler, ReactElement } from 'react';
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import type { ContentRect } from 'react-measure';
import Measure from 'react-measure';
import tw from 'twin.macro';
import { animated, useSpring } from 'react-spring';
import Tooltip from '@mui/material/Tooltip';

type SvgTransparentColorType = {
  colorHex: string;
  opacity: string;
};

type MapCellEventType = (
  _cellId: string,
  _cellData: { value: number; month: number } | null,
  _event: React.MouseEvent<SVGRectElement, MouseEvent>
) => void;

interface ActivityHeatMapProps {
  weekNames?: string[];
  monthNames?: string[];
  panelColors?: (string | SvgTransparentColorType)[];
  dateFormat?: string;
  values: { [date: string]: number };
  until: string;
  panelRectSvgAttributes?: { [key: string]: string };
  className?: string;
  radius?: number;
  blockSize?: number;
  onMapHover?: MouseEventHandler<SVGSVGElement>;
  onMapClick?: MouseEventHandler<SVGSVGElement>;
  onMapCellClick?: MapCellEventType;
  onMapCellHover?: MapCellEventType;
}

const defaultWeekNames = ['', 'M', '', 'W', '', 'F', ''];
const defaultMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const defaultPanelColors = [
  { colorHex: '#44475a', opacity: '0.5' },
  '#7d2eed',
  '#924ff2',
  '#a771f6',
  '#bd93f9',
  '#d3b6fc',
];
const defaultDateFormat = 'YYYY-MM-DD';
const defaultWeekLabelColor = '#AAA';
const defaultMonthLabelColor = '#AAA';

const StyledSvg = tw.svg`
  w-full
`;

const ActivityHeatMap = ({
  weekNames = defaultWeekNames,
  monthNames = defaultMonthNames,
  panelColors = defaultPanelColors,
  dateFormat = defaultDateFormat,
  values,
  until,
  radius = 2,
  blockSize = 11,
  panelRectSvgAttributes,
  className,
  onMapHover,
  onMapClick,
  onMapCellClick,
  onMapCellHover,
}: ActivityHeatMapProps) => {
  const [columns, setColumns] = useState(53);
  const maxWidth = 53;
  const monthLabelHeight = 15;
  const weekLabelWidth = 15;
  const panelSize = blockSize;
  const panelMargin = 2;

  const getPanelPosition = useCallback(
    (row: number, col: number) => {
      const bounds = panelSize + panelMargin;
      return {
        x: weekLabelWidth + bounds * row,
        y: monthLabelHeight + bounds * col,
      };
    },
    [panelSize]
  );

  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 350, friction: 250 },
    }),
    []
  );

  // TODO possible to add extra data in each cell?
  const createHeapMapData = useCallback(
    (data: { [key: string]: number }, lastDay: string, cols: number) => {
      const d = dayjs(lastDay, { format: dateFormat });
      const lastWeekend = d.endOf('week');
      const endDate = d.endOf('day');

      const result: ({
        value: number;
        month: number;
        date: string;
      } | null)[][] = [];

      for (let i = 0; i < cols; i += 1) {
        result[i] = [];
        for (let j = 0; j < 7; j += 1) {
          const date = lastWeekend.subtract(
            (cols - i - 1) * 7 + (6 - j),
            'day'
          );

          if (date <= endDate) {
            result[i]?.push({
              value: data[date.format(dateFormat)] || 0,
              month: date.month(),
              date: date.format(dateFormat),
            });
          } else {
            result[i]?.push(null);
          }
        }
      }
      return result;
    },
    [dateFormat]
  );

  const heatMapSVGContent: ReactElement[] = useMemo(() => {
    const result: ReactElement[] = [];

    const contributions = createHeapMapData(values, until, columns);

    // Add panel
    for (let i = 0; i < columns; i += 1) {
      for (let j = 0; j < 7; j += 1) {
        const contribution = contributions?.[i]?.[j];
        // eslint-disable-next-line no-continue
        if (contribution == null) continue;
        const pos = getPanelPosition(i, j);
        const numOfColors = panelColors.length;
        // determine contribution freq color depth
        const color =
          contribution.value >= numOfColors
            ? panelColors[numOfColors - 1]
            : panelColors[contribution.value];

        const fillColor = typeof color === 'string' ? color : color?.colorHex;
        const colorOpacity = typeof color === 'string' ? 1 : color?.opacity;

        const componentKey = `panel_key_${i}_${j}`;
        let svgComponentRect = (
          <rect
            key={componentKey}
            x={pos.x}
            y={pos.y}
            width={panelSize}
            height={panelSize}
            rx={radius}
            ry={radius}
            fill={fillColor}
            opacity={colorOpacity}
            onClick={(e) => onMapCellClick?.(componentKey, contribution, e)}
            onMouseOver={(e) => onMapCellHover?.(componentKey, contribution, e)}
            {...panelRectSvgAttributes}
          />
        );

        if (contribution.value !== 0) {
          svgComponentRect = (
            <Tooltip
              key={`contribution-${componentKey}`}
              role="tooltip"
              title={`${contribution.value} energy earns on ${contribution.date}`}
              placement="top"
              arrow
            >
              <animated.g role="img" style={props}>
                {svgComponentRect}
              </animated.g>
            </Tooltip>
          );
        }

        // Add panel to result
        result.push(svgComponentRect);
      }
    }

    // week texts
    for (let i = 0; i < weekNames.length; i += 1) {
      const textBasePos = getPanelPosition(0, i);
      const svgComponentText = (
        <text
          key={`week_key_${i}`}
          style={{
            fontSize: 9,
            alignmentBaseline: 'central',
            fill: defaultWeekLabelColor,
            userSelect: 'none',
          }}
          x={textBasePos.x - panelSize / 2 - 6}
          y={textBasePos.y + panelSize / 2}
          textAnchor="middle"
        >
          {weekNames[i]}
        </text>
      );
      // Add week texts to result
      result.push(svgComponentText);
    }

    let prevMonth = -1;
    for (let i = 0; i < columns; i += 1) {
      const c = contributions?.[i]?.[0];
      // eslint-disable-next-line no-continue
      if (c == null) continue;
      if (
        columns > 1 &&
        i === 0 &&
        c.month !== contributions?.[i + 1]?.[0]?.month
      ) {
        // skip first month name to avoid text overlap
        // eslint-disable-next-line no-continue
        continue;
      }

      if (c.month !== prevMonth) {
        const textBasePos = getPanelPosition(i, 0);
        const svgComponentText = (
          <text
            key={`month_key_${i}`}
            style={{
              fontSize: 9,
              alignmentBaseline: 'central',
              fill: defaultMonthLabelColor,
              userSelect: 'none',
            }}
            x={textBasePos.x + panelSize / 2}
            y={textBasePos.y - panelSize / 2 - 2}
            textAnchor="middle"
          >
            {monthNames[c.month]}
          </text>
        );
        result.push(svgComponentText);
      }
      prevMonth = c.month;
    }

    return result;
  }, [
    columns,
    createHeapMapData,
    getPanelPosition,
    monthNames,
    onMapCellClick,
    onMapCellHover,
    panelColors,
    panelRectSvgAttributes,
    panelSize,
    props,
    radius,
    until,
    values,
    weekNames,
  ]);

  const handleResize = useCallback(
    (contentRect: ContentRect) => {
      const size = contentRect.bounds;
      if (size == null) return;
      const visibleWeeks = Math.floor((size.width - weekLabelWidth) / 13);
      setColumns(Math.min(visibleWeeks, maxWidth));
    },
    [maxWidth]
  );

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current == null) return;
    const bBox = svgRef.current.getBBox();
    svgRef.current.setAttribute('width', `${bBox.width}`);
  }, []);

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div ref={measureRef} className={cn('w-fit mt-2', className)}>
          <StyledSvg
            ref={svgRef}
            onClick={onMapClick}
            onMouseOver={onMapHover}
            height="110"
          >
            {heatMapSVGContent}
          </StyledSvg>
        </div>
      )}
    </Measure>
  );
};

export default ActivityHeatMap;
