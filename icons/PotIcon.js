import React from 'react'

const DEFAULT_SIZE = 24

export const PotIcon = ({
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
    <path d="M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H21V13H19V19M6,6H8V8H6V6M11,6H13V8H11V6M16,6H18V8H16V6M18,3H20V5H18V3M13,3H15V5H13V3M8,3H10V5H8V3Z" />
  </svg>
)
