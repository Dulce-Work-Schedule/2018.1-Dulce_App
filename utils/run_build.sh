#!/bin/bash
repo=$(git rev-parse --show-toplevel) && \
${repo}/utils/run_update_gradle_properties.sh && \
${repo}/utils/atualizar_icones.sh && \
${repo}/utils/run_decrypt_keystore.sh && \
cd ${repo}/android && \
fastlane build && export SUCESS_GRADLEW=true
if [ -z ${SUCESS_GRADLEW} ]; then
	echo "Build Sucess Status:${SUCESS_GRADLEW}"
	echo "Gradlew Build Failed..."
	exit 1
else
	echo "Build Sucess Status:${SUCESS_GRADLEW}"
	exit 0
fi
