export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b650fb4a73d2d9dda8c6b9",
                  title: "Sanity Studio",
                  name: "sanity-restaurant-studio",
                  apiId: "f3d68226-a4db-4668-811b-f224e4b4dd1f",
                },
                {
                  buildHookId: "60b650fb2e9d147d678ef1c4",
                  title: "Blog Website",
                  name: "sanity-restaurant",
                  apiId: "375d9fe8-e072-4031-99d4-4d6b303461ce",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/josiaheakle/sanity-restaurant",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-restaurant.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
