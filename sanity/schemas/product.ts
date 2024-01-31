export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of product'
    },
    {
        name: 'images',
        type: 'array',
        title: 'Product Image',
        of: [{type: 'image'}]
    },
    {
        name: 'description',
        type: 'text',
        title: 'Discription of Product'
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Product slug',
        options: {
            source : 'name'
        }
    },
    {
        name: 'price',
        type: 'number',
        title: 'Price'

    },
    {
        name: 'category',
        type: 'reference',
        title: 'Product category',
        to:[
            {
                type: 'category'
            }
        ]
    }
  ]
}