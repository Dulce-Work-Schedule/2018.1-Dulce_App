#!/bin/bash
repo=$(git rev-parse --show-toplevel) && \
cp "${repo}/android/gradle.properties" "${repo}/android/gradle.properties.bkp"
echo "MYAPP_RELEASE_STORE_FILE=$MYAPP_RELEASE_STORE_FILE" >> ${repo}/android/gradle.properties && \
echo "MYAPP_RELEASE_KEY_ALIAS=$MYAPP_RELEASE_KEY_ALIAS" >> ${repo}/android/gradle.properties && \
echo "MYAPP_RELEASE_STORE_PASSWORD=$MYAPP_RELEASE_STORE_PASSWORD" >> ${repo}/android/gradle.properties && \
echo "MYAPP_RELEASE_KEY_PASSWORD=$MYAPP_RELEASE_KEY_PASSWORD" >> ${repo}/android/gradle.properties && \
${repo}/utils/atualizar_icones.sh && \
cd ${repo}/android/app/ && \
${repo}/utils/decrypt.sh my-release-key.keystore.encrypt && \
${repo}/android && \
./gradlew assembleRelease

rm "${repo}/android/gradle.properties" && mv "${repo}/android/gradle.properties.bkp" "${repo}/android/gradle.properties"