FROM golang:alpine
COPY . /app
WORKDIR /app
RUN go build -o main .
EXPOSE 8003
CMD ["/app/main"]