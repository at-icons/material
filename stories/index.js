import React from 'react'
import { storiesOf } from '@storybook/react'

import * as icons from '../icons'

storiesOf('Icons', module)
  .add('default', () => (
    <div style={{ fontFamily: 'helvetica, sans-serif' }}>
      <h1>@icons/material</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { Object.entries({ ...icons }).map(([name, Icon]) => (
          <div
            key={ name }
            style={{
              border: '1px solid #ddd',
              width: 60,
              height: 60,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 4,
            }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon />
            </div>
            <div
              style={{
                fontSize: 10,
                maxWidth: '100%',
                overflow: 'hidden',
              }}
            >{ name }
            </div>
          </div>
        )) }
      </div>
    </div>
  ))
