import React from 'react'

const DEFAULT_SIZE = 24

export const OpenInAppIcon = ({
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
    <path d="M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H9V18H5V8H19V18H15V20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
  </svg>
)
