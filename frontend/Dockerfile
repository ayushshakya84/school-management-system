# Stage 1: Build the React application
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json AND package-lock.json (if available)
COPY package*.json ./

# Use npm install. It's safer and will use package-lock.json if it exists,
# or create one if it doesn't.
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]