FROM node:10

RUN mkdir -p /var/www/triplytrip
WORKDIR /var/www/triplytrip

COPY ./package.json .

RUN npm i 

EXPOSE 4000

CMD ["npm", "start"]