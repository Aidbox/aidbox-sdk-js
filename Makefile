.EXPORT_ALL_VARIABLES:
.PHONY: test build

repl:
	clj -A:test -M:nrepl

build:
	clj -T:build-pm uber