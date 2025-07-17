
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Услуга',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Особенности',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pricing',
      title: 'Цена',
      type: 'object',
      fields: [
        { name: 'from', type: 'number', title: 'От' },
        { name: 'to', type: 'number', title: 'До' },
        { name: 'currency', type: 'string', title: 'Валюта', initialValue: 'BYN' },
      ],
    }),
    defineField({
      name: 'timeline',
      title: 'Сроки выполнения',
      type: 'string',
    }),
    defineField({
      name: 'process',
      title: 'Процесс работы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string', title: 'Шаг' },
            { name: 'description', type: 'text', title: 'Описание' },
          ],
        },
      ],
    }),
    defineField({
      name: 'requirements',
      title: 'Требования',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'deliverables',
      title: 'Результаты',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
