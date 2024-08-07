# Stage 1: Build
FROM node:20.14.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
RUN apk add --no-cache git
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent

# Build the project
COPY . ./
RUN VITE_BUILD=$(git rev-parse HEAD) npm run build

# Stage 2: Production environment
FROM nginx:latest
WORKDIR /usr/share/nginx/html

# Copy build artifacts from build stage
COPY --from=build /app/dist .

# Check the contents of the directory to ensure files are copied correctly
RUN ls -l /usr/share/nginx/html

# Ensure the correct permissions
RUN chown -R nginx:nginx /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]