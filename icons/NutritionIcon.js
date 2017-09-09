import React from 'react'

const DEFAULT_SIZE = 24

export const NutritionIcon = ({
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
    <path d="M22,18C22,20.21 20.21,22 18,22H14C11.79,22 10,20.21 10,18V16H22V18M4,3H14C15.1,3 16,3.9 16,5V14H8V19H4C2.9,19 2,18.1 2,17V5C2,3.9 2.9,3 4,3M4,6V8H6V6H4M14,8V6H8V8H14M4,10V12H6V10H4M8,10V12H14V10H8M4,14V16H6V14H4Z" />
  </svg>
)
