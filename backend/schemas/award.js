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
      title: "Recipients",
      name: "recipients",
      type: "array",
      validation: (Rule) => Rule.required(),
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
      title: "Award Images",
      name: "awardImages",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Describe the image for accessibility",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
              description: "Optional caption for the image",
            },
          ],
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Award images are required"),
        Rule.max(10).error("Maximum 10 images allowed"),
      ],
    },
    {
      title: "Award Content",
      name: "awardContent",
      type: "array",
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
  ],
};
