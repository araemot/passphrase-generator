// Copyright (c) 2017 araemot. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// EFF_large_wordlist retrieved from
// https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt

const DEFAULT_LENGTH = 6;
const DEFAULT_COPY = false;

EFF_large_wordlist = [];
passphrase_length = DEFAULT_LENGTH;
copy_passphrase = DEFAULT_COPY;

function set_options(options) {
  passphrase_length = options.length || passphrase_length;
  copy_passphrase = options.copy || copy_passphrase;
}

chrome.storage.local.get(["length", "copy"], set_options);

let request = new XMLHttpRequest();
request.open("GET", "EFF-large-wordlist.json");
request.addEventListener("load", () => EFF_large_wordlist = request.response);
request.responseType = "json";
request.send();
