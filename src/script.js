const {markup, style} = (() => {
  let markup = ''
  let style = ''
  let count = 0
  
  //
  // Media Queries
  //
  if (css.mediaQueries.length) {
    const mediaQueries = css.mediaQueries.map(m => [...css.vendorPrefixes.map(p => [`(-${p}-${m})`]), `(${m})`, ...css.values.map(v => [...css.vendorPrefixes.map(p => [`(-${p}-${m}: ${v})`]), `(${m}: ${v})`])]).flat(Infinity)
    
    for (const mediaQuery of mediaQueries) {
      const className = `css-hacks-${++count}`
      const isSupported = window.hasOwnProperty('matchMedia') ? window.matchMedia(mediaQuery).matches : null

      markup += `
        <tr>
          <th>${mediaQuery}</th>
          <td class="${className}">${isSupported ? 'YES' : isSupported === null ? 'UNK' : 'NO'}</td>
        </tr>
      `
      style += `
        .${className} {
          background: #c44130;
        }
        @media ${mediaQuery} {
          .${className} {
            background: #3ab54a;
          }
        }
      `
    }

    return {markup, style}
  }

  //
  // Pseudo Elements
  //
  if (css.pseudoElements.length) {
    const pseudoElements = css.pseudoElements.map(v => [...css.vendorPrefixes.map(p => [`::-${p}-${v}`, `:-${p}-${v}`]), `::${v}`, `:${v}`]).flat(Infinity)

    for (const pseudoElement of pseudoElements) {
      const className = `css-hacks-${++count}`
      const isSupported = (() => {
        try {
          if (!document.querySelector) {
            return null
          }

          document.querySelector(pseudoElement)
        } catch {
          return false
        }

        return true
      })()

      markup += `
        <tr>
          <th>${pseudoElement}</th>
          <td class="${className}">${isSupported ? 'YES' : 'NO'}</td>
        </tr>
      `
      style += `
        .${className} {
          background: #c44130;
        }
        _${pseudoElement}, .${className} {
          background: #3ab54a;
        }
      `
    }

    return {markup, style}
  }

  //
  // Pseudo Classes
  //
  if (css.pseudoClasses.length) {
    const pseudoClasses = css.pseudoClasses.map(v => [...css.vendorPrefixes.map(p => [`:-${p}-${v}`]), `:${v}`]).flat(Infinity)

    for (const pseudoClass of pseudoClasses) {
      const className = `css-hacks-${++count}`
      const isSupported = (() => {
        try {
          if (!document.querySelector) {
            return null
          }

          document.querySelector(pseudoClass)
        } catch {
          return false
        }

        return true
      })()

      markup += `
        <tr>
          <th>${pseudoClass}</th>
          <td class="${className}">${isSupported ? 'YES' : 'NO'}</td>
        </tr>
      `
      style += `
        .${className} {
          background: #c44130;
        }
        _${pseudoClass}, .${className} {
          background: #3ab54a;
        }
      `
    }

    return {markup, style}
  }

  //
  // Properties
  //
  if (css.properties.length) {
    const rules = css.properties.map(v => css.values.map(r => [...css.vendorPrefixes.map(p => [`-${p}-${v}: ${r}`]), `${v}: ${r}`])).flat(Infinity)
    
    for (const rule of rules) {
      const className = `css-hacks-${++count}`
      const div = document.createElement('div')

      div.style.cssText = rule

      markup += `
        <tr>
          <th>${rule}</th>
          <td class="${className}">${div.style.length ? 'YES' : 'NO'}</td>
        </tr>
      `
      style += `
        .${className} {
          background: #c44130;
        }
        @supports (${rule}) {
          .${className} {
            background: #3ab54a;
          }
        }
      `
    }

    return {markup, style}
  }
})()

document.body.innerHTML += `<div>${navigator.userAgent}</div>`
document.body.innerHTML += `<table>${markup}</table>`
document.body.innerHTML += `<style>${style}</style>`