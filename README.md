<p align="center">
  <h1>🍀 Irish PubSub - 97b pubsub system</h1>
  <br>
  <a href="https://unpkg.com/irish-pub-sub/dist/index.min.umd.js">
    <img src="http://img.badgesize.io/https://unpkg.com/irish-pub-sub@1.1.0/dist/index.min.js?compression=gzip" alt="gzip size">
  </a>
  <a href="https://unpkg.com/irish-pub-sub/dist/index.min.umd.js">
    <img src="http://img.badgesize.io/https://unpkg.com/irish-pub-sub@1.1.0/dist/index.min.js?compression=brotli" alt="brotli size">
  </a>
  <a href="https://packagephobia.now.sh/result?p=irish-pub-sub">
    <img src="https://packagephobia.now.sh/badge?p=irish-pub-sub" alt="install size">
  </a>
</p>


Modern (es6) functional Pubsub system (no `class`, or `this`), weights about 97b minified + gzipped.

<h2>Install</h2>

`yarn add irish-pub-sub`

or with UMD

`<script scr="https://unpkg.com/irish-pub-sub/dist/index.umd.js"></script>`

<h2>Usage</h2>

```javascript
import pubsub from 'irish-pub-sub'

const [subscribe, send] = pubsub()

const unsubscribe = subscribe('The Dreadnoughts', (val) => console.log('The Dreadnoughts: ', val)) // returns unsubscribe method
send('Dreadnoughts', 'Best band ever') // => The Dreadnoughts: Best band ever
unsubscribe() // => true
```

_Inspired by [developit/mitt](https://github.com/developit/mitt)_

_Don't use it in production_ 😅
