// Copyright (c) 2017 araemot. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const DEFAULT_LENGTH = 6;

let background = chrome.extension.getBackgroundPage();

function random(bound) {
  let draw = new Uint32Array(1);

  const MAX = 0xffffffff;
  const excess = (MAX + 1) % bound;
  const limit = MAX - excess;

  do {
    window.crypto.getRandomValues(draw);
  } while (draw[0] > limit);  // correct for modulo bias

  return draw[0] % bound;
}

function sample(array) {
  return array[random(array.length)];
}

function render(text) {
  document.getElementById("passphrase").textContent = text;
}

function passphrase(length, words) {
  return Array.from({length: length}, () => sample(words)).join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
  if (background.EFF_large_wordlist.length > 0) {
    render(passphrase(DEFAULT_LENGTH, background.EFF_large_wordlist));
  }
});
