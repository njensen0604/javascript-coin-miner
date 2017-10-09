# Coin Mining

This extension will mine for crypto-currency coins (i.e. Monero) in the background while you use the browser. 

## Install

Get it from github [Javascript Coin Miner](https://github.com/njensen0604/javascript-coin-miner)

- In your browser, open extensions page. (Chrome: Settings > Extensions).
- Check 'Developer Mode'
- Load unpacked extension. Select extension folder.

## Setup Credentials

Open `background/background.js` and update `minerCoinHiveKey` with your crypto-currency [Coin Hive](https://coinhive.com/) credentials.

## Check Status of Miner

While running, Check the console of a page. An update will be shown there at an interval (currently 2 minutes). This can be updated in the `background/background.js`. Update the `intervalOfSecondsToPrintStatus` variable, then reload the extension.

### Changes ###

Read the CHANGELOG.md for a list of updates.
