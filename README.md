# しぐれうい Theme Transition CSS

Transition your CSS color theme with Shigure Ui-chan's dance. Inspired by [SaltyAom](https://github.com/SaltyAom)'s [ElysiaJS Docs](https://elysiajs.com/).

- Original Animation/Illustration by [ががめ](https://x.com/utsugame).
- Preprocessed the video with following tools:
  - [FFmpeg](https://ffmpeg.org/) (video to frames)
  - [Upscayl](https://upscayl.org/) (upscale frames)
  - [GIMP](https://www.gimp.org/) (background removal)
  - [ImageMagick](https://imagemagick.org/) (compose animated webp)

## [Demo](https://guyutongxue.site/shigure-ui-dance-css)

## Usage

- Make your default CSS color theme **light**.
- Write dark-color-scheme styles under `.dark` class.
- `@import` or `<link>` CSS into your project: `https://cdn.jsdelivr.net/gh/Guyutongxue/shigure-ui-dance-css@main/transition.css`
- Use following JavaScript to toggle the theme:

```js
document.startViewTransition(() => {
  document.documentElement.classList.toggle("dark");
});
```

> [Can I Use?](https://caniuse.com/view-transitions)

