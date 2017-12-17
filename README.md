# passphrase-generator

A web extension for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/passphrase-generator/)
and [Chrome](https://chrome.google.com/webstore/detail/passphrase-generator/iliehbhfgfbjllfhhbbceochgmkkhpcb).

Generates a passphrase by randomly selecting words from the [EFF long wordlist](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases)
using the browser's [crypto RNG](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues).
A six word phrase takes an average of 3500 years to guess at 1 trillion guesses per second.
The phrase is generated entirely in the browser,
no information is sent to or received from anywhere else.

Click the dice icon to generate the passphrase,
then drag and drop the phrase where you want.
Alternatively, you can copy and paste the phrase.
Other apps, however, can then read your passphrase from the clipboard,
making copy and paste less secure.

In the options page you can select
* how long the passphrase will be (by default 6 words),
* if the phrase is automatically copied to your clipboard (by default it is not).

Dice icon by [Gregor Cresnar](http://www.flaticon.com/authors/gregor-cresnar)
from [Flaticon](http://www.flaticon.com).
Licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).
