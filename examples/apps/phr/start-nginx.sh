#!/usr/bin/env bash
for file in $JSFOLDER;
do
  envsubst '{$AIDBOX_URL},${AIDBOX_CLIENT},${AIDBOX_SECRET}' < $file | sponge $file
done
nginx -g 'daemon off;'