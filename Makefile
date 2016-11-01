SHELL := /bin/bash

install: preflight
	npm install

build: clean
	NODE_ENV=production $$(npm bin)/webpack

serve-dev:
	node dev-server.js

serve-prod: build
	node prod-server.js

test: preflight
	NODE_ENV=test $$(npm bin)/tape test-helpers/setup.js '{client,shared,server}/**/*/spec.{js,jsx}' | $$(npm bin)/tap-spec

lint: preflight
	$$(npm bin)/eslint . --ignore-path .gitignore --ext '.js,.jsx'

clean:
	-rm -r dist

preflight:
	@(which npm > /dev/null) || (echo 'missing dependency: npm'; exit 1)
	@(which node > /dev/null) || (echo 'missing dependency: node'; exit 1)
