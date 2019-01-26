FROM node:alpine
RUN addgroup -S atomic && adduser -S atomic -G atomic
ENV HOME=/home/atomic
RUN chown -R atomic:atomic $HOME
USER atomic
COPY app $HOME/app
WORKDIR /home/atomic
EXPOSE 8002
CMD [ "node", "app/index.js" ]