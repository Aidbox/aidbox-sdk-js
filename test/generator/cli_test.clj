(ns generator.cli-test
  (:require [clojure.test :as t]
            [generator.cli :as gc]))

(t/deftest get-args-test
  (t/is (= {:api-type "fhir", :profiles "true"}
           (gc/parse-args ["api-type=fhir" "profiles=true"])))

  (t/is (= {:profiles "true", :api-type "aidbox"}
           (gc/parse-args ["profiles=true"])))

  (t/is (= {:api-type "aidbox"}
           (gc/parse-args []))))