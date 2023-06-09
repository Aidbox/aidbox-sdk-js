.EXPORT_ALL_VARIABLES:
.PHONY: test build

sdk-build:
	mkdir -p resources && \
	cd vendor/build && npm install && npm run build && \
	cp lib/index.d.ts ../../resources/index.d.ts && \
	cp lib/index.js ../../resources/index.js && \
	cp package.json ../../resources/package.json && \
	cd ../.. && clj -T:build-pm uber && \
	rm -rf ./resources vendor/build/lib

sdk-publish:
	cd vendor/publish && npm install && cp ../../target/zen.jar zen.jar && npm publish --access=public

repl:
	clj -A:test -M:nrepl

build:
	clj -T:build-pm uber

test:
	clj -A:test:kaocha

test-ci:
	clojure -A:test:kaocha

outdated:
	clj -Sdeps '{:deps {com.github.liquidz/antq {:mvn/version "RELEASE"}}}' -M -m antq.core

lint:
	clj -Sdeps '{:deps {clj-kondo/clj-kondo {:mvn/version "RELEASE"}}}' -m clj-kondo.main --lint src --fail-level error --parallel
