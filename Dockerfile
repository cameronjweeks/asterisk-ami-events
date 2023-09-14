FROM node:18.15.0-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# If you have global dependencies or tools, install them here
# e.g., RUN npm install -g typescript

# Copy the entire project into the container
COPY . .

# Compile the TypeScript code
RUN npx tsc

# The command to run the compiled app
CMD [ "npm", "run", "dev" ]