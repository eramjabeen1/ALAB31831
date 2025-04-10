# ALAB 318.3.1 Expanding a RESTful API

---
## Disclaimer

No real servers were harmed in the making of this API.

**EramAPI**(because why not) is a RESTful API built with Express.js. This project demonstrates key backend development concepts including route handling, CRUD operations, query and route parameters, and structured API responses using mock data.

## Features

- Built with Node.js and Express
- Teaches core RESTful API design principles
- Uses modular mock data (no database required)
- Beginner-friendly code and structure
- Styled HTML homepage with a functional navigation bar

## API Endpoints

### Users

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/api/users` | Returns all users |
| GET    | `/api/users/:id` | Returns a specific user by ID |
| GET    | `/api/users/:id/posts` | Returns all posts for a specific user |

### Posts

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/api/posts` | Returns all posts or filters by query param `userId` |
| GET    | `/api/posts/:id` | Returns a specific post by ID |
| POST   | `/api/posts` | Creates a new post |
| PATCH  | `/api/posts/:id` | Updates a post's title or body |
| DELETE | `/api/posts/:id` | Deletes a specific post |

### Home

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/` | Returns a styled HTML welcome page with links to routes |

## Sample Data

### data/users.js

```js
[
  { id: 1, username: "beginner_101", level: "Beginner" },
  { id: 2, username: "codeQueenZ", level: "Intermediate" }
]

[
  {
    id: 1,
    userId: 1,
    title: "What is a RESTful API?",
    body: "A RESTful API uses HTTP methods like GET, POST, PATCH, DELETE to interact with resources."
  }
]

Installation and Running Locally
Clone the repository

Navigate into the project folder

Run:

bash
Copy
Edit
npm install
npx nodemon index.js

Visit http://localhost:3000 in your browser to view the homepage

Test endpoints via browser, Postman, or Thunder Client

## Future Features

These ideas are on the roadmap 

- Add a `/comments` route to let users "comment" on each post
- Create a frontend UI so it doesnt just look like an API — it *feels* like one 
- Add MongoDB or another database (because one day, mock data won’t cut it)
- Include user authentication — because not every route should be for everyone

_Some of these might get done. Some might stay dreams. But that’s the dev life._

Author

Developed by Eram as part of a full stack web development bootcamp.
This API project was created to demonstrate backend fundamentals in a hands on, beginner accessible way.