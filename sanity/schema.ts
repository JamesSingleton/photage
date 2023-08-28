import { type SchemaTypeDefinition } from 'sanity'
import settings from './schemas/singletons/settings'
import event from './schemas/documents/event'
import category from './schemas/documents/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // singletons
    settings,
    // documents
    event,
    category,
  ],
}
