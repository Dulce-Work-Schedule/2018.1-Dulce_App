#!/bin/bash

# sudo apt install inkscape
root_dir=$(git rev-parse --show-toplevel)
inkscape -z -e ${root_dir}/android/app/src/main/res/mipmap-hdpi/ic_launcher.png -w 72 -h 72 ${root_dir}/assets/logos/logo_white_purple.svg
inkscape -z -e ${root_dir}/android/app/src/main/res/mipmap-mdpi/ic_launcher.png -w 48 -h 48 ${root_dir}/assets/logos/logo_white_purple.svg
inkscape -z -e ${root_dir}/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png -w 96 -h 96 ${root_dir}/assets/logos/logo_white_purple.svg
inkscape -z -e ${root_dir}/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png -w 144 -h 144 ${root_dir}/assets/logos/logo_white_purple.svg

