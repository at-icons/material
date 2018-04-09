import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5C13,2.12 11.88,1 10.5,1C9.12,1 8,2.12 8,3.5V5H4C2.9,5 2,5.9 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20C2,21.1 2.9,22 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17C18.1,22 19,21.1 19,20V16H20.5C21.88,16 23,14.88 23,13.5C23,12.12 21.88,11 20.5,11Z" />
  </svg>
)
