import { string, number, bool, object, func } from 'prop-types'

export const defaultProps = {
  src: '',
  alt: 'estilistta',
  background: 'none',
  name: '',
  index: null,
  round: null,
  borderColor: null,
  lettersFont: 'var(--font-primary)',
  letterColor: 'primary',
  size: 50,
  width: null,
  height: null,
  isLazyLoaded: null,
  onClick: () => null,
  definitions: null,
  skeleton: null,
  cursor: 'pointer',
  position: 'center',
  OnVisibilityParams: {
    offset: 200,
    once: true,
  },
}

export const propTypes = {
  src: string,
  alt: string,
  size: number,
  name: string,
  background: string,
  width: number,
  height: number,
  isLazyLoaded: bool,
  cursor: string,
  position: string,
  index: number,
  onClick: func,
  definitions: object,
  skeleton: bool,
  round: bool,
  borderColor: string,
}
