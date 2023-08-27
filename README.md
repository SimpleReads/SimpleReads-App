# SimpleReads

SimpleReads aims to develop a Large Learning Model (LLM) with an intuitive interface designed to make complex research papers more accessible for individuals with various communication impairments, including aphasia. Leveraging advanced NLP techniques and inclusive design, the system allows users to upload documents in PDF or DOCX formats and receive translations into more easily digestible language and visuals, based on current research on communication impairments.

## Cloning Remote Branches

- ```git fetch origin```
- ```git checkout -b new-branch origin/new-branch``` e.g. git checkout -b staging origin/staging

## Running the App

### Directory: labeler

Directory containing the code for the Human Labeling Tool.

While inside the labeler directory:

- ```pip install -r requirements.txt``` to install dependencies

### Directory: model

Directory containing the code for the LLM model.

While inside the model directory:

- ```pip install -r requirements.txt``` to install dependencies

### Directory: app

Directory containing the code for the web app.

While inside the app directory:

- ```npm install``` to install dependencies
- ```make dev``` to run the app

## API Endpoints

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

## Debugging

### Windows

If you get an error saying that the port is already in use, you can kill the process using the following commands:

- ```netstat -ano | findstr :3000``` to find the PID of the process running on port 3000
- ```taskkill /PID <PID> /F``` to kill the process e.g. ```taskkill /PID 9140 /F```