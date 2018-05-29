#!/bin/bash
repo=$(git rev-parse --show-toplevel);
echo "cd ${repo}/android" ;
cd ${repo}/android;
echo "fastlane update_version" ;
fastlane update_version;
echo "version_code=" ;
version_code=$(cat ${repo}/android/app/build.gradle | grep " versionCode "  | tr -s '[:space:]');
echo "echo git_credentials" ;
if [ -z $git_credentials ]; then
	echo -e "\033[0;31mEmpty env git_credentials...\033[0m";
	exit 1;
else
	echo "$git_credentials" > ~/.git-credentials;
	echo "git config credential.helper store" ;
	git config credential.helper store;
	echo "git add ${repo}/android/app/build.gradle" ;
	git branch;
	git add ${repo}/android/app/build.gradle;
	git git log;
	echo "git commit -m [ci skip] Updating to ${version_code}." ;
	git commit -m"[ci skip] Updating to ${version_code}.";
	git log;
	echo "git push origin master";
	git push origin master
fi
