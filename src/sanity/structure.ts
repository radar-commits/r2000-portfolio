import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Main Menu')
        .child(S.documentTypeList('navigation').title('Main Menu')),
      S.listItem()
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('site-footer')
            .title('Footer'),
        ),
      S.divider(),
      S.listItem()
        .title('Case Studies')
        .child(S.documentTypeList('caseStudy').title('Case Studies')),
    ])
