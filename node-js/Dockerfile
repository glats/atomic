FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8002
ENTRYPOINT [ "node" ]
CMD [ "index.js" ]