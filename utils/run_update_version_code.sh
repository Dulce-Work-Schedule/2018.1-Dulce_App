#!/bin/bash
repo=$(git rev-parse --show-toplevel);
# Verify git user
if [ -z $git_user_name ]; then
	echo -e "\033[0;31mEmpty env git_user_name...\033[0m";
	exit 1;
else
	git config --local user.name "$git_user_name"
fi
# Verify git email
if [ -z $git_user_email ]; then
	echo -e "\033[0;31mEmpty env git_user_email...\033[0m";
	exit 1;
else
	git config --local user.email "$git_user_email"
fi
# Verify git credentials
if [ -z $git_credentials ]; then
	echo -e "\033[0;31mEmpty env git_credentials...\033[0m";
	exit 1;
else
	echo "echo git_credentials" ;
	echo "$git_credentials" > ~/.git-credentials;
fi

git config credential.helper store;
git pull --rebase origin master
cd ${repo}/android;
# Increasing build version code
fastlane update_version;
version_code=$(cat ${repo}/android/app/build.gradle | grep " versionCode "  | tr -s '[:space:]');

# Submitting build gradle
git add ${repo}/android/app/build.gradle;
git commit -m"[ci skip] Updating to ${version_code}.";
git push origin master
