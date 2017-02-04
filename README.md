# passphrase-generator

A web extension for Firefox and Chrome that
generates a random passphrase from the
[EFF long wordlist](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases).

To use, click on the icon to generate the passphrase,
then select and drag the phrase to where you want it.
This is the preferred method.
Alternatively, you can copy and paste the phrase.
Other apps, however, can read your passphrase from the clipboard,
making this method less secure.

In the options page
you can select how long the passphrase will be (by default 6 words),
and if the phrase is automatically copied to your clipboard (by default it is not).

The passphrase is created locally in the browser,
using the [browser's crypto RNG](https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues)
to randomly select words from the
[EFF long wordlist](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases).
A six word passphrase from this list takes, on average,
3500 years to guess at 1 trillon guesses per second.

Dice icon by [Gregor Cresnar](http://www.flaticon.com/authors/gregor-cresnar)
from [Flaticon](http://www.flaticon.com).
Licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).
