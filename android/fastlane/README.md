fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android test
```
fastlane android test
```
Runs all the tests
### android build
```
fastlane android build
```
Generate Build
### android debug_build
```
fastlane android debug_build
```
Generate Degub Build
### android update_version
```
fastlane android update_version
```
Increment Version Code
### android playstore_production
```
fastlane android playstore_production
```
Deploy a new production version to the Google Play
### android playstore_beta
```
fastlane android playstore_beta
```
Deploy a new Beta version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
