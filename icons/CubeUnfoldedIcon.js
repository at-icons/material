import React from 'react'

const DEFAULT_SIZE = 24

export const CubeUnfoldedIcon = ({
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
    <path d="M6,9V4H13V9H23V16H18V21H11V16H1V9H6M16,16H13V19H16V16M8,9H11V6H8V9M6,14V11H3V14H6M18,11V14H21V11H18M13,11V14H16V11H13M8,11V14H11V11H8Z" />
  </svg>
)
