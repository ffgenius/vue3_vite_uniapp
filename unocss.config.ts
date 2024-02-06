import { defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUni(),
    presetIcons()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
