
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Кейс',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
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
      name: 'category',
      title: 'Категория',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Краткое описание',
      type: 'text',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Полное описание',
      type: 'text',
    }),
    defineField({
      name: 'challenge',
      title: 'Вызов',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Решение',
      type: 'text',
    }),
    defineField({
      name: 'results',
      title: 'Результаты',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Метрики',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Значение' },
            { name: 'label', type: 'string', title: 'Описание' },
            { name: 'color', type: 'string', title: 'Цвет' },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Главное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Галерея изображений',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'timeline',
      title: 'Временные рамки',
      type: 'string',
    }),
    defineField({
      name: 'completion',
      title: 'Дата завершения',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Рекомендуемый',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'client',
      title: 'Клиент',
      type: 'string',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Участники команды',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'teamMember' } }],
    }),
  ],
})
