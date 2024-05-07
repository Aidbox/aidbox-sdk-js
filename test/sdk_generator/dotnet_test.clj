(ns sdk-generator.dotnet-test
  (:require
   [clojure.data :as data]
   [clojure.java.io :as io]
   [clojure.pprint :as p]
   [clojure.string :as str]
   [clojure.test :as t]
   [sdk-generator.dotnet :as dotnet]
   [sdk-generator.search-parameters :as sut]))

(defn constantly-first-arg
  "Returns a function that always returns first argument."
  [] (fn [& args] (first args)))

(defn diff [a b]
  (let [raw-diff (data/diff (str/split-lines a) (str/split-lines b))
        expected (first raw-diff)
        actual (second raw-diff)]
    ()))

(map (fn [idx line]

       [idx line])

     (map-indexed (constantly-first-arg) [nil nil nil nil nil "    public string? Identifier;"]
                  )
     [nil nil nil nil nil "    public string? Identifier;"]
  )



(comment
  (def a
    "namespace Aidbox.FHIR.Search;

public class AccountSearchParameters : DomainResourceSearchParameters
{

    public string? Identifier;

    public string? Name;

    public string? Owner;

    public string? Patient;

    public string? Period;

    public string? Status;

    public string? Subject;

    public string? Type;

}")

  (def b
    "namespace Aidbox.FHIR.Search;

public class AccountSearchParameters : DomainResourceSearchParameters
{


    public string? Identifier

    public string? Name;

    public string? Owner;

    public string? Patient;

    public string? Period;

    public string? Status;

    public string? Subject;

    public string? Type;

}")

  (let [raw-diff (data/diff (str/split-lines a) (str/split-lines b))
        expected (first raw-diff)
        actual (second raw-diff)]
    (when (or expected actual)
      (for [[line-number line] (map-indexed vector expected)]

        )

      ))

  (data/diff (str/split-lines a) (str/split-lines b))

  ;;repl
  )



(defn custom-path
  [ns-kw]
  (str "test/snapshots/" (namespace ns-kw) "." (name ns-kw) ".cs"))

(defn match-snapshot
  ([k v] (match-snapshot {} k v))
  ([{:keys [make-path pprint?]} k v]
   (let [file-name (make-path k)
         file (io/file file-name)]
     (if (.exists file)
       (let [snapshot (slurp file)]
         (t/is (= snapshot v) (str "Using snapshot at " file-name "\nThe diff is:\n" v)))
       (do
         (io/make-parents file-name)
         (spit file-name (if pprint? (with-out-str (p/pprint v)) v)))))))

(t/deftest simple-test
  (def generated
    (sut/search-parameters-classes (dotnet/fetch-all-schemas)))

  (doseq [{:keys [resource-type class-file-content]} generated]
    (match-snapshot
     {:make-path custom-path :pprint? false}
     (keyword "sdk-generator.dotnet" resource-type)
     class-file-content)))
