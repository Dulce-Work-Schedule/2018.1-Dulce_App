#!/bin/bash
if [ -z $1 ]; then
  echo "Usage: $0 [beta | production]"
  exit 1
elif [[ ! ($1 == "beta" || $1 == "production") ]]; then
  echo "Version not found"
  exit 1
else
  repo=$(git rev-parse --show-toplevel) && \
  ${repo}/utils/run_update_gradle_properties.sh && \
  ${repo}/utils/atualizar_icones.sh && \
  ${repo}/utils/run_decrypt_keystore.sh && \
  ${repo}/utils/run_decrypt_playstore_json.sh && \
  cd ${repo}/android && \
  if [[ $1 == "beta" ]]; then
    echo "Deploying Beta Version"
    ${repo}/utils/run_update_version_code.sh && \
    fastlane debug_build && \
    fastlane playstore_beta && \
    exit 0
  elif [[ $1 == "production" ]]; then
    echo "Deploying Production Version"
    fastlane build && \
    fastlane playstore_production && \
    exit 0
  fi
fi
