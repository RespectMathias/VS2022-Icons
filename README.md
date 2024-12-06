<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://raw.githubusercontent.com/RespectMathias/VS2022-Icons/91bf49a9cb34831dc47ae9191fcccaedd3cce8b4/images/logo.webp" alt="Logo" width="256" height="256">
  <h3 align="center">VS2022 Icons</h3>
  <p align="center">
</div>

Using modified icons from [Visual Studio Image Library](https://msdn.microsoft.com/en-us/library/ms246582.aspx), adapted to match VS2022. The icons are compiled to dark, light, and high contrast themes.

## Icon Sample
![Preview](https://raw.githubusercontent.com/RespectMathias/VS2022-Icons/refs/heads/main/images/comparison.webp)

## Build

1. Add your new `.svg` icon files to `/src/svg/`
2. Add the icon info to `/src/icon-settings.json`
3. Run `npm run compile` on the command line to run default task.
4. Run `vsce package` to create the vsix package.

## NOTICE 📝

This project uses intellectual property of other projects. See [NOTICE](NOTICE) for details.
