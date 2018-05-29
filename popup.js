// Copyright (c) 2017 araemot. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const passphrase_length = 6;
const words = chrome.extension.getBackgroundPage().EFF_wordlist;

function random(array) {
  let draw = new Uint32Array(1);

  // remove modulo bias by making the RNG's range
  // a multiple of array.length
  do {
    window.crypto.getRandomValues(draw);
  } while (draw[0] < (Math.pow(2,32) % array.length));

  return array[draw[0] % array.length];
}

function sample(array, size) {
  return Array.from({length: size}, () => random(array));
}

function render(id, text) {
  document.getElementById(id).textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length > 0) {
    render("passphrase", sample(words, passphrase_length).join(" "));
  }
});
