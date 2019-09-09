package rest

import (
	"net/http"

	"github.com/go-chi/render"
)

type Post struct {
	ID      string `json:"id"`
	Title   string `json:"title"`
	Picture string `json:"picture"`
}

func postCtrl(w http.ResponseWriter, r *http.Request) {

	render.Status(r, http.StatusOK)

	post := &Post{
		"test",
		"test",
		"content",
	}

	render.JSON(w, r, post)
}
