import React from 'react'

const DEFAULT_SIZE = 24

export const MessageReplyTextIcon = ({
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
    <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4C22,2.9 21.1,2 20,2H4C2.9,2 2,2.9 2,4V16C2,17.1 2.9,18 4,18H18L22,22V4Z" />
  </svg>
)
