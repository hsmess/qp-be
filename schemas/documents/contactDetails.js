export default {
  name: 'contactDetails',
  type: 'document',
  title: 'Contact details',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      title: 'Phone Number',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Email Address',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Address Line 1',
      name: 'address',
      type: 'string'
    },
    {
      title: 'Address Line 2',
      name: 'street',
      type: 'string'
    },
    {
      title: 'Address City',
      name: 'city',
      type: 'string'
    },
    {
      title: 'Postcode',
      name: 'postcode',
      type: 'string'
    },
    {
      title: 'Social media',
      name: 'social',
      type: 'social'
    }
  ]
};
