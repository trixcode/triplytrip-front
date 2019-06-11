FROM node:10-alpine

WORKDIR /var/www/

COPY . .

RUN npm i

EXPOSE 4000

CMD ["npm", "run", "dev"]