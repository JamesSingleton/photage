import { type SchemaTypeDefinition } from 'sanity'
import settings from './schemas/singletons/settings'
import event from './schemas/documents/event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // singletons
    settings,
    // documents
    event,
  ],
}
