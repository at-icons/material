import React from 'react'

const DEFAULT_SIZE = 24

export const PrescriptionIcon = ({
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
    <path d="M4,4V10L4,14H6V10H8L13.41,15.41L9.83,19L11.24,20.41L14.83,16.83L18.41,20.41L19.82,19L16.24,15.41L19.82,11.83L18.41,10.41L14.83,14L10.83,10H11C12.66,10 14,8.66 14,7C14,5.34 12.66,4 11,4H4M6,6H11C11.55,6 12,6.45 12,7C12,7.55 11.55,8 11,8H6V6Z" />
  </svg>
)
