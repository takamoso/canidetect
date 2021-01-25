# CSS Hacks

## Internet Explorer

<details><summary><b>IE 7</あ></summary>

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