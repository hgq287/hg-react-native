//
//  AppDelegate.swift
//  DtReactNative
//
//  Created by Hg Q. on 24/11/24.
//

import UIKit
import React_RCTAppDelegate
import React_RCTAppDelegate

@main
class AppDelegate: RCTAppDelegate {

    override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        self.automaticallyLoadReactNativeWindow = false
        super.application(application, didFinishLaunchingWithOptions: launchOptions)
        window = UIWindow()
        window.rootViewController = ReactViewController()
        window.makeKeyAndVisible()
        return true
    }

    override func sourceURL(for bridge: RCTBridge) -> URL? {
        self.bundleURL()
    }

    override func bundleURL() -> URL? {
        #if DEBUG
        RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
        #else
        Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        #endif
    }
}

