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
else
  cd ${repo}/android/app/ && \
  keystore_file="my-release-key.keystore"
  if [ -f ${keystore_file} ]; then
  	echo -e "\033[0;31mChave Exposta\033[0m" && export SUCESS_DECRYPT=true;
  else
  	${repo}/utils/decrypt.sh ${keystore_file}.encrypt && export SUCESS_DECRYPT=true;
  fi
  if [ -z ${SUCESS_DECRYPT} ]; then
  	echo "Something worng in ${keystore_file} decrypting..."
  	exit 1
  else
    echo "Decrypting sucessfully completed."
    exit 0
  fi
fi
exit 1
