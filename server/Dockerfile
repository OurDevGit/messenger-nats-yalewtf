FROM node:10.18.1

RUN chmod +x /usr/bin
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY . .

RUN yarn

# Define the runtime command
CMD ["yarn", "start"]