import React from 'react'

const DEFAULT_SIZE = 24

export const HospitalMarkerIcon = ({
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
    <path d="M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9C5,5.13 8.13,2 12,2M9,6V12H11V10H13V12H15V6H13V8H11V6H9Z" />
  </svg>
)
