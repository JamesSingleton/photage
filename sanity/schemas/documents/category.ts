import { defineType, defineField } from 'sanity'

export default defineType({
  type: 'document',
  name: 'category',
  title: 'Category',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      description: 'This is a block of text that will be displayed at the top of the page.',
    }),
  ],
})
