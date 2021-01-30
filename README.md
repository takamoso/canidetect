# CSS Hacks


## Browsers
### Internet Explorer

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

<details><summary><b>Firefox 81</b></summary>

```css
@supports (overflow: clip) and (not selector(::file-selector-button)) and (-moz-orient: block) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><b>Firefox 84</b></summary>

```css
@supports (not (touch-action: pinch-zoom)) {
  _:not(_>_), _:is(_), .selector {
    property: value;
  }
}
```

</details>