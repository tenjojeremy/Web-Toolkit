import { string, func } from 'prop-types'

export const defaultProps = {
  src: null,
  size: 184,
  alt: 'poster',
  backgroundColor: 'blackOpaque',
  onClick: () => null,
}

export const propTypes = {
  src: string,
  text: string,
  onClick: func,
}