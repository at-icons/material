const fs = require('fs-extra')
const process = require('process')
const changeCase = require('change-case')

const EXIT = 1
const iconsFrom = './node_modules/mdi-svg/svg/'
const iconsTo = './icons/'

const createFileString = (name, paths) =>
  `import React from 'react'

const DEFAULT_SIZE = 24

export const ${ name } = ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ \`0 0 \${ DEFAULT_SIZE } \${ DEFAULT_SIZE }\` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    ${ paths }
  </svg>
)
`

const createIndexString = (name, index) =>
  `${ index }
export * from './${ name }'
`

fs.readdir(iconsFrom)
  .then(fs.writeFileSync(`${ iconsTo }/index.js`, ''))
  .then((files) => {
    for (const filename of files) {
      fs.readFile(iconsFrom + filename, 'utf-8')
        .then((content) => {
          // eslint-disable-next-line no-unused-vars
          const [match, paths] = content.match(/<svg .+?>(.+?)<\/svg>/)
          const name = `${ changeCase.pascalCase(filename.replace('.svg', '')) }Icon`

          fs.writeFile(`${ iconsTo }${ name }.js`, createFileString(name, paths))
            .then(() => {
              fs.readFile(`${ iconsTo }/index.js`, 'utf-8')
                .then((index) => {
                  fs.writeFileSync(`${ iconsTo }/index.js`, createIndexString(name, index))
                })
            })
        })
    }
  })
  .catch((err) => {
    console.log(err)
    process.exit(EXIT)
  })
