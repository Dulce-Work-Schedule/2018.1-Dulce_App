#!/bin/bash
if [ -z $1 ]; then
	echo "USAGE: $0 BRANCH"
	exit 1;
elif [ "$1" = "$TRAVIS_BRANCH" ]; then
	exit 0;
else
		echo "Branch $TRAVIS_BRANCH is different of the branch $1..."
		exit 1;
fi
