import CtaLink from "../../plugins/components/CtaLink";
export default {
  name: 'qpLink',
  type: 'object',
  title: 'Link',
  fields: [ {
    title: 'CTA Link',
    name: 'ctaLink',
    type: 'string',
    inputComponent: CtaLink
  },
  {
  title: 'Link text',
      name: 'linkText',
    type: 'string'
  }],
  description: 'Please paste the full URL in. Internal links will be automatically shortened'
}

