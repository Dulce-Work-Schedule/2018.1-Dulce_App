#!/bin/bash
if [ -z $1 ]; then
	echo "USAGE: $0 TAG_VERSION"
	exit 1;
else
	tags_url="https://api.github.com/repos/Dulce-Work-Schedule/2018.1-Dulce_App/tags"
	tag_latest="$(version=$(curl -s ${tags_url} | grep \"name\" | cut -f 2 -d':' | cut -f 2 -d'"'); echo $version | cut -f 1 -d' ')"
	if [ "$tag_latest" = "$1" ];
	then
		exit 0;
	else
		echo "Tag $1 is different of the Latest tag ${tag_latest}..."
		exit 1;
	fi
fi