# SimpleReads

SimpleReads aims to develop a Large Learning Model (LLM) with an intuitive interface designed to make complex research papers more accessible for individuals with various communication impairments, including aphasia. Leveraging advanced NLP techniques and inclusive design, the system allows users to upload documents in PDF or DOCX formats and receive translations into more easily digestible language and visuals, based on current research on communication impairments.

Core Features:
- Simplifies Complex Text
- Provides Dictionary Definitions 

## Usage
Examples of expected outcomes 


## Installation
This is a [npm.js](https://npmjs.com/) bootstrapped project.

### ~ Cloning Remote Branches -THIS IS FOR US. SHOULD BE REMOVED LATER

To get the latest version of the project, run the following commands:
```bash
git fetch origin

git checkout -b new-branch origin/new-branch 
#e.g. git checkout -b staging origin/staging
```
### ~ Getting Started
While inside the SimpleReads-App directory:
```bash 
npm install #to install dependencies
make dev #to run the website
``` 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Editing the following directories will auto update the website:
+ app        - layout and stuff of the website
+ components - constituent elements of the website
+ db         - datebase
+ flask_app  - 

RILEY - I DONT KNOW IF THE FOLLOWING IS NEEDED 

{{{ THIS STUFF

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

}}}

### ~ API Endpoints

### Flask

Our application uses Flask as the web framework, and we provide API endpoints for fetching and manipulating research papers. Endpoint routes are accessible on localhost:3001.

### MongoDB

Our application uses MongoDB as the database backend, and we provide API endpoints for fetching and manipulating research papers.

#### Fetch a Specific Research Paper

- **Endpoint**: GET /api/papers/GET/:id
- **Description**: Fetches a specific research paper from the database using its unique identifier.
- **Parameters**:
  - id: The unique identifier of the research paper.
- **Example Usage in Postman**:
  ```http://localhost:3000/api/papers/GET/{paper_id}```
- **Response**:
  - 200 OK: Returns the paper object if found.
  - 404 NOT FOUND: If the paper with the specified ID does not exist.
  - 500 INTERNAL SERVER ERROR: If there's a server error.

#### Fetch All Research Papers

- **Endpoint**: GET /api/papers/GET/
- **Description**: Fetches all the research papers stored in the database.
- **Example Usage in Postman**:
  ```http://localhost:3000/api/papers/GET/```
- **Response**:
  - 200 OK: Returns an array of all paper objects.
  - 500 INTERNAL SERVER ERROR: If there's a server error.

#### Common Response Format

All API responses follow a common format:

```json
{
  "data": "Response data here",
  "status": 200,
  "ok": true
}
```

- data: Contains the requested data or a relevant error message.
- status: HTTP status code.
- ok: Boolean indicating whether the operation was successful (true) or not (false).

## Support
### ~ Debugging

### Windows

If you get an error saying that the port is already in use, you can kill the process using the following commands:

- ```netstat -ano | findstr :3000``` to find the PID of the process running on port 3000
- ```taskkill /PID <PID> /F``` to kill the process e.g. ```taskkill /PID 9140 /F```
Where to ge hel

## Terms and License

+ Released under the [GPL](https://www.gnu.org/licenses/gpl-3.0.html). OKAY we should look at this if we want to make this project legit
+ Copyright 2023 [Cruip](https://cruip.com/).

## Credits

+ QUT All-Stars
+ Dr Peter Worthy?
+ Juleel?

## About Us
We're a group of university students who want to make a difference in the world. 
