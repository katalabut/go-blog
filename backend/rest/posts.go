package rest

import (
	"net/http"

	"github.com/go-chi/render"
)

type Post struct {
	ID      string `json:"id"`
	Title   string `json:"title"`
	Link    string `json:"link"`
	Picture string `json:"picture"`
	Author  string `json:"author"`
}

func postCtrl(w http.ResponseWriter, r *http.Request) {
	render.Status(r, http.StatusOK)

	post := &Post{
		ID:      "112h3j12h3kj1hk312h3kj12h3l1kj3h12kj3",
		Title:   "Настраиваем ESlint + Prettier для React",
		Link:    "eslint-plus-prettier-for-react",
		Picture: "/static/oruehrgfkvghyugqerqhbdkjf.png",
		Author:  "spoooty",
	}

	render.JSON(w, r, post)
}

func postsCtrl(w http.ResponseWriter, r *http.Request) {
	var posts []Post

	posts = append(posts, Post{
		ID:      "112h3j12h3kj1hk312h3kj12h3l1kj3h12kj3",
		Title:   "Настраиваем ESlint + Prettier для React",
		Link:    "eslint-plus-prettier-for-react",
		Picture: "/static/oruehrgfkvghyugqerqhbdkjf.png",
		Author:  "spoooty",
	})
	posts = append(posts, Post{
		ID:     "fsgfsdgbvxvbgfdjutytrewergffsgdfg",
		Title:  "Статья 2",
		Link:   "eslint-plus-prettier-for-react",
		Author: "spoooty",
	})
	posts = append(posts, Post{
		ID:      "asdvsdfgrtyujummkjlo;optuijghhjg",
		Title:   "Настраиваем React",
		Link:    "eslint-plus-prettier-for-react",
		Picture: "/static/oruehrgfkvghyugqerqhbdkjf.png",
		Author:  "spoooty",
	})

	render.Status(r, http.StatusOK)
	render.JSON(w, r, posts)
}
