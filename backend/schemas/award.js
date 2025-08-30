export default {
  type: "document",
  name: "award",
  title: "Award",
  fields: [
    {
      title: "Award Header Image",
      name: "headerImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.custom((image) => {
          return true;
        }),
    },
    {
      title: "Award Title",
      name: "awardTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "awardTitle",
        maxLength: 100,
      },
    },
    {
      title: "Award Category",
      name: "awardCategory",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Academic Excellence", value: "Academic Excellence" },
          { title: "Relapsing", value: "Relapse" },
        ],
      },
    },
    {
      title: "Award Description",
      name: "awardDescription",
      type: "text",
      validation: (Rule) =>
        Rule.max(500).error("Description must be 500 characters or less"),
    },
    {
      title: "Recipients",
      name: "recipients",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "recipient",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Award Content",
      name: "awardContent",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
