import React from 'react'

const DEFAULT_SIZE = 24

export const KeyRemoveIcon = ({
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
    <path d="M6.5,3C8.46,3 10.13,4.25 10.74,6H22V9H18V12H15V9H10.74C10.13,10.75 8.46,12 6.5,12C4,12 2,10 2,7.5C2,5 4,3 6.5,3M6.5,6C5.67,6 5,6.67 5,7.5C5,8.33 5.67,9 6.5,9C7.33,9 8,8.33 8,7.5C8,6.67 7.33,6 6.5,6M14.59,14L16,15.41L13.41,18L16,20.59L14.59,22L12,19.41L9.41,22L8,20.59L10.59,18L8,15.41L9.41,14L12,16.59L14.59,14Z" />
  </svg>
)