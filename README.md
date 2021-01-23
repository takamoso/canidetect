# CSS Hacks

## Internet Explorer

<details><summary><h3>IE 7</h3></summary>

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

<details><summary><h3>IE 8</h3></summary>

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

<details><summary><h3>IE 9</h3></summary>

```css
@media (min-width: 0\0) and (min-resolution: .001dpcm) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><h3>IE 9+</h3></summary>

```css
@media (min-width: 0\0) and (min-resolution: +36dpi) {
  .selector {
    property: value;
  }
}
```

</details>

<details><summary><h3>IE 10</h3></summary>

```css
_:-ms-lang(_), .selector {
  property: value\9;
}
```

</details>

<details><summary><h3>IE 10+</h3></summary>

```css
_:-ms-input-placeholder, :root .selector {
  property: value;
}
```

</details>

<details><summary><h3>IE 11</h3></summary>

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