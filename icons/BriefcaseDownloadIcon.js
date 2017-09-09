import React from 'react'

const DEFAULT_SIZE = 24

export const BriefcaseDownloadIcon = ({
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
    <path d="M12,19L7,14H10V10H14V14H17M10,4H14V6H10M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V8C22,6.89 21.1,6 20,6Z" />
  </svg>
)
