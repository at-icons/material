import React from 'react'

const DEFAULT_SIZE = 24

export const PollIcon = ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z" />
  </svg>
)
