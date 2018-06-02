#!/bin/bash
if [ -z $1 ]; then
	echo "USAGE: $0 BRANCH"
elif [ "$1" = "$TRAVIS_BRANCH" ]; then
	if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
		repo=$(git rev-parse --show-toplevel) && \
		git checkout -qf master
		echo "Estamos num TRAVIS_PULL_REQUEST? a resposta é @$TRAVIS_PULL_REQUEST@"
		${repo}/utils/run_deploy.sh beta && exit 0;
	else
		echo "Não estamos num TRAVIS_PULL_REQUEST? a resposta é @$TRAVIS_PULL_REQUEST@"
	fi
else
		echo "Branch $TRAVIS_BRANCH is different of the branch $1..."
fi
exit 1;
