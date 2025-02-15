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
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
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
            name: "subtitle",
            title: "Subtitle",
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

    ],
};

export default itinerary;