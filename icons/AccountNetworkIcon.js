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
    <path d="M13,17V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H5V15.5C5,13.57 8.13,12 12,12C15.87,12 19,13.57 19,15.5V17H13M12,3C13.93,3 15.5,4.57 15.5,6.5C15.5,8.43 13.93,10 12,10C10.07,10 8.5,8.43 8.5,6.5C8.5,4.57 10.07,3 12,3Z" />
  </svg>
)
