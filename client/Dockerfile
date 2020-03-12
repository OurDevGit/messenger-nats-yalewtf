# Stage 1 - the build process
FROM node:12.14.0 as build-deps
ENV PATH /app/node_modules/.bin:$PATH

RUN chmod +x /usr/bin
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn
COPY . ./

RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.17.9
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# Copy the nginx.conf
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]