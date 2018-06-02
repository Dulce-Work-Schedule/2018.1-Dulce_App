#!/bin/bash
if [ -z $1 ]; then
	echo "USAGE: $0 BRANCH"
elif [ "$1" = "$TRAVIS_BRANCH" ]; then
	if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
		repo=$(git rev-parse --show-toplevel) && \
		git checkout -qf $1
		echo -e "\033[0;31mIniciando build deploy\033[0m"
		${repo}/utils/run_deploy.sh beta && exit 0;
	else
		echo -e "\033[0;31mTRAVIS_PULL_REQUEST: #$TRAVIS_PULL_REQUEST#\033[0m"
	fi
else
		echo -e "\033[0;31mBranch $TRAVIS_BRANCH is different of the branch $1...\033[0m"
fi
exit 1;
