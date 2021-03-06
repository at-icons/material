import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M8,15C6.9,15 6,14.1 6,13C6,11.9 6.9,11 8,11C9.1,11 10,11.9 10,13C10,14.1 9.1,15 8,15M10.5,17L12,14L13.5,17H10.5M16,15C14.9,15 14,14.1 14,13C14,11.9 14.9,11 16,11C17.1,11 18,11.9 18,13C18,14.1 17.1,15 16,15M22,11C22,5.48 17.52,1 12,1C6.48,1 2,5.48 2,11C2,13.8 3.2,16.3 5,18.1V22H19V18.1C20.8,16.3 22,13.8 22,11M17,20H15V18H13V20H11V18H9V20H7V17.2C5.2,15.7 4,13.5 4,11C4,6.58 7.58,3 12,3C16.42,3 20,6.58 20,11C20,13.5 18.8,15.8 17,17.2V20Z" />
  </svg>
)
