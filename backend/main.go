package main

import "github.com/katalabut/go-blog/backend/rest"

func main() {
	srv := &rest.Rest{}
	srv.Run(8080)
}
