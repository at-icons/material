import React from 'react'

const DEFAULT_SIZE = 24

export const BriefcaseUploadIcon = ({
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
    <path d="M20,6C21.1,6 22,6.9 22,8V19C22,20.1 21.1,21 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4L10,2H14L16,4V6H20M10,4V6H14V4H10M12,9L7,14H10V18H14V14H17L12,9Z" />
  </svg>
)
