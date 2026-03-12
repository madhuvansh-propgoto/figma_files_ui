FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV HOST=0.0.0.0

EXPOSE 3000

ENV NODE_OPTIONS=--max-old-space-size=4096

CMD ["npm","start"]