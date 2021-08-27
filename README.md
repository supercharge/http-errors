<div align="center">
  <a href="https://superchargejs.com">
    <img width="471" style="max-width:100%;" src="https://superchargejs.com/images/supercharge-text.svg" />
  </a>
  <br/>
  <br/>
  <p>
    <h3>HTTP Errors</h3>
  </p>
  <p>
    An HTTP error class throwing with proper status codes
  </p>
  <br/>
  <p>
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#quick-usage-overview"><strong>Usage</strong></a>
  </p>
  <br/>
  <br/>
  <p>
    <a href="https://www.npmjs.com/package/@supercharge/http-errors"><img src="https://img.shields.io/npm/v/@supercharge/http-errors.svg" alt="Latest Version"></a>
    <a href="https://www.npmjs.com/package/@supercharge/http-errors"><img src="https://img.shields.io/npm/dm/@supercharge/http-errors.svg" alt="Monthly downloads"></a>
  </p>
  <p>
    <em>Follow <a href="http://twitter.com/marcuspoehls">@marcuspoehls</a> and <a href="http://twitter.com/superchargejs">@superchargejs</a> for updates!</em>
  </p>
</div>

---

## Introduction
The `@supercharge/http-errors` package provides an HTTP error class with useful defaults.

- provides an `HttpError` base class with defaults to throw proper HTTP errors
- the `HttpError` base class captures stack traces by default
- create your own HTTP error with custom HTTP status code, title, and error code


## Installation

```
npm i @supercharge/http-errors
```


## Quick Usage Overview
Using `@supercharge/http-errors` is pretty straightforward. The package exports the `HttpError` class that you can use like the native `Error` class.

```js
const { HttpError } = require('@supercharge/http-errors')

// create an HTTP 400 BadRequest error yourself
throw new HttpError('invalid request input data', 400)

// … or throw using shortcut methods
throw HttpError.badRequest('Request validation failed')

// … or use a fluent interface to customize the properties
throw new HttpError('Request validation failed')
  .withStatus(400)
  .withCode('E_YOUR_CUSTOM_ERROR_CODE')
```


## Contributing
Do you miss a function? We very much appreciate your contribution! Please send in a pull request 😊

1.  Create a fork
2.  Create your feature branch: `git checkout -b my-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request 🚀


## License
MIT © [Supercharge](https://superchargejs.com)

---

> [superchargejs.com](https://superchargejs.com) &nbsp;&middot;&nbsp;
> GitHub [@supercharge](https://github.com/supercharge) &nbsp;&middot;&nbsp;
> Twitter [@superchargejs](https://twitter.com/superchargejs)
