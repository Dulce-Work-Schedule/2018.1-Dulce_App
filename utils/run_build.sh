#!/bin/bash
repo=$(git rev-parse --show-toplevel) && \
if [ -z ${PSWD_1_LEVEL} ]; then
	echo "PSWD_1_LEVEL not setted...";
elif [ -z ${PSWD_2_LEVEL} ]; then
	echo "PSWD_2_LEVEL not setted...";
elif [ -z ${PSWD_3_LEVEL} ]; then
	echo "PSWD_3_LEVEL not setted...";
elif [ -z ${PSWD_4_LEVEL} ]; then
	echo "PSWD_4_LEVEL not setted...";
elif [ -z ${PSWD_5_LEVEL} ]; then
	echo "PSWD_5_LEVEL not setted...";
elif [ -z ${MYAPP_RELEASE_STORE_FILE} ]; then
	echo "File not setted...";
elif [ -z ${MYAPP_RELEASE_KEY_ALIAS} ]; then
	echo "File not setted...";
elif [ -z ${MYAPP_RELEASE_STORE_PASSWORD} ]; then
	echo "File not setted...";
elif [ -z ${MYAPP_RELEASE_KEY_PASSWORD} ]; then
	echo "File not setted...";
else
	cp "${repo}/android/gradle.properties" "${repo}/android/gradle.properties.bkp" && \
	echo "MYAPP_RELEASE_STORE_FILE=$MYAPP_RELEASE_STORE_FILE" >> ${repo}/android/gradle.properties && \
	echo "MYAPP_RELEASE_KEY_ALIAS=$MYAPP_RELEASE_KEY_ALIAS" >> ${repo}/android/gradle.properties && \
	echo "MYAPP_RELEASE_STORE_PASSWORD=$MYAPP_RELEASE_STORE_PASSWORD" >> ${repo}/android/gradle.properties && \
	echo "MYAPP_RELEASE_KEY_PASSWORD=$MYAPP_RELEASE_KEY_PASSWORD" >> ${repo}/android/gradle.properties && \
	${repo}/utils/atualizar_icones.sh && \
	cd ${repo}/android/app/ && \
	if [ -f "my-release-key.keystore" ]
	then
		echo -e "\033[0;31mChave Exposta\033[0m" && export SUCESS_DECRYPT=true;
	else
		${repo}/utils/decrypt.sh my-release-key.keystore.encrypt && export SUCESS_DECRYPT=true;
	fi
	if [ -z ${SUCESS_DECRYPT} ]; then
		echo "something worng in keystore decrypting..."
		exit 1
	else
		cd ${repo}/android && \
		if [ -z ${GRADLEW_DEBUG} ]; then
			./gradlew assembleRelease && export SUCESS_GRADLEW=true
		else
			./gradlew assembleDebug && ./gradlew assembleRelease && export SUCESS_GRADLEW=true
		fi
		rm "${repo}/android/gradle.properties" && mv "${repo}/android/gradle.properties.bkp" "${repo}/android/gradle.properties"
		if [ -z ${SUCESS_GRADLEW} ]; then
			echo "Gradlew Build Failed..."
			exit 1
		else
			exit 0
		fi
	fi
fi
exit 1