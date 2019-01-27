FROM golang:alpine
COPY . /app
WORKDIR /app
RUN go build -o main .
EXPOSE 8001
CMD ["/app/main"]