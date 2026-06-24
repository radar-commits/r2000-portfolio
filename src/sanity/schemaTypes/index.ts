import { type SchemaTypeDefinition } from 'sanity'
import { navigation, navigationItem } from './navigation'
import { footer, footerLinkItem, footerSocialLink } from './footer'
import { caseStudy } from './caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigation, navigationItem, footer, footerLinkItem, footerSocialLink, caseStudy],
}
