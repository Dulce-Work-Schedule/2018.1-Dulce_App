#!/bin/bash
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
elif [ -z ${1} ]; then
	echo "File not setted...";
else 
	export filename=$1 && \
	export file_name="${filename%.*}" && \
	mv ${filename} "${file_name}.gpg" && \
	gpg --batch --passphrase ${PSWD_5_LEVEL} --output ${file_name} --decrypt "${file_name}.gpg" > /dev/null && \
	rm "${file_name}.gpg" && \
	mv ${file_name} "${file_name}.gpg" && \
	gpg --batch --passphrase ${PSWD_4_LEVEL} --output ${file_name} --decrypt "${file_name}.gpg" > /dev/null && \
	rm "${file_name}.gpg" && \
	mv ${file_name} "${file_name}.gpg" && \
	gpg --batch --passphrase ${PSWD_3_LEVEL} --output ${file_name} --decrypt "${file_name}.gpg" > /dev/null && \
	rm "${file_name}.gpg" && \
	mv ${file_name} "${file_name}.gpg" && \
	gpg --batch --passphrase ${PSWD_2_LEVEL} --output ${file_name} --decrypt "${file_name}.gpg" > /dev/null && \
	rm "${file_name}.gpg" && \
	mv ${file_name} "${file_name}.gpg" && \
	gpg --batch --passphrase ${PSWD_1_LEVEL} --output ${file_name} --decrypt "${file_name}.gpg" > /dev/null && \
	rm "${file_name}.gpg"
fi
