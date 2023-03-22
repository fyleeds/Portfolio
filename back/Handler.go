package portfolio

import (
	"html/template"
	"net/http"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("frontend/src/pages/*.html"))
}

func WelcomeHandler(w http.ResponseWriter, r *http.Request) {

	tpl.ExecuteTemplate(w, "index.html", nil)
}

func Login(w http.ResponseWriter, r *http.Request) {

	tpl.ExecuteTemplate(w, "DetailLogin.html", nil)
}

func Groupie(w http.ResponseWriter, r *http.Request) {

	tpl.ExecuteTemplate(w, "DetailGroupie.html", nil)
}
