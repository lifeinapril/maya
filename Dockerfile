FROM node:12-alpine
WORKDIR /maya
COPY ./package.json .
COPY . .
RUN npm i --legacy-peer-deps --unsafe-perm
EXPOSE 9000
CMD [ "npm", "run", "start" ]