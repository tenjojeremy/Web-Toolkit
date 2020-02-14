import React, { memo } from 'react'

import BottomScrollListener from '../../miscUtils/scrolling/eventListeners/scrollEnd'

import { Wrapper } from './styles'
import { defaultProps, propTypes } from './propTypes'

const List = ({
  photoGrid,
  data,
  children,
  direction,
  onItemClick,
  ItemComponent,
  listItemDefinitions,
  repeat,
  autoColumns,
  overflows,
  minWidth,
  repeatOnMinWidth,
  onScrollEnd,
  ...styles
}) => {
  const dataLength = data.length

  const loadWithItemComponent = () =>
    data.map((item, index) => (
      <ItemComponent
        item={item}
        key={item._id || item.id || index}
        index={index}
        onClick={() => onItemClick({ item, index })}
        id={item._id || item.id || index}
        definitions={listItemDefinitions}
        {...item}
      />
    ))

  const Main = (scrollRef) => (
    <Wrapper
      ref={scrollRef}
      direction={direction}
      dataLength={dataLength}
      repeat={repeat}
      autoColumns={autoColumns}
      overflows={overflows}
      minWidth={minWidth}
      repeatOnMinWidth={repeatOnMinWidth}
      photoGrid={photoGrid}
      {...styles}
    >
      {children && children}
      {ItemComponent && loadWithItemComponent()}
      {overflows && <span className='min' />}
    </Wrapper>
  )

  // Template
  return onScrollEnd ? (
    <BottomScrollListener onBottom={onScrollEnd}>{Main}</BottomScrollListener>
  ) : (
    Main()
  )
}

List.defaultProps = defaultProps
List.propTypes = propTypes

export default memo(List)
