FROM node:lts-alpine

#RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./

# install project dependencies
RUN npm install

# . on the right is the app directory on the container
# . on the left is the current directory on the host
COPY . .

#RUN npm run dev

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
