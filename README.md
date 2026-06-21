# Crypto Portfolio Tracker

A simple personal crypto portfolio tracker built as a static web app.

## Features

- Track crypto holdings by ticker, name, quantity, price, and average cost
- View total portfolio value and allocation percentages
- See profit/loss based on average cost
- Set target allocation percentages
- Set price alerts above or below a chosen price
- Refresh live prices using CoinGecko
- See when each coin price was last updated
- Add, edit, clear, cancel, and remove holdings
- Export and import a private backup file
- Install on mobile as a Progressive Web App

## Privacy

This app does not store your holdings in GitHub.

Your holdings are saved in your browser's local storage on the device where you enter them. If you publish this app with GitHub Pages, the public repository only contains the app code.

Do not upload exported backup JSON files to GitHub.

## GitHub Pages Files

These are the files needed for GitHub Pages:

```text
index.html
manifest.json
service-worker.js
icon-192.svg
icon-512.svg
README.md
```

## Local Use

Open the app from GitHub Pages, or run it locally with a simple static server.

The local development server file is optional and is not required for GitHub Pages.

## Backup

Use `Tools > Export` after entering or changing holdings. Keep the exported JSON file somewhere private.

Use `Tools > Import` to restore holdings on another device or browser.

## Notes

Live price refresh depends on CoinGecko availability and correct CoinGecko IDs for less common coins. Common tickers like BTC, ETH, XRP, ADA, SOL, VET, and ONDO are mapped automatically.
