// Copyright (c) 2017 araemot. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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

// https://bugs.chromium.org/p/chromium/issues/detail?id=111660#c7
function focus_page() {
  if (location.search !== "?foo") {
    location.search = "?foo";
    throw new Error;  // load everything on the next page;
                      // stop execution on this page
  }
}

function copy_to_clipboard(text) {
  if (typeof browser !== "undefined") { // Firefox
    focus_page();
  }
  let textarea = document.createElement("textarea");
  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

document.addEventListener("DOMContentLoaded", () => {
  if (background.EFF_large_wordlist.length > 0) {
    let phrase = passphrase(background.passphrase_length,
                            background.EFF_large_wordlist);
    if (background.copy_passphrase) {
      copy_to_clipboard(phrase);
    }
    render(phrase);
  }
});
