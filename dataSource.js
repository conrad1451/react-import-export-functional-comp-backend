require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

exports.getDatabase = async function () {
  const response = await notion.databases.query({ database_id: databaseId });

  const responseResults = response.results.map((page) => {
    return {
      id: page.id,
      name: page.properties.Name.title[0]?.plain_text,
      tags: page.properties.Tags.multi_select.map((tag) => tag.name), 
      // CHQ: unsure why the following lines did not work. Will debug later
      // link: page.properties["Link"].url,
      // area: page.properties.Area.select.map((select) => select.name), 
      // area: page.properties.Area.area.map((select) => select.name), 
      // created: page.properties.Created.date, 
      // broski: page.properties.Tags.multi_select.map((tag) => tag.name), // CHQ: confirmed I can name properties however I want like so
      // createdStartDate: page.properties.Created.date.start,
      // createdEndDate: page.properties.Created.date.end,
      
    };
  });

  return responseResults;
};

// exports.newEntryToDatabase = async function (name, role) {
//   const response = await notion.pages.create({
//     parent: {
//       database_id: process.env.NOTION_API_DATABASE,
//     },
//     properties: {
//       Name: {
//         title: [
//           {
//             text: {
//               content: name,
//             },
//           },
//         ],
//       },
//       Role: {
//         rich_text: [
//           {
//             text: {
//               content: role,
//             },
//           },
//         ],
//       },
//     },
//   });

//   return response;
// };