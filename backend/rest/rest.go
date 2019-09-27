package rest

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi"
)

//Rest is a web server
type Rest struct {
	httpServer *http.Server
}

// Run the lister and request's router, activate rest server
func (r *Rest) Run(port int) {

	r.httpServer = &http.Server{
		Handler: r.routes(),
		Addr:    fmt.Sprintf(":%d", port),
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(r.httpServer.ListenAndServe())
}

func (rst *Rest) routes() http.Handler {
	r := chi.NewRouter()

	r.Route("/api/v1", func(rapi chi.Router) {
		// rapi.Use(render.SetContentType(render.ContentTypeJSON))
		rapi.Get("/posts", postsCtrl)
	})

	return r
}
