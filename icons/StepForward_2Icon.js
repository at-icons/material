import React from 'react'

const DEFAULT_SIZE = 24

export const StepForward_2Icon = ({
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
    <path d="M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z" />
  </svg>
)
