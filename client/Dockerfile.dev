FROM node 
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3050
CMD ["npm", "run", "dev"]