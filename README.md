# SimpleReads

SimpleReads aims to develop a Large Learning Model (LLM) with an intuitive interface designed to make complex research papers more accessible for individuals with various communication impairments, including aphasia. Leveraging advanced NLP techniques and inclusive design, the system allows users to upload documents in PDF or DOCX formats and receive translations into more easily digestible language and visuals, based on current research on communication impairments.

## Cloning Remote Branches

- ```git fetch origin```
- ```git checkout -b new-branch origin/new-branch``` e.g. git checkout -b staging origin/staging

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
- ```npm run dev``` to run the app

