package main

import (
    "fmt"
    "log"
    "net/http"
    "os"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Payment Service running")
}

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "3004"
    }
    http.HandleFunc("/", handler)
    log.Printf("Payment Service listening on port %s", port)
    log.Fatal(http.ListenAndServe(":"+port, nil))
}
