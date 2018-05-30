#!/bin/bash
repo=$(git rev-parse --show-toplevel);
if [ -z $git_user_name ]; then
	echo -e "\033[0;31mEmpty env git_user_name...\033[0m";
	exit 1;
else
	git config --local user.name "$git_user_name"
fi
if [ -z $git_user_email ]; then
	echo -e "\033[0;31mEmpty env git_user_email...\033[0m";
	exit 1;
else
	git config --local user.email "$git_user_email"
fi
if [ -z $git_credentials ]; then
	echo -e "\033[0;31mEmpty env git_credentials...\033[0m";
	exit 1;
else
	echo "echo git_credentials" ;
	echo "$git_credentials" > ~/.git-credentials;
fi

echo "git config credential.helper store" ;
git config credential.helper store;

echo "cd ${repo}/android" ;
cd ${repo}/android;

git checkout -b update_version;
git branch --set-upstream-to=origin/master

git branch;

echo "fastlane update_version" ;
fastlane update_version;

echo "version_code=" ;
version_code=$(cat ${repo}/android/app/build.gradle | grep " versionCode "  | tr -s '[:space:]');

git branch;

echo "git add ${repo}/android/app/build.gradle" ;
git add ${repo}/android/app/build.gradle;

git log -n 1;

echo "git commit -m [ci skip] Updating to ${version_code}." ;
git commit -m"[ci skip] Updating to ${version_code}.";

git log -n 1;

echo "git push origin master";
git push origin master
