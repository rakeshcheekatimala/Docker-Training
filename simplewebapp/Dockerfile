FROM node:alpine
LABEL maintainer="rakeshcheekatimala@gmail.com"

#ADDING WORKING DIR
WORKDIR  /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm","start"]