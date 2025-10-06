FROM node:20-alpine
WORKDIR /app

# Install project dependencies
COPY ../package*.json .
RUN npm install 

COPY . .

# Build production ready project
RUN npm run build

# Serve application
EXPOSE 3000
RUN npm install serve -g
CMD ["serve", "-s", "dist"]
