import React from 'react'
import { storiesOf } from '@storybook/react'

import B from '../../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'

import Dropdown from './dropdown.index'

const Variants = () => {
  return (
    <>
      <B title='Default' noBackground>
        <Dropdown />
      </B>
    </>
  )
}

// Stories
storiesOf('Input|Dropdown', module).add('Variants', () => <Variants />)