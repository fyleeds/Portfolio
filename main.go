package main

import (
	"log"
	"net/http"
	bk "portfolio/back"
)

func main() {
	fs := http.FileServer(http.Dir("./frontend/src/"))
	http.Handle("/frontend/src/", http.StripPrefix("/frontend/src/", fs))

	http.HandleFunc("/", bk.WelcomeHandler)
	http.HandleFunc("/Groupie", bk.Groupie)
	http.HandleFunc("/Login", bk.Login)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

}
