import React, { memo } from 'react'

import Bar from '../../navBar.index'

import data from './example.fileUpload.mockData'

const testFileInput = (file) => {
  console.log(file)
}

const NavBar = () => {
  return (
    <Bar
      router={() => null}
      data={data}
      activeColor='#24c3a9'
      defaultColor='#b0b0b0'
      backgroundColor='rgba(36, 195, 169, 0.2)'
      onFileSelect={testFileInput}
    />
  )
}

export default memo(NavBar)