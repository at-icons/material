import React from 'react'

const DEFAULT_SIZE = 24

export const RssIcon = ({
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
    <path d="M6.18,15.64C7.38,15.64 8.36,16.62 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82C4,16.62 4.98,15.64 6.18,15.64M4,4.44C12.59,4.44 19.56,11.41 19.56,20H16.73C16.73,12.97 11.03,7.27 4,7.27V4.44M4,10.1C9.47,10.1 13.9,14.53 13.9,20H11.07C11.07,16.1 7.9,12.93 4,12.93V10.1Z" />
  </svg>
)
