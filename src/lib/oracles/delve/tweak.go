package main

import (
	"encoding/json"
	"os"
	"strconv"
)

type Item struct {
	Match []int  `json:"match"`
	Text  string `json:"text"`
}

type Table []Item

func main() {
	f, err := os.Open(os.Args[1])
	if err != nil {
		panic(err)
	}
	defer f.Close()

	inc, err := strconv.Atoi(os.Args[2])
	if err != nil {
		panic(err)
	}

	var in Table
	json.NewDecoder(f).Decode(&in)

	for i := range in {
		for n := range in[i].Match {
			in[i].Match[n] += inc
		}
	}

	json.NewEncoder(os.Stdout).Encode(in)
}
