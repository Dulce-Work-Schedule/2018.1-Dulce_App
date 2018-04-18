#!/bin/bash
repo=$(git rev-parse --show-toplevel) && \
cp "${repo}/android/gradle.properties" "${repo}/android/gradle.properties.bkp"
echo "MYAPP_RELEASE_STORE_FILE=$MYAPP_RELEASE_STORE_FILE" >> ${repo}/android/gradle.properties && \
echo "MYAPP_RELEASE_KEY_ALIAS=$MYAPP_RELEASE_KEY_ALIAS" >> ${repo}/android/gradle.properties && \
echo "MYAPP_RELEASE_STORE_PASSWORD=$MYAPP_RELEASE_STORE_PASSWORD" >> ${repo}/android/gradle.properties && \
echo "MYAPP_RELEASE_KEY_PASSWORD=$MYAPP_RELEASE_KEY_PASSWORD" >> ${repo}/android/gradle.properties && \
${repo}/utils/atualizar_icones.sh && \
cd ${repo}/android/app/ && \
if [ -f "my-release-key.keystore" ]
then
	echo -e "\033[0;31mChave Exposta\033[0m"
else
	${repo}/utils/decrypt.sh my-release-key.keystore.encrypt
fi
cd ${repo}/android && \
if [ -z ${GRADLEW_DEBUG} ]; then
	./gradlew assembleRelease
else
	./gradlew assembleDebug && ./gradlew assembleRelease
fi
rm "${repo}/android/gradle.properties" && mv "${repo}/android/gradle.properties.bkp" "${repo}/android/gradle.properties"
