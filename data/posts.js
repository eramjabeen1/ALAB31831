const posts = [
    {
      id: 1,
      userId: 1,
      title: "What is a RESTful API?",
      body: "A RESTful API uses HTTP methods to interact with resources like users, posts, or comments. The common methods are GET, POST, PATCH, and DELETE."
    },
    {
      id: 2,
      userId: 2,
      title: "How to use Express.js",
      body: "Install express, create an app, and define routes using app.get(), app.post(), etc. Then use app.listen() to start your server."
    },
    {
      id: 3,
      userId: 3,
      title: "What is req.params vs req.query?",
      body: "req.params grabs data from the URL path, like /users/:id. req.query grabs data from the URL query, like ?userId=1."
    }
  ];
  
  module.exports = posts;
  