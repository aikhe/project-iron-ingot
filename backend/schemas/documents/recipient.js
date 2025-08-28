export default {
  type: "document",
  name: "recipient",
  title: "Recipient",
  fields: [
    {
      type: "object",
      name: "fullName",
      title: "Recipient Full Name",
      options: {
        collapsed: true,
      },
      fields: [
        {
          type: "string",
          name: "firstName",
          title: "First name",
          validation: (Rule) => Rule.required(),
        },
        {
          type: "string",
          name: "middleInitial",
          title: "Middle initial",
          validation: (Rule) => [
            Rule.max(1).error("A middle initial of min. 1 character or none"),
          ],
        },
        {
          type: "string",
          name: "lastName",
          title: "Last name",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      type: "string",
      name: "pronouns",
      title: "Pronouns",
    },
    {
      type: "string",
      name: "batchYear",
      title: "Batch Year",
    },
    {
      type: "string",
      name: "yearLevel",
      title: "Year Level",
    },
    {
      type: "string",
      name: "program",
      title: "Program",
    },
    {
      type: "image",
      name: "recipientPhoto",
      title: "Recipient Photo",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => `${doc.fullName.lastName}-${doc.fullName.firstName}`,
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: {
      title: "fullName.lastName",
      subtitle: "recipient",
    },
  },
};
