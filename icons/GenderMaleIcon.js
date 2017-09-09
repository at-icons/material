import React from 'react'

const DEFAULT_SIZE = 24

export const GenderMaleIcon = ({
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
    <path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15C15,18.31 12.31,21 9,21C5.69,21 3,18.31 3,15C3,11.69 5.69,9 9,9M9,11C6.79,11 5,12.79 5,15C5,17.21 6.79,19 9,19C11.21,19 13,17.21 13,15C13,12.79 11.21,11 9,11Z" />
  </svg>
)
