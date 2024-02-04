import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {scheduledPublishing} from '@sanity/scheduled-publishing'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import Logo from './components/logo'
import {BookIcon} from '@sanity/icons'
import {UserIcon} from '@sanity/icons'
import {DocumentTextIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'rominafabi.it',
  icon: Logo,
  projectId: 'huvthnv7',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'blog',
      title: 'Blog',
      icon: BookIcon,
      structure: (S) =>
        S.list()
          .title('Contenuto del Blog')
          .items([
            // Qui puoi definire come i vari tipi di documenti dovrebbero essere organizzati e presentati
            S.listItem()
              .title('Articoli')
              .schemaType('articoli')
              .icon(DocumentTextIcon)
              .child(S.documentTypeList('articoli').title('Crea Nuovo Post')),
            S.listItem()
              .title('Autori')
              .icon(UserIcon)
              .schemaType('author')
              .child(S.documentTypeList('author').title('Crea Nuovo Autore')),
            S.listItem()
              .title('Categorie')
              .schemaType('category')
              .child(S.documentTypeList('category').title('Crea Nuova Categoria')),
            // Aggiungi altre personalizzazioni qui
          ]),
    }),
    scheduledPublishing({
      // E.g. 12/25/2000 6:30 AM
      inputDateTimeFormat: 'dd/MMMM/yyyy h:mm a',
    }),
    visionTool({
      name: 'sviluppo',
      title: 'Tool di Sviluppo',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
