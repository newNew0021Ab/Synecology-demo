
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Член команды',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Должность',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Цитата',
      type: 'text',
    }),
    defineField({
      name: 'bio',
      title: 'Биография',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Фотография',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'expertise',
      title: 'Компетенции',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'approach',
      title: 'Подход к работе',
      type: 'text',
    }),
    defineField({
      name: 'keyProjects',
      title: 'Ключевые проекты',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Название' },
            { name: 'role', type: 'string', title: 'Роль' },
            { name: 'description', type: 'text', title: 'Описание' },
            { name: 'link', type: 'string', title: 'Ссылка' },
          ],
        },
      ],
    }),
    defineField({
      name: 'articles',
      title: 'Статьи',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Заголовок' },
            { name: 'link', type: 'string', title: 'Ссылка' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Контакты',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Телефон' },
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Опыт работы',
      type: 'string',
    }),
    defineField({
      name: 'education',
      title: 'Образование',
      type: 'string',
    }),
    defineField({
      name: 'certificates',
      title: 'Сертификаты',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Название' },
            { name: 'issuer', type: 'string', title: 'Выдавший орган' },
            { name: 'year', type: 'string', title: 'Год' },
            { name: 'image', type: 'image', title: 'Изображение' },
          ],
        },
      ],
    }),
  ],
})
