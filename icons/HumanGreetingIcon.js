import React from 'react'

const DEFAULT_SIZE = 24

export const HumanGreetingIcon = ({
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
    <path d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4C11.79,4 10,5.79 10,8C10,10.21 11.79,12 14,12C16.21,12 18,10.21 18,8C18,5.79 16.21,4 14,4Z" />
  </svg>
)
