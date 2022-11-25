package utils

import "regexp"

func MatchPasswordString(password string) bool {

	// Must be equal or longer than 8 charactors
	if len(password) < 8 {
		return false
	}

	// Must contain at least each one uppercase, lowercase and number
	reg := []*regexp.Regexp{
		regexp.MustCompile(`[a-z]`), regexp.MustCompile(`[A-Z]`),
		regexp.MustCompile(`\d`),
	}
	for _, r := range reg {
		if r.FindString(password) == "" {
			return false
		}
	}
	return true
}
