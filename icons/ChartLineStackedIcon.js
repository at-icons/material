import React from 'react'

const DEFAULT_SIZE = 24

export const ChartLineStackedIcon = ({
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
    <path d="M17.45,15.18L22,6.81V19L22,21H2V3H4V15.54L4,19H4.31L6,19H6.57L10.96,11.44L17.45,15.18M22,3L21.97,3.45L17,11L10,6L6,12V3H22Z" />
  </svg>
)
