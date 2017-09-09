import React from 'react'

const DEFAULT_SIZE = 24

export const NfcVariantIcon = ({
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
    <path d="M18,6H13C11.9,6 11,6.9 11,8V10.28C10.41,10.62 10,11.26 10,12C10,13.1 10.9,14 12,14C13.11,14 14,13.1 14,12C14,11.26 13.6,10.62 13,10.28V8H16V16H8V8H10V6H8L6,6V18H18M20,20H4V4H20M20,2H4C2.9,2 2,2.9 2,4V20C2,21.1 2.9,22 4,22H20C21.11,22 22,21.1 22,20V4C22,2.89 21.11,2 20,2Z" />
  </svg>
)
