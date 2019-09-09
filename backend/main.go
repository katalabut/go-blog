package main

import "github.com/spoooty/rocketcode/backend/rest"

func main() {
	srv := &rest.Rest{}
	srv.Run(8080)
}
