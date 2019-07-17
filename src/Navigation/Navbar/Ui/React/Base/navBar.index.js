import React, { memo } from 'react'

import List from '../../../../../Data-Display/List/Ui/React/list.index'
import Icon from '../../../../../Data-Display/Icon/Ui/React/icon.index'
import Image from '../../../../../Media/Image/Ui/React/image.index'

import { defaultProps, propTypes } from './navBar.propTypes'
import { Wrapper } from './navBar.styles'

const NavBar = ({ data, color, onInput, router }) => {
  return (
    <Wrapper>
      <List style={{ justifyContent: 'space-around' }}>
        {data.map(({ file = null, src = null, icon, label, link }) => {
          const { location } = router
          const isActive = location === link
          const inputProps = file ? { onInput } : null

          return icon ? (
            <Icon
              key={label}
              name={icon}
              label={label}
              color={isActive ? color : 'grey'}
              link={link}
              noBackground
              inputProps={inputProps}
            />
          ) : src ? (
            <Image
              src={src}
              round
              borderColor={isActive ? color : null}
              inputProps={inputProps}
              size={40}
            />
          ) : null
        })}
      </List>
    </Wrapper>
  )
}

NavBar.defaultProps = defaultProps
NavBar.propTypes = propTypes

export default memo(NavBar)
