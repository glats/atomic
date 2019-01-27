FROM php:alpine
COPY . /app
WORKDIR /app
EXPOSE 8004
ENTRYPOINT ["php"]
CMD ["-S", "0.0.0.0:8004", "-t" ,"src/public"]