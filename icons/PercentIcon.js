import React from 'react'

const DEFAULT_SIZE = 24

export const PercentIcon = ({
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
    <path d="M7,4C8.66,4 10,5.34 10,7C10,8.66 8.66,10 7,10C5.34,10 4,8.66 4,7C4,5.34 5.34,4 7,4M17,14C18.66,14 20,15.34 20,17C20,18.66 18.66,20 17,20C15.34,20 14,18.66 14,17C14,15.34 15.34,14 17,14M20,5.41L5.41,20L4,18.59L18.59,4L20,5.41Z" />
  </svg>
)
