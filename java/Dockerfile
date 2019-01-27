FROM openjdk:8-jdk-alpine
RUN addgroup -S atomic && adduser -S atomic -G atomic
ENV HOME=/home/atomic
RUN chown -R atomic:atomic $HOME/*
USER atomic
COPY app $HOME/app
WORKDIR /home/atomic
EXPOSE 8002
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
