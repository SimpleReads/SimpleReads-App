# Use an official Node runtime as base image
FROM node:18

# Set working directory
WORKDIR /usr/src/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Next.js and dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
