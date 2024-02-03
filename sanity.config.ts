import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import Logo from './components/logo'

export default defineConfig({
  name: 'default',
  title: 'rominafabi.it',
  icon: Logo,
  projectId: 'huvthnv7',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
