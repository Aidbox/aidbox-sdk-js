.EXPORT_ALL_VARIABLES:
.PHONY: test build

sdk-build:
	clj -T:build-pm uber

sdk-publish:
	cd vendor/publish && npm install && cp ../../target/zen.jar zen.jar && npm publish --access=public

repl:
	clj -A:test -M:nrepl

test:
	clj -A:test:kaocha

test-ci:
	clojure -A:test:kaocha

outdated:
	clj -Sdeps '{:deps {com.github.liquidz/antq {:mvn/version "RELEASE"}}}' -M -m antq.core

lint:
	clj -Sdeps '{:deps {clj-kondo/clj-kondo {:mvn/version "RELEASE"}}}' -m clj-kondo.main --lint src --fail-level error --parallel

native:
	clojure -M:native-image

CP=$(shell clojure -Spath -A:nrepl:profile:build-pm)
nvd:
	clojure -Ttools install nvd-clojure/nvd-clojure '{:mvn/version "RELEASE"}' :as nvd
	clojure -J-Dclojure.main.report=stderr -Tnvd nvd.task/check :classpath  \"$(CP)\"

cve:
	clojure -M:cve