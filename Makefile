
BIN = node_modules/.bin
STANDARD = $(BIN)/standard
WATCHIFY = $(BIN)/watchify

.PHONY: standard
standard:
	$(STANDARD)

.PHONY: watch
watch:
	$(WATCHIFY) docs/index.js \
		--outfile docs/bundle.js \
		--debug \
		--verbose \
		--transform [ babelify --presets [ es2015 react stage-0 ] ]

.PHONY: serve
serve:
	cd docs && python -m SimpleHTTPServer 5000
