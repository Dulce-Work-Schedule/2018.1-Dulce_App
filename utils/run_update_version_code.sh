#!/bin/bash
repo=$(git rev-parse --show-toplevel) && \
cd ${repo}/android && \
fastlane update_version && \
version_code=$(cat ${repo}/android/app/build.gradle | grep " versionCode "  | tr -s '[:space:]') && \
echo "$git_credentials" > ~/.git-credentials && \
git config credential.helper store && \
git add ${repo}/android/app/build.gradle && \
git commit -m"[ci skip] Updating to ${version_code}." && \
git push origin master
