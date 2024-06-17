FROM node:20.14.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build
# production environment
FROM nginx:stable-alpine
RUN chown -R nginx:nginx /usr/share/nginx && chmod 755 /usr/share/nginx && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /etc/nginx && \
        chown -R nginx:nginx /var/log/nginx
RUN touch /var/run/nginx.pid && \
        chown  -R nginx:nginx /var/run/nginx.pid
COPY --from=build /app/dist /usr/share/nginx/html
USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
