import React from 'react'

const DEFAULT_SIZE = 24

export const CellphoneLinkOffIcon = ({
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
    <path d="M23,8H17C16.45,8 16,8.45 16,9V13.18L18,15.18V10H22V17H19.82L22.82,20H23C23.55,20 24,19.55 24,19V9C24,8.45 23.55,8 23,8M4,6.27L14.73,17H4V6.27M1.92,1.65L0.65,2.92L2.47,4.74C2.18,5.08 2,5.5 2,6V17H0V20H17.73L20.08,22.35L21.35,21.08L3.89,3.62L1.92,1.65M22,6V4H6.82L8.82,6H22Z" />
  </svg>
)
