/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { pageStructure, singletonPlugin } from './sanity/plugins/settings'
import settings from './sanity/schemas/singletons/settings'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Singleton Photography',
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: pageStructure([settings]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    singletonPlugin([settings.name]),
    cloudinarySchemaPlugin(),
  ],
})
