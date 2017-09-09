import React from 'react'

const DEFAULT_SIZE = 24

export const MicrophoneSettingsIcon = ({
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
    <path d="M19,10H17.3C17.3,13 14.76,15.1 12,15.1C9.24,15.1 6.7,13 6.7,10H5C5,13.41 7.72,16.23 11,16.72V20H13V16.72C16.28,16.23 19,13.41 19,10M15,24H17V22H15M11,24H13V22H11M12,13C13.66,13 15,11.66 15,10V4C15,2.34 13.66,1 12,1C10.34,1 9,2.34 9,4V10C9,11.66 10.34,13 12,13M7,24H9V22H7V24Z" />
  </svg>
)
