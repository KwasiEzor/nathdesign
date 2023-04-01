import { defineField,defineType } from "sanity"

 export default defineField({
    name:"service",
    title:"Service",
    type:"document",
    fields:[
        defineField({
        name:"type",
        title:"Type",
        type:"string"
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
],
preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
 })