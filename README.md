# CSS Hacks


## CLI

### `npm run data` command

```
Command:
  $ npm run data -- [OPTIONS]

Options:
  --mq, --media-query
  --pe, --pseudo-element
  --pc, --pseudo-class
  --p,  --property
  --v,  --value
  --vp, --vendor-prefix

Examples:
  $ npm run data -- --pseudo-class is matches
  $ npm run data -- --pc is matches '"-webkit-any(_)"'
```

## Browsers

### Internet Explorer, Edge

<details><summary><b>IE 7</b></summary>

```css
_:_, .selector {
  property: value;
}
```
```css
_:first, .selector {
  property: value;
}
```
```css
_>_, .selector {
  *property: value;
}
```
```css
*+html .selector {
  property: value;
}
```
```css
*:first-child+html .selector {
  property: value;
}
```

</details>

<details><summary><b>IE 8</b></summary>

```css
@media \0 {
  .selector {
    property: value;
  }
}
```
```css
@media \0screen {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>IE 9</b></summary>

```css
@media (min-width: 0\0) and (min-resolution: .001dpcm) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>IE 9+</b></summary>

```css
@media (min-width: 0\0) and (min-resolution: +36dpi) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>IE 10</b></summary>

```css
_:-ms-lang(_), .selector {
  property: value\9;
}
```

</details>

<details><summary><b>IE 10+</b></summary>

```css
_:-ms-input-placeholder, :root .selector {
  property: value;
}
```

</details>

<details><summary><b>IE 11</b></summary>

```css
_:not(_)::-ms-backdrop, .selector {
  property: value;
}
```
```css
_::-ms-backdrop, :root .selector {
  property: value;
}
```
```css
_:-ms-fullscreen, :root .selector {
  property: value;
}
```

</details>

<details><summary><b>Edge 12</b></summary>

```css
@supports (-ms-accelerator: true) and (not (color: unset)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 12-18</b></summary>

```css
@supports (-ms-ime-align: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 13</b></summary>

```css
@supports (-ms-accelerator: true) and (color: unset) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 13-18</b></summary>

```css
@supports (-ms-ime-align: auto) and (top: unset) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 14</b></summary>

```css
@supports (-ms-ime-align: auto) and (not (-ms-accelerator: true)) and (not (-webkit-text-stroke: initial)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 14-18</b></summary>

```css
@supports (-ms-ime-align: auto) and (not (-ms-accelerator: true)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 15</b></summary>

```css
@supports (-ms-ime-align: auto) and (-webkit-text-stroke: initial) and (not (position: sticky)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 15-18</b></summary>

```css
@supports (-ms-ime-align: auto) and (-webkit-text-stroke: initial) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 16</b></summary>

```css
@supports (-ms-ime-align: auto) and (gap: 0) and (not (paint-order: fill)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 16-18</b></summary>

```css
@supports (-ms-ime-align: auto) and (gap: 0) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 17</b></summary>

```css
@supports (-ms-ime-align: auto) and (paint-order: fill) and (not (-webkit-mask: none)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 17-18</b></summary>

```css
@supports (-ms-ime-align: auto) and (paint-order: fill) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Edge 18</b></summary>

```css
@supports (-ms-ime-align: auto) and (overscroll-behavior: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chromium Edge 79+</b></summary>

```css
_:lang(_), _::-ms-value, _::-internal-media-controls-overlay-cast-button, .selector {
  property: value;
}
```

</details>

<details><summary><b>Chromium Edge 81</b></summary>

```css
@supports (color-scheme: dark) and (image-orientation: none) and (not (-webkit-appearance: auto)) and (not (top: revert)) {
  _::-ms-value, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chromium Edge 83</b></summary>

```css
@supports selector(::-ms-value) and (-webkit-appearance: auto) and (not (top: revert)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chromium Edge 83+</b></summary>

```css
@supports selector(::-ms-value) and selector(::-internal-media-controls-overlay-cast-button) {
  .selector {
    property: value;
  }
}
```

</details>


### Firefox

<details><summary><b>Firefox 1+</b></summary>

```css
@-moz-document url-prefix() {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 25</b></summary>

```css
@supports (background-attachment: local) and (not (image-orientation: from-image)) and (-moz-orient: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 26</b></summary>

```css
@supports (image-orientation: from-image) and (not (all: unset)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 27</b></summary>

```css
@supports (all: unset) and (not (flex-wrap: wrap)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 28</b></summary>

```css
@supports (flex-wrap: wrap) and (not (border-image: -moz-element(#_))) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 29</b></summary>

```css
@supports (border-image: -moz-element(#_)) and (not (background-blend-mode: hue)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 30</b></summary>

```css
@supports (background-blend-mode: hue) and (not (paint-order: fill)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 31</b></summary>

```css
@supports (paint-order: fill) and (not (box-decoration-break: clone)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 32</b></summary>

```css
@supports (box-decoration-break: clone) and (not (color: rebeccapurple)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 33</b></summary>

```css
@supports (color: rebeccapurple) and (not (font-kerning: auto)) {
  _:-moz-is-html, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 34</b></summary>

```css
@supports (font-kerning: auto) and (not (filter: blur(0))) and (-moz-orient: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 35</b></summary>

```css
@supports (filter: blur(0)) and (not (isolation: auto)) and (-moz-orient: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 36</b></summary>

```css
@supports (empty-cells: -moz-show-background) and (background: -moz-linear-gradient(red, 1%, tan)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 37</b></summary>

```css
@supports (display: contents) and (not (ruby-align: start)) and (-moz-orient: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 38</b></summary>

```css
@supports (ruby-align: start) and (not (scroll-snap-type: none)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 39</b></summary>

```css
@supports (scroll-snap-type: none) and (not (-moz-orient: block)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 40</b></summary>

```css
@supports (-moz-orient: block) and (not (padding-inline-end: 0)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 43</b></summary>

```css
@supports (hyphens: none) and (not (text-orientation: sideways)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 44</b></summary>

```css
@supports (text-orientation: sideways) and (not (align-self: end)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 45</b></summary>

```css
@supports (align-self: end) and (not (align-self: unsafe center)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```
```css
@supports (align-self: end) and (not (align-self: normal)) {
  _:-moz-is-html, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 47</b></summary>

```css
@supports (-moz-orient: block) and (not (color-adjust: exact)) {
  _::backdrop, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 48</b></summary>

```css
@supports (color-adjust: exact) and (not (color: #0000)) {
  _:-moz-is-html, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 49</b></summary>

```css
@supports (color: #0000) and (not (border-image-repeat: space)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 52</b></summary>

```css
@supports (grid-gap: 0) and (not (caret-color: red)) {
  _:-moz-is-html, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 53</b></summary>

```css
@supports (caret-color: red) and (not (clip-path: inset(1%))) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 54</b></summary>

```css
@supports (clip-path: inset(1%)) and (not (float: inline-end)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 61</b></summary>

```css
@supports (gap: 0) and (not (shape-margin: 0)) and (not (-ms-ime-align: auto)) {
  .selector {
    property: value;
  }
}
```
```css
@supports (justify-items: legacy) and (not (font-variation-settings: normal)) {
  _:-moz-is-html, .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 62</b></summary>

```css
@supports (shape-margin: 0) and (not (resize: block)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 63</b></summary>

```css
@supports (resize: block) and (not (scrollbar-color: auto)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```
```css
_::-moz-tree-row, _::slotted(_), .selector {
  property: value;
}
```

</details>

<details><summary><b>Firefox 64</b></summary>

```css
@supports (scrollbar-color: auto) and (not (break-after: always)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 65</b></summary>

```css
@supports (break-after: always) and (not (overflow-anchor: auto)) and (-moz-binding: none) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 66</b></summary>

```css
@supports (overflow-anchor: auto) and (-moz-binding: none) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 67</b></summary>

```css
@supports (top: revert) and (not (scroll-margin: 0)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 68</b></summary>

```css
@supports (scroll-margin: 0) and (not selector(_>_)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 69</b></summary>

```css
@supports selector(_>_) and (not (display: block flex)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```
```css
@supports selector(_>_) and (not (text-underline-offset: 0)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 70</b></summary>

```css
@supports (display: block flex) and (not (clip-path: path('M0,0'))) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 71</b></summary>

```css
@supports (clip-path: path('M0,0')) and (not (offset-anchor: auto)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 72</b></summary>

```css
@supports (offset-anchor: auto) and (not (overscroll-behavior-block: auto)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 72+</b></summary>

```css
@-moz-document url-prefix() {
  @supports (offset-anchor: auto) {
    .selector {
      property: value;
    }
  }
}
```

</details>

<details><summary><b>Firefox 73</b></summary>

```css
@supports (overscroll-behavior-block: auto) and (-moz-column-width: 0) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 74</b></summary>

```css
@supports (text-underline-offset: 1%) and (not (top: min(1%, 1%))) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 75</b></summary>

```css
@supports (top: min(1%, 1%)) and (text-decoration-skip-ink: all) and (-moz-orient: block) and (not (color: canvas)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 80</b></summary>

```css
@supports (appearance: none) and (not (overflow: clip)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 81</b></summary>

```css
@supports (overflow: clip) and (not selector(::file-selector-button)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 82</b></summary>

```css
@supports selector(::file-selector-button) and (not (background: conic-gradient(red, tan))) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 83</b></summary>

```css
@supports (background: conic-gradient(red, tan)) and (not selector(:not(_>_))) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 84</b></summary>

```css
@supports selector(:not(_>_)) and selector(:is(_)) and (not (touch-action: pinch-zoom)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 85</b></summary>

```css
@supports (touch-action: pinch-zoom) and (not selector(:autofill)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 86</b></summary>

```css
@supports selector(:autofill) and (caption-side: left) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 87</b></summary>

```css
@supports (not (caption-side: left)) and (not selector(:user-valid)) {
  .selector {
    property: value;
  }
}
```

</details>


### Chrome, Chromium Edge, Opera

<details><summary><b>Chrome 39+, Chromium Edge 79+, Opera 26+</b></summary>

```css
_:lang(_), _::-internal-media-controls-overlay-cast-button, .selector {
  property: value;
}
```

</details>

<details><summary><b>Chrome 53, Opera 40</b></summary>

```css
@supports (filter: blur(0)) and (not (user-select: none)) and (not (justify-self: end)) and (not (-ms-ime-align: auto)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 54, Opera 41</b></summary>

```css
@supports (user-select: none) and (not (touch-action: pan-up)) and (not (scroll-snap-type: none)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 55, Opera 42</b></summary>

```css
@supports (touch-action: pan-up) and (not (touch-action: pinch-zoom)) and (-webkit-box-lines: single) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 56, Opera 43</b></summary>

```css
@supports (touch-action: pinch-zoom) and (not (caret-color: red)) and (not (-ms-ime-align: auto)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 57, Opera 44</b></summary>

```css
@supports (caret-color: red) and (not (line-break: auto)) and (not (display: contents)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 58, Opera 45</b></summary>

```css
@supports (line-break: auto) and (not (place-self: auto)) and (not (-ms-ime-align: auto)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 60+, Opera 47+</b></summary>

```css
_:lang(_), _::-internal-media-controls-overlay-cast-button, _:focus-within, .selector {
  property: value;
}
```

</details>

<details><summary><b>Chrome 62, Opera 49</b></summary>

```css
@supports (color: #0000) and (not (top: 1q)) and (not (display: contents)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 63, Opera 50</b></summary>

```css
@supports (top: 1q) and (not (transform-box: fill-box)) and (not (display: contents)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 64, Opera 51</b></summary>

```css
@supports (transform-box: fill-box) and (not (color: rgb(0 0 0))) and (not (display: contents)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 65, Opera 52</b></summary>

```css
@supports (color: rgb(0 0 0)) and (not (gap: 0)) and (not (scroll-snap-type: none)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 66, Opera 53</b></summary>

```css
@supports (gap: 0) and (-webkit-line-clamp: 1%) and (not (scroll-snap-type: none)) and (not (-ms-ime-align: auto)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 75, Opera 62</b></summary>

```css
@supports (not (overflow: -webkit-paged-x)) and (not (white-space: break-spaces)) and (line-break: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 76, Opera 63</b></summary>

```css
@supports (white-space: break-spaces) and (not (content: ''/'')) and (not (line-break: anywhere)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 77, Opera 64</b></summary>

```css
@supports (overscroll-behavior-block: auto) and (not (opacity: 0%)) and (not (top: min(0%, 0%))) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 78, Opera 65</b></summary>

```css
@supports (opacity: 0%) and (not (top: min(0%, 0%))) and (not (text-underline-offset: 0)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 79, Chromium Edge 79, Opera 66</b></summary>

```css
@supports (top: min(0%, 0%)) and (not (line-break: anywhere)) and (white-space: break-spaces) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 80, Chromium Edge 80, Opera 67</b></summary>

```css
@supports (line-break: anywhere) and (not (color-scheme: dark)) and (not (image-orientation: none)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 81, Chromium Edge 81, Opera 68</b></summary>

```css
@supports (color-scheme: dark) and (image-orientation: none) and (not (-webkit-appearance: auto)) and (not (top: revert)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 83, Chromium Edge 83, Opera 69</b></summary>

```css
@supports (-webkit-appearance: auto) and (not (top: revert)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 83+, Chromium Edge 83+, Opera 69+</b></summary>

```css
@supports selector(::-internal-media-controls-overlay-cast-button) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 84, Chromium Edge 84, Opera 70</b></summary>

```css
@supports (appearance: auto) and (top: revert) and (-webkit-column-width: 0) and (not (counter-set: none)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 85, Chromium Edge 85, Opera 71</b></summary>

```css
@supports (counter-set: none) and (not selector(::marker)) and (appearance: auto) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 86, Chromium Edge 86, Opera 72</b></summary>

```css
@supports selector(::marker) and (not (text-underline-offset: 0)) and (column-width: 0) and (not (-moz-column-width: 0)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 87, Chromium Edge 87, Opera 73</b></summary>

```css
@supports (text-underline-offset: 0) and (not (clip-path: path('M0,0'))) and (not selector(:not(_>_))) and (not (-moz-orient: block)) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 88, Chromium Edge 88, Opera 74</b></summary>

```css
@supports selector(:not(_>_)) and (not selector(::target-text)) and selector(::-internal-media-controls-overlay-cast-button) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 89, Chromium Edge 89, Opera 75</b></summary>

```css
@supports selector(::target-text) and (not (overflow: clip)) and selector(::-internal-media-controls-overlay-cast-button) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 93, Chromium Edge 93, Opera 79</b></summary>

```css
@supports (accent-color: red) and (not (scrollbar-gutter: auto)) and selector(::-internal-media-controls-overlay-cast-button) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Chrome 94, Chromium Edge 94, Opera 80</b></summary>

```css
@supports (scrollbar-gutter: auto) and (not (contain-intrinsic-block-size: 0)) and selector(::-internal-media-controls-overlay-cast-button) {
  .selector {
    property: value;
  }
}
```

</details>


### Safari, iOS Safari

<details><summary><b>Safari 9+, iOS Safari 9+</b></summary>

```css
@supports (-webkit-marquee-speed: 0) and (paint-order: fill) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Safari 11+, iOS Safari 11+</b></summary>

```css
@supports (-webkit-marquee-speed: 0) and (font-optical-sizing: none) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Safari 13+, iOS Safari 13+</b></summary>

```css
@supports (-webkit-marquee-speed: 0) and (paint-order: fill) and (white-space: break-spaces) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Safari 14+, iOS Safari 14+</b></summary>

```css
@supports (-webkit-marquee-speed: 0) and (paint-order: fill) {
  _:is(_), .selector {
    property: value;
  }
}
```

</details>