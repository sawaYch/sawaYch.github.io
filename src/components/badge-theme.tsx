const BadgeTheme = {
  root: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      info: 'bg-cyan-200 text-cyan-900  group-hover:bg-cyan-400',
      gray: 'bg-gray-200 text-gray-900 group-hover:bg-gray-400',
      failure: 'bg-red-200 text-red-900 group-hover:bg-red-400',
      success: 'bg-green-200 text-green-900 group-hover:bg-green-400',
      warning: 'bg-yellow-200 text-yellow-900 group-hover:bg-yellow-400',
      indigo: 'bg-indigo-200 text-indigo-900 group-hover:bg-indigo-400',
      purple:
        'bg-dracula-purple-200 text-dracula-purple-900 group-hover:bg-dracula-purple-400',
      pink: 'bg-pink-200 text-pink-900 group-hover:bg-pink-400',
      blue: 'bg-blue-400 text-blue-900 group-hover:bg-blue-500',
      cyan: 'bg-cyan-200 text-cyan-900 group-hover:bg-cyan-400',
      dark: 'bg-gray-700 text-gray-300 group-hover:bg-gray-00',
      light: 'bg-gray-200 text-gray-900 group-hover:bg-gray-400',
      green: 'bg-green-200 text-green-900 group-hover:bg-green-400',
      lime: 'bg-lime-200 text-lime-900 group-hover:bg-lime-400',
      red: 'bg-red-200 text-red-900 group-hover:bg-red-400',
      teal: 'bg-teal-200 text-teal-900 group-hover:bg-teal-400',
      yellow: 'bg-yellow-200 text-yellow-900 group-hover:bg-yellow-400',
      orange: 'bg-orange-200 text-orange-900 group-hover:bg-orange-400',
      fuchsia: 'bg-fuchsia-200 text-fuchsia-900 group-hover:bg-fuchsia-400',
    },
    href: 'group',
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-1.5 text-sm',
    },
  },
  icon: {
    off: 'rounded px-2 py-0.5',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5',
    },
  },
};

export default BadgeTheme;
