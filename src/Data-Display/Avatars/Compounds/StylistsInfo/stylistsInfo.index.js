import React, { memo } from 'react'

import Avatar from '../../avatar.index'
import Rating from '../../../../Feedback/Rating/Ui/React/ratings.index'

import { defaultProps, propTypes } from './stylistsInfo.propTypes'
import { Wrapper, StylistName } from './stylistsInfo.styles'

const StylistsInfo = ({ name, rating, src, onInfoClick, onRatingChange }) => {
  const size = 120

  return (
    <Wrapper width={120}>
      <Avatar onClick={onInfoClick} name={name} rating={rating} src={src} radius={10} size={size} />
      <StylistName onClick={onInfoClick}>{name}</StylistName>
      <Rating onRatingChange={onRatingChange} value={rating} starDimension='16' starSpacing='1' />
    </Wrapper>
  )
}

StylistsInfo.defaultProps = defaultProps
StylistsInfo.propTypes = propTypes

export default memo(StylistsInfo)
