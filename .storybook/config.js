import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  goFullScreen: true,
})

const req = require.context('../stories', true, /.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
