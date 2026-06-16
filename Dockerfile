# Stage 1: Build the Vite React Application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package configuration
COPY package.json package-lock.json* ./

# Install dependencies (using clean install for reproducibility)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for Dokploy to route traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
