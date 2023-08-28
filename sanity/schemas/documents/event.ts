import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'event',
  title: 'Event',
  icon: DocumentIcon,
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
    defineField({
      type: 'datetime',
      name: 'date',
      title: 'Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [{ type: 'cloudinary.asset' }],
    }),
  ],
})
