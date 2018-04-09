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
    <path d="M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5C15.88,10 17,8.88 17,7.5C17,6.12 15.88,5 14.5,5Z" />
  </svg>
)
