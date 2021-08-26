package recipe

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type Recipe struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	RecipeId  int8   `json:"recipeId"`
}

var AllRecipes []Recipe

func PopulateRecipes() {
	AllRecipes = []Recipe{
		Recipe{FirstName: "Daniel", LastName: "Peterson", RecipeId: 1},
		Recipe{FirstName: "Kayley", LastName: "Murphy", RecipeId: 2},
	}
}

func DeleteRecipe(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	for index, recipe := range AllRecipes {
		if strconv.Itoa(int(recipe.RecipeId)) == id {
			AllRecipes = append(AllRecipes[:index], AllRecipes[index+1:]...)
		}
	}
}

func CreateRecipe(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var recipe Recipe
	json.Unmarshal(reqBody, &recipe)
	AllRecipes = append(AllRecipes, recipe)
	json.NewEncoder(w).Encode(recipe)
}

func UpdateRecipe(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	vars := mux.Vars(r)
	key := vars["id"]
	var recipe Recipe
	json.Unmarshal(reqBody, &recipe)
	for index, foundRecipe := range AllRecipes {
		if strconv.Itoa(int(foundRecipe.RecipeId)) == key {
			AllRecipes[index] = recipe
		}
	}
	json.NewEncoder(w).Encode(recipe)
}

func ReturnRecipeById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]
	for _, recipe := range AllRecipes {
		if strconv.Itoa(int(recipe.RecipeId)) == key {
			json.NewEncoder(w).Encode(recipe)
		}
	}
}

func ReturnAllRecipes(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(AllRecipes)
}
