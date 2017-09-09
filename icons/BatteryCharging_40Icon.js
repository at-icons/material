import React from 'react'

const DEFAULT_SIZE = 24

export const BatteryCharging_40Icon = ({
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
    <path d="M23,11H20V4L15,14H18V22M12,13H4V6H12M12.67,4H11V2H5V4H3.33C2.6,4 2,4.6 2,5.33V20.67C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.67V5.33C14,4.6 13.4,4 12.67,4Z" />
  </svg>
)
