FROM node:18.18

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "run", "build"]

EXPOSE 3000