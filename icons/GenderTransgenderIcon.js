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
    <path d="M19.58,3H15V1H23V9H21V4.41L16.17,9.24C16.69,10.03 17,11 17,12C17,14.42 15.28,16.44 13,16.9V19H15V21H13V23H11V21H9V19H11V16.9C8.72,16.44 7,14.42 7,12C7,11 7.3,10.04 7.82,9.26L6.64,8.07L5.24,9.46L3.83,8.04L5.23,6.65L3,4.42V8H1V1H8V3H4.41L6.64,5.24L8.08,3.81L9.5,5.23L8.06,6.66L9.23,7.84C10,7.31 11,7 12,7C13,7 13.96,7.3 14.75,7.83L19.58,3M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z" />
  </svg>
)
