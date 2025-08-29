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
      validation: (Rule) => Rule.required(),
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
      options: {
        source: "awardTitle",
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Award Category",
      name: "awardCategory",
      type: "string",
      options: {
        list: [
          { title: "Academic Excellence", value: "Academic Excellence" },
          { title: "Relapsing", value: "Relapse" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Award Badges",
      name: "awardBadges",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Award Recipients",
      name: "awardRecipients",
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
      title: "Award Images",
      name: "awardImages",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => [
        Rule.required().error("Award images are required"),
        Rule.max(10).error("Maximum 10 images allowed"),
      ],
    },
    {
      title: "Date Awarded",
      name: "dateAwarded",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Award Description",
      name: "awardDescription",
      type: "text",
      validation: (Rule) => Rule.required(),
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
