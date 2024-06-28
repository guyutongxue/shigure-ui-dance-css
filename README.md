# しぐれうい Theme Transition CSS

Transition your CSS color theme with Shigure Ui-chan's dance. Inspired by [SaltyAom](https://github.com/SaltyAom)'s [ElysiaJS Docs](https://elysiajs.com/).

- Original Animation/Illustration by [ががめ](https://x.com/utsugame).
- Preprocessed the video with following tools:
  - [FFmpeg](https://ffmpeg.org/)
  - [GIMP](https://www.gimp.org/)
  - [ImageMagick](https://imagemagick.org/)

## [Demo](https://guyutongxue.site/shigure-ui-dance-css)

## Usage

- Make your default CSS color theme **light**.
- Write dark-color-scheme styles under `.dark` class.
- `@import` or `<link>` CSS `TODO` into your project.
- Use following JavaScript to toggle the theme:

```js
document.startViewTransition(() => {
  document.documentElement.classList.toggle("dark");
});
```

> [Can I Use?](https://caniuse.com/view-transitions)

