

CURRENT_VERSION=$(cat ${repo_root}/android/app/build.gradle | grep "versionName " | tr -s '[:space:]' | cut -c 14- | cut -f 2 -d'"')
echo -e "${LIGHT_BLUE}Current tag: ${CURRENT_VERSION}${NC}"
IFS='.' read -ra CURRENT_VERSION_ARRAY <<< "${CURRENT_VERSION}"
CURRENT_VERSION_ARRAY_LEN=$(expr ${#CURRENT_VERSION_ARRAY[@]} - 1)
NEW_VERSION=""
for (( i=0; i<${CURRENT_VERSION_ARRAY_LEN}; i++ )); do
	NEW_VERSION="${NEW_VERSION}${CURRENT_VERSION_ARRAY[$i]}."
done
echo -e "${LIGHT_CYAN}Increment patch version...${NC}"
NEW_VERSION="${NEW_VERSION}$(expr ${CURRENT_VERSION_ARRAY[${CURRENT_VERSION_ARRAY_LEN}]} + 1)"
echo ${NEW_VERSION}


CURRENT_VERSION='versionName "$CURRENT_VERSION"'
NEW_VERSION='versionName "$NEW_VERSION"'
echo $CURRENT_VERSION
echo $NEW_VERSION

sed -e s/$CURRENT_VERSION/$NEW_VERSION/g ${repo_root}/android/app/build.gradle > tmp1
mv tmp1 ${repo_root}/android/app/build.gradle

sed -e s/$VERSION/$NEXT_VERSION/g setup.py > tmp2
mv tmp2 setup.py

echo "committing..."
git add docker-compose.yml setup.py
git commit -m "Release: $NEXT_VERSION"
git tag $NEXT_VERSION

echo "sending to github..."
git push origin $NEXT_VERSION
git push origin

echo "done."