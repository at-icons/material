import React from 'react'

const DEFAULT_SIZE = 24

export const FloppyIcon = ({
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
    <path d="M4.5,22L2,19.5V4C2,2.9 2.9,2 4,2H20C21.1,2 22,2.9 22,4V20C22,21.1 21.1,22 20,22H17V15C17,14.45 16.55,14 16,14H7C6.45,14 6,14.45 6,15V22H4.5M5,4V10C5,10.55 5.45,11 6,11H18C18.55,11 19,10.55 19,10V4H5M8,16H11V20H8V16M20,4V5H21V4H20Z" />
  </svg>
)