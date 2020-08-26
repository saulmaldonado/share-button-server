<h1 align="center">Welcome to share-button-server</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/saul_mal" target="_blank">
    <img alt="Twitter: saul_mal" src="https://img.shields.io/twitter/follow/saul_mal.svg?style=social" />
  </a>
</p>

> Server for share button react component

## Install

```sh
yarn install
```

or

```sh
npm install
```

## Usage

### Endpoints

> POST /

### Body

```json
{
  "facebook": "youtube.com",
  "reddit": "youtube.com",
  "facebookMessenger": "youtube.com",
  "pinterest": "youtube.com",
  "twitter": "youtube.com",
  "linkedin": "youtube.com"
}
```

### Response

```json
[
  "https://facebook.com/sharer.php?display=popup&u=youtube.com",
  "http://www.facebook.com/dialog/send?display=popup&app_id=4135161309887907&link=youtube.com&redirect_uri=youtube.com",
  "http://pinterest.com/pin/create/button/?url=youtube.com",
  "https://www.reddit.com/submit?url=youtube.com",
  "https://www.linkedin.com/sharing/share-offsite/?url=youtube.com",
  "https://twitter.com/intent/tweet?url=youtube.com"
]
```

## Author

👤 **Saul Maldonado**

- Website: https://saulmaldonado.tech/
- Twitter: [@saul_mal](https://twitter.com/saul_mal)
- Github: [@saulmaldonado](https://github.com/saulmaldonado)
- LinkedIn: [@saulmaldonado4](https://linkedin.com/in/saulmaldonado4)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
