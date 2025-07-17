
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { schemaTypes } from '../sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Synecology CMS',

  projectId: 'ysoxzj37',
  dataset: 'production',
  
  // Настройки для Replit
  basePath: '/studio',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Команда')
              .child(S.documentTypeList('teamMember').title('Члены команды')),
            S.listItem()
              .title('Услуги')
              .child(S.documentTypeList('service').title('Услуги')),
            S.listItem()
              .title('Кейсы')
              .child(S.documentTypeList('caseStudy').title('Кейсы')),
            S.listItem()
              .title('Блог')
              .child(S.documentTypeList('blogPost').title('Статьи')),
          ]),
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
