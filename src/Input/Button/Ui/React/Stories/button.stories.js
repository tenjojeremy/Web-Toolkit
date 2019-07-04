import React from 'react'
import { storiesOf } from '@storybook/react'

import markdown from '../README.md'
import ButtonStyle1 from '../Styles/1'
import List from '../../../../../Data-Display/List/Ui/React/list.index'

import Variations from './button.variations'

const All = () => (
  <List>
    <Variations Button={ButtonStyle1} name='style1' />
  </List>
)

storiesOf('Input|Button/Ui/React', module).add('styles', () => <All />, {
  notes: { markdown },
})
