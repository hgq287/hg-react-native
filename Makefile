# Makefile for React Native

.PHONY: ios android clean node_modules reinstall pods start

## Run the app on iOS simulator
ios:
	npx react-native run-ios

## Run the app on Android emulator/device
android:
	npx react-native run-android

# Stop Metro / build processes
# Clear Metro bundler cache
reset-cache:
	npx react-native start --reset-cache


## Start the Metro bundler only
start:
	npx react-native start

## Clean node_modules and lock files
clean:
	rm -rf node_modules
	rm -f yarn.lock package-lock.json
	rm -rf ios/Pods ios/Podfile.lock

## Clean and reinstall everything (node_modules + pods)
reinstall: clean
	npm install
	cd ios && pod install

## Run pod install for iOS
pods:
	cd ios && pod install