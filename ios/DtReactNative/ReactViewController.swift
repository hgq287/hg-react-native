//
//  ReactViewController.swift
//  DtReactNative
//
//  Created by Hg Q. on 24/11/24.
//

import UIKit
import React_RCTAppDelegate

class ReactViewController: UIViewController {

  override func viewDidLoad() {
    super.viewDidLoad()

      let factory = (RCTSharedApplication()?.delegate as? RCTAppDelegate)?.rootViewFactory
      self.view = factory?.view(withModuleName: "DtReactNative")
  }
}

