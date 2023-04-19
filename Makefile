.EXPORT_ALL_VARIABLES:
.PHONY: test build

repl:
	clj -A:test -M:nrepl

build:
	clj -T:build-pm uber

test:
	clj -A:test:kaocha

test-ci:
	clojure -A:test:kaocha