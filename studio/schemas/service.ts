
import { defineType, defineField } from 'sanity'

export const service = defineType({
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
      title: 'URL слаг',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Обычный', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Маркированный', value: 'bullet' },
            { title: 'Нумерованный', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Жирный', value: 'strong' },
              { title: 'Курсив', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Особенности/Что включено',
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
      name: 'icon',
      title: 'Иконка (название Lucide иконки)',
      type: 'string',
      description: 'Например: Factory, Recycle, FileText, etc.',
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'object',
      fields: [
        {
          name: 'amount',
          title: 'Сумма',
          type: 'number',
        },
        {
          name: 'currency',
          title: 'Валюта',
          type: 'string',
          options: {
            list: [
              { title: 'BYN', value: 'BYN' },
              { title: 'USD', value: 'USD' },
              { title: 'EUR', value: 'EUR' },
            ],
          },
        },
        {
          name: 'period',
          title: 'Период',
          type: 'string',
          options: {
            list: [
              { title: 'Разово', value: 'once' },
              { title: 'В месяц', value: 'monthly' },
              { title: 'В год', value: 'yearly' },
            ],
          },
        },
        {
          name: 'isVariable',
          title: 'Индивидуальная цена',
          type: 'boolean',
          initialValue: false,
        },
      ],
    }),
    defineField({
      name: 'timeline',
      title: 'Сроки выполнения',
      type: 'string',
    }),
    defineField({
      name: 'deliverables',
      title: 'Результаты/Что получает клиент',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'process',
      title: 'Процесс работы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'step',
              title: 'Шаг',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedCases',
      title: 'Связанные кейсы',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
