FROM node:latest

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install
RUN npm audit fix --force

COPY . /app/

EXPOSE 3001

CMD ["npm","run", "start:dev"]
