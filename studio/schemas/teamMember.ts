
import { defineType, defineField } from 'sanity'

export const teamMember = defineType({
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
      title: 'URL слаг',
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
      name: 'image',
      title: 'Фотография',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Цитата',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bio',
      title: 'Биография',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'approach',
      title: 'Подход к работе',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'expertise',
      title: 'Экспертиза',
      type: 'array',
      of: [{ type: 'string' }],
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
      name: 'contact',
      title: 'Контакты',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Телефон',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'certificates',
      title: 'Сертификаты',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название сертификата',
              type: 'string',
            },
            {
              name: 'issuer',
              title: 'Выдавший орган',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Год получения',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Изображение сертификата',
              type: 'image',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'keyProjects',
      title: 'Ключевые проекты',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Название проекта',
              type: 'string',
            },
            {
              name: 'role',
              title: 'Роль в проекте',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'text',
            },
            {
              name: 'link',
              title: 'Ссылка',
              type: 'string',
            },
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
            {
              name: 'title',
              title: 'Название статьи',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Ссылка',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
