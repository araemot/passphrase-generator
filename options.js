// Copyright (c) 2017 araemot. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let background = chrome.extension.getBackgroundPage();

function save_options(e) {
  background.passphrase_length = document.getElementById("length").value;
  background.copy_passphrase = document.getElementById("copy").checked;
  chrome.storage.local.set({
    length: background.passphrase_length,
    copy: background.copy_passphrase
  });
  e.preventDefault();
}

function restore_options() {
  document.getElementById("length").value = background.passphrase_length;
  document.getElementById("copy").checked = background.copy_passphrase;
}

document.addEventListener("DOMContentLoaded", restore_options);
document.querySelector("form").addEventListener("submit", save_options);
