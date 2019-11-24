import React, { memo, forwardRef } from 'react'

const defineTag = (tag, variant) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return 'p'
    default:
      return tag
  }
}

const Typography = (
  {
    tag = 'span',
    variant = 'body1',
    color = null,
    onClick = () => null,
    text = '',
    ...otherStyles
  },
  ref,
) => {
  const style = {
    color: color ? `var(--color-${color})` : null,
    ...otherStyles,
  }
  const className = `typography-${variant}`
  const Tag = defineTag(tag, variant)

  return (
    <Tag
      style={style}
      className={className}
      variant={variant}
      ref={ref}
      onClick={onClick}
    >
      {text}
    </Tag>
  )
}

export default memo(forwardRef(Typography))
