import React from 'react'
import { storiesOf } from '@storybook/react'

import testImage from '../../../../.storybook/Custom-Components/Test-Images/testImag.jpg'
import testImage2 from '../../../../.storybook/Custom-Components/Test-Images/test2.jpg'
import B from '../../../../.storybook/Custom-Components/VariationBlock/variationBlock.index'
import Image from '../index'

const Variations = () => (
  <>
    <B title='default'>
      <Image
        src={testImage}
        width={400}
        height={400}
        onClick={() => console.log('Clicked')}
      />
    </B>

    <B title='isLazyLoaded'>
      <Image isLazyLoaded src={testImage2} onClick={() => console.log('Clicked')} />
    </B>
  </>
)

storiesOf('Media|Image', module).add('variations', () => <Variations />)
