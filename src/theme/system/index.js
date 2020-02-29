import decamelize from 'decamelize'

export default (props) => {
  const {
    styles,
    theme: { mediaQueries = [400, 700, 1200] },
  } = props
  const selectors = []
  mediaQueries.unshift(0)

  const getString = ({ varName, key, value }) => {
    const _key = decamelize(key, '-')
    const isArray = Array.isArray(value)
    const _value = varName ? `var(--${varName}-${value})` : value

    return isArray ? handleMediaQueries({ key, value, varName }) : `${_key}: ${_value};`
  }

  const handleMediaQueries = ({ key, value, varName }) => {
    let string = ''
    const _key = decamelize(key, '-')

    string = mediaQueries.map((width, index) => {
      const cValue = value[index]
      const _value = varName ? `var(--${varName}-${cValue})` : cValue
      const property = `${_key}: ${_value};`

      return width === 0
        ? property
        : cValue
        ? `@media (min-width: ${width}px) {       
        ${property}      
      }`
        : ''
    })
    string = string.join('\n')
    return string
  }

  const handleStyles = ({ styles }) => {
    const array = []
    let string = ''

    Object.entries(styles).forEach(([key, value]) => {
      if (key.includes(':')) {
        selectors.push({ selector: key, styles: value })
      } else if (
        key.includes('padding') ||
        key.includes('margin') ||
        key.includes('gap') ||
        key.includes('Gap') ||
        key.includes('top') ||
        key.includes('right') ||
        key.includes('bottom') ||
        key.includes('left')
      )
        array.push(getString({ varName: 'spacing', key, value }))
      else if (key.includes('color') || key.includes('Color') || key.includes('fill'))
        array.push(getString({ varName: 'color', key, value }))
      else array.push(getString({ key, value }))
    })

    string = array.join('\n')
    return string
  }

  const handleSelectors = () => {
    let masterString = ''
    if (selectors.length) {
      const se = selectors.map(({ selector, styles }) => {
        let string = `${selector} {`
        string += handleStyles({ styles })
        string += `}`
        return string
      })

      masterString = se.join('\n')
      return masterString
    }

    return masterString
  }

  const genStyles = handleStyles({ styles })

  const selectorStyles = handleSelectors({ selectors })

  return `${genStyles} ${selectorStyles}`
}