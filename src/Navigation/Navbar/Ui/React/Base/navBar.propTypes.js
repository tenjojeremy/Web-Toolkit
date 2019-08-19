import { string, func, number, object } from 'prop-types'

export const defaultProps = {
  color: 'primary',
  backgroundColor: 'white-opaque',
  router: window.historyRouter || {},
  onClick: () => null,
  onSearchSubmit: () => null,
  shadow: 2,
}

export const propTypes = {
  color: string,
  backgroundColor: string,
  router: object,
  onClick: func,
  onSearchSubmit: func,
  shadow: number,
}
