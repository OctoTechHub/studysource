FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/src

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "run","dev"]
