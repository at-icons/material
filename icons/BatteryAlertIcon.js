import React from 'react'

const DEFAULT_SIZE = 24

export const BatteryAlertIcon = ({
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
    <path d="M13,14H11V9H13M13,18H11V16H13M16.67,4H15V2H9V4H7.33C6.6,4 6,4.6 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z" />
  </svg>
)
