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
    <path d="M3.29,7.77L4.42,7.38L7.19,9.47L11.8,4.88L14.5,6.1L14.54,14.96L11.78,16.17L7.18,11.62L4.42,13.71L3.29,13.33L6.06,10.57L3.29,7.77M8.63,10.56L11.77,12.89V8.19L8.63,10.56M17,19.17V2.03L22,4.1V19.9L16.91,22L2,16.92L17,19.17Z" />
  </svg>
)
