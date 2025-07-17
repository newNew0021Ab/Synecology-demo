
import { defineField, defineType } from 'sanity'

export default defineType({
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
      title: 'Слаг',
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
    }),
    defineField({
      name: 'content',
      title: 'Содержание',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
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
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
    }),
    defineField({
      name: 'readTime',
      title: 'Время чтения',
      type: 'string',
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
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Рекомендуемая',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'reference',
      to: { type: 'teamMember' },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Мета заголовок' },
        { name: 'metaDescription', type: 'text', title: 'Мета описание' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Ключевые слова' },
      ],
    }),
  ],
})
