import { configure, getStorybook, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import createPercyAddon from '@percy-io/percy-storybook'

const { percyAddon, serializeStories } = createPercyAddon()
setAddon(percyAddon)

const req = require.context('../stories', true, /.js$/)
function loadStories() { // eslint-disable-line
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)

serializeStories(getStorybook)
setOptions({
  goFullScreen: true,
})
