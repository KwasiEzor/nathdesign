import { defineField,defineType } from "sanity"

 export default defineField({
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        defineField({
        name:"title",
        title:"Title",
        type:"string"
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: {type: 'category'},
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