import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";

const itinerary = {
  name: "clientItinerarys",
  title: "Client Itinerarys",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tripTo",
      title: "Trip To",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "Date",
      title: "Date",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "adults",
      title: "Adults",
      type: "number",
    },
    {
      name: "children",
      title: "Children",
      type: "number",
    },
    {
      name: "infant",
      title: "Infant",
      type: "number",
    },
    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
      options: { hotspot: true, sources: [unsplashAssetSource] },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "Days",
      title: "Days",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "nights",
      title: "Nights",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "activities",
      title: "No of Activities",
      type: "number",
    },
    {
      name: "hotels",
      title: "No of Hotels",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "priceActual",
      title: "Price Actual",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "coverImages",
      title: "Cover Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          sources: [unsplashAssetSource],
        },
      ],
      options: {
        layout: "grid",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "placeImages",
      title: "Place Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          sources: [unsplashAssetSource],
        },
      ],
      options: {
        layout: "grid",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "inclusion",
      title: "Inclusion",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "itinerary",
      title: "Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "day",
              title: "Day",
              type: "number",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "activaties",
              title: "Activaties",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "duration",
                      title: "Duration",
                      type: "string",
                    },
                    {
                      name: "ticketIncluded",
                      title: "Ticket Included?",
                      type: "boolean",
                      initialValue: false,
                      description:
                        "If the ticket is included in the price, then check this box",
                    },
                    {
                      name: "images",
                      title: "Images",
                      type: "array",
                      of: [
                        {
                          type: "image",
                          options: { hotspot: true },
                          sources: [unsplashAssetSource],
                        },
                      ],
                      options: {
                        layout: "grid",
                      },
                    },
                    {
                      name: "description",
                      title: "Description",
                      type: "array",
                      of: [{ type: "block" }],
                    },
                    {
                      name: "experiences",
                      title: "Experiences",
                      type: "object",
                      fields: [
                        {
                          name: "title",
                          title: "Title",
                          type: "string",
                        },
                        {
                          name: "images",
                          title: "Images",
                          type: "array",
                          of: [
                            {
                              type: "object",
                              fields: [
                                {
                                  name: "image",
                                  title: "Image",
                                  type: "image",
                                  options: { hotspot: true },
                                  sources: [unsplashAssetSource],
                                },
                                {
                                  name: "caption",
                                  title: "Caption",
                                  type: "string",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "exclusion",
      title: "Exclusion",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "fareBreakup",
      title: "Fare Breakup",
      type: "object",
      fields: [
        {
          name: "perAdult",
          title: "Per Adult",
          type: "number",
        },
        {
          name: "perChild",
          title: "Per Child",
          type: "number",
        },
        {
          name: "perInfant",
          title: "Per Infant",
          type: "number",
        },
        {
          name: "tax",
          title: "Tax",
          type: "number",
        },
      ],
    },
  ],
};

export default itinerary;
