#!/bin/bash
repo=$(git rev-parse --show-toplevel) && \
if [ -z ${MYAPP_RELEASE_STORE_FILE} ]; then
	echo "File not setted...";
elif [ -z ${MYAPP_RELEASE_KEY_ALIAS} ]; then
	echo "File not setted...";
elif [ -z ${MYAPP_RELEASE_STORE_PASSWORD} ]; then
	echo "File not setted...";
elif [ -z ${MYAPP_RELEASE_KEY_PASSWORD} ]; then
	echo "File not setted...";
else
  echo "android.useDeprecatedNdk=true" > ${repo}/android/gradle.properties && \
  echo "MYAPP_RELEASE_STORE_FILE=$MYAPP_RELEASE_STORE_FILE" >> ${repo}/android/gradle.properties && \
  echo "MYAPP_RELEASE_KEY_ALIAS=$MYAPP_RELEASE_KEY_ALIAS" >> ${repo}/android/gradle.properties && \
  echo "MYAPP_RELEASE_STORE_PASSWORD=$MYAPP_RELEASE_STORE_PASSWORD" >> ${repo}/android/gradle.properties && \
  echo "MYAPP_RELEASE_KEY_PASSWORD=$MYAPP_RELEASE_KEY_PASSWORD" >> ${repo}/android/gradle.properties && \
  exit 0
fi
exit 1
