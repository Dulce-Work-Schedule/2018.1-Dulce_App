#!/bin/bash
root_dir=$(git rev-parse --show-toplevel)
cp -a ${root_dir}/utils/hooks/. ${root_dir}/.git/hooks/
unset root_dir