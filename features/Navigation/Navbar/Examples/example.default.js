import React, { memo } from 'react'
import data from './example.defalt.mockdata'
import Bar from '../navBar.index'

const NavBar = () => {
  return (
    <Bar
      router={() => null}
      data={data}
      activeColor='#24c3a9'
      defaultColor='#b0b0b0'
      backgroundColor='rgba(36, 195, 169, 0.2)'
    />
  )
}

export default memo(NavBar)
