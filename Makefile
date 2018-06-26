deps = background.js dice.png dice48.png dice96.png \
		eff_large_wordlist.json manifest.json popup.html popup.js
zip : $(deps)
	zip passphrase-generator $(deps)
