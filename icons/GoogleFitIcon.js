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
    <path d="M17,4C19.76,4 22,6.24 22,9C22,10.38 21.44,11.63 20.54,12.54L12,21.07L3.46,12.54C2.56,11.63 2,10.38 2,9C2,6.24 4.24,4 7,4C8.38,4 9.63,4.56 10.54,5.46L12,6.93L13.46,5.46C14.37,4.56 15.62,4 17,4M15.59,7.59L9.17,14L12,16.83L18.41,10.41C18.78,10.05 19,9.55 19,9C19,7.9 18.1,7 17,7C16.45,7 15.95,7.22 15.59,7.59M8.41,7.59C8.05,7.22 7.55,7 7,7C5.9,7 5,7.9 5,9C5,9.55 5.22,10.05 5.59,10.41L7.05,11.88L9.88,9.05L8.41,7.59Z" />
  </svg>
)
