import { type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/desk'

export const singletonPlugin = (types: string[]) => ({
  name: 'singletonPlugin',
  document: {
    newDocumentOptions: (prev: any[], { creationContext }: any) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => !types.includes(templateItem.templateId))
      }
      return prev
    },
    actions: (prev: any[], { schemaType }: any) => {
      if (types.includes(schemaType)) {
        return prev.filter(({ action }) => action !== 'duplicate')
      }
      return prev
    },
  },
})

export const pageStructure = (typeDefArray: DocumentDefinition[]): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name))
    })

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    )

    return S.list()
      .title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems])
  }
}
