#!/bin/bash
if [ -z $1 ]; then
	echo "USAGE: $0 BRANCH"
elif [ "$1" = "$TRAVIS_BRANCH" ]; then
	if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
		exit 0;
	fi
else
		echo "Branch $TRAVIS_BRANCH is different of the branch $1..."
fi
exit 1;
