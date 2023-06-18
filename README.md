<p align="center">
  <a href="https://github.com/sawaYch/sawaYch.github.io/tree/develop">
    <img alt="icon" src="./src/images/favicon.webp" width="60" />
  </a>
</p>
<div align="center" style="font-size:1.5em">
  SawaYch.github.io
</div><div align="center" style="font-size:1em">Personal site boilerplate based on <a href="https://github.com/gatsbyjs/gatsby-starter-minimal-ts" target="_blank" rel="noopener noreferrer">Gatsby Minimal TypeScript Starter</a></div>

---
[![Code Check](https://github.com/sawaYch/sawaYch.github.io/actions/workflows/code-check.yml/badge.svg?branch=develop)](https://github.com/sawaYch/sawaYch.github.io/actions/workflows/code-check.yml)
[![Deploy Gatsby SSG](https://github.com/sawaYch/sawaYch.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/sawaYch/sawaYch.github.io/actions/workflows/deploy.yml)  
This repository is not intended to be used as a Gatsby theme.  
Instead, it serves as a boilerplate specifically designed for deploying Gatsby SSG sites to GitHub Pages (github.io).

## 🚀 Quick start

1. **Clone this repo**

   ```shell
   # clone this repo
   git clone https://github.com/sawaYch/sawaYch.github.io.git gatsby-site-boilerplate
   ```

2. **Restore dependencies**

   Navigate into your new site’s directory, prepare to develop locally.

   ```shell
   cd gatsby-site-boilerplate/
   npm ci
   ```

3. **Start developing**

   Start it up.

   ```shell
   npm start
   ```

4. **Open the code and start customizing!**

   Your site is now running at http://localhost:8000!

   Edit `src/pages/index.tsx` to see your site update in real-time!

## 🧰 Deploy

This site are design to use SSG (Static Site Generation) and deploy to github.io page.  

By default, this repo use:  
  - `develop` branch storing site codebase
  - `master` branch for the source hosting of Gatsby SSG bundled result.  

Deploy this site using **npm script** or **github action**.

1. **Npm**

   Please config git credential and the remote upstream first.

   Then run this command to deploy:

   ```shell
   npm run deploy
   ```

2. **Github Action**

   Checkout the yaml file `.github/workflows/deploy.yml`.

   It is a manually triggered action.

   You will need an github access token of your repo, with _repo write_ permission.
