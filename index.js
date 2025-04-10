// bring in express so we can use it to build our web server
const express = require("express");

// create an express app
const app = express();

// bring in our mock user and post data from the data folder
const users = require("./data/users");
const posts = require("./data/posts");

// middleware that tells express to automatically parse any incoming json data
// this is helpful for post and patch requests so we can read the request body
app.use(express.json());

// setting default route for main route page url to not get error 
// send a styled homepage with links
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>EramAPI</title>
        <style>
          body {
            font-family: sans-serif;
            text-align: center;
            background-color: #f7f7f7;
            padding: 2rem;
          }
          nav {
            background: #333;
            padding: 1rem;
          }
          nav a {
            color: white;
            margin: 0 1rem;
            text-decoration: none;
          }
          h1 {
            margin-top: 2rem;
          }
        </style>
      </head>
      <body>
        <nav>
          <a href="/">home</a>
          <a href="/api/users">users</a>
          <a href="/api/posts">posts</a>
        </nav>
        <h1>welcome to eramapi</h1>
        <p>an api that teaches you how to build an api</p>
      </body>
    </html>
  `);
});

// get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// get one user by id
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.json(user);
});

// get all posts or filter by userId if given (query param)
app.get("/api/posts", (req, res) => {
  const userId = req.query.userId; // check if userId is in the query string like ?userId=1

  if (userId) {
    const filteredPosts = posts.filter(post => post.userId === parseInt(userId));

    if (filteredPosts.length === 0) {
      return res.status(404).json({ error: "no posts found for this user" });
    }

    return res.json(filteredPosts);
  }

  res.json(posts); // if no query, just return all posts
});

// get one post by id
app.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "post not found" });
  }

  res.json(post);
});

// create a new post (aka add a new lesson)
app.post("/api/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// update an existing post by id
app.patch("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "post not found" });
  }

  if (req.body.title) post.title = req.body.title;
  if (req.body.body) post.body = req.body.body;

  res.json(post);
});

// delete a post by id
app.delete("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "post not found" });
  }

  posts.splice(postIndex, 1);
  res.json({ message: "post deleted" });
});

// get all posts for a specific user (route param)
app.get("/api/users/:id/posts", (req, res) => {
  const userId = parseInt(req.params.id);
  const userPosts = posts.filter(post => post.userId === userId);

  if (userPosts.length === 0) {
    return res.status(404).json({ error: "no posts found for this user" });
  }

  res.json(userPosts);
});

// start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
