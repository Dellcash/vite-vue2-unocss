const { createVuePlugin } = require('vite-plugin-vue2');
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

module.exports = {
  plugins: [createVuePlugin(), Unocss({
    presets: [
      presetAttributify({}),
      presetUno(),
    ],
  })],
};