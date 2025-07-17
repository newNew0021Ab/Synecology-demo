
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'

// Схемы
import { teamMember } from './schemas/teamMember'
import { caseStudy } from './schemas/caseStudy'
import { blogPost } from './schemas/blogPost'
import { service } from './schemas/service'

export default defineConfig({
  name: 'default',
  title: 'Synecology Content Studio',

  projectId: 'sg6ov4g1',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Команда')
              .child(
                S.documentTypeList('teamMember')
                  .title('Члены команды')
              ),
            S.listItem()
              .title('Кейсы')
              .child(
                S.documentTypeList('caseStudy')
                  .title('Кейсы компании')
              ),
            S.listItem()
              .title('Блог')
              .child(
                S.documentTypeList('blogPost')
                  .title('Статьи блога')
              ),
            S.listItem()
              .title('Услуги')
              .child(
                S.documentTypeList('service')
                  .title('Услуги компании')
              ),
          ])
    }),
    visionTool(),
    colorInput()
  ],

  schema: {
    types: [teamMember, caseStudy, blogPost, service],
  },
})
