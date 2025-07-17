
import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Статья блога',
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
      title: 'URL слаг',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Содержание',
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
            { title: 'Цитата', value: 'blockquote' },
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
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Сертификация', value: 'certification' },
          { title: 'Отходы', value: 'waste' },
          { title: 'Выбросы', value: 'emissions' },
          { title: 'Законодательство', value: 'legislation' },
          { title: 'Практические советы', value: 'tips' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readTime',
      title: 'Время чтения',
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Изображение для превью',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Рекомендуемая статья',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage',
    },
  },
})
