package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello Im Nodejs and im Running on port 8003")
	})

	http.ListenAndServe(":8003", nil)
}
