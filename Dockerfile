FROM node:slim
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn
COPY build build
CMD ["yarn", "start"]
