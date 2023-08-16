#!/usr/bin/env bash
native-image --report-unsupported-elements-at-runtime \
    --initialize-at-build-time \
    -jar ./target/zen.jar \
    --no-fallback \
    -H:IncludeResources=.*edn,.*ts,.*json \
    --initialize-at-run-time=org.apache.sshd.common.config.keys.loader.AESPrivateKeyObfuscator -H:Name=zen-cli \
    --initialize-at-run-time=clojure.lang.Compiler \
    --trace-class-initialization=clojure.lang.Compiler,org.apache.sshd.common.config.keys.loader.AESPrivateKeyObfuscator \
    --trace-object-instantiation=org.bouncycastle.crypto.prng.SP800SecureRandom \
    --report-unsupported-elements-at-runtime \
    -H:+ReportExceptionStackTraces


