// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function updateIcon() {
  chrome.permissions.request({
    permissions: ['tts']
  }, function(granted) {
    if (granted) {
      console.log("success to grant");
    } else {
      console.log("fail to grant");
    }
  });
};

chrome.browserAction.onClicked.addListener(updateIcon);
