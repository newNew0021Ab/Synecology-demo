
import { defineType, defineField } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Кейс',
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
      title: 'URL слаг',
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
      options: {
        list: [
          { title: 'Пищевая промышленность', value: 'food-industry' },
          { title: 'Производство', value: 'manufacturing' },
          { title: 'Строительство', value: 'construction' },
          { title: 'Логистика', value: 'logistics' },
          { title: 'IT', value: 'it' },
          { title: 'Другое', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: 'Полное описание',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'image',
      title: 'Основное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея изображений',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Результаты',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challenge',
      title: 'Вызов/Задача',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'solution',
      title: 'Решение',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'outcome',
      title: 'Итог',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'timeline',
      title: 'Сроки выполнения',
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
      name: 'clientTestimonial',
      title: 'Отзыв клиента',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Цитата',
          type: 'text',
        },
        {
          name: 'author',
          title: 'Автор',
          type: 'string',
        },
        {
          name: 'position',
          title: 'Должность',
          type: 'string',
        },
        {
          name: 'company',
          title: 'Компания',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
