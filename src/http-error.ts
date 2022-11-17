'use strict'

import { HttpError as BaseHttpError } from '@supercharge/errors'

export class HttpError extends BaseHttpError {
  /**
   * Determine whether the given `error` is an `HttpError` instance.
   *
   * @param {Error} error
   *
   * @returns {Boolean}
   */
  static isHttpError (error: Error): error is HttpError {
    return error instanceof HttpError
  }

  /**
   * Creates a Bad Request error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static badRequest (message: string, code?: string): HttpError {
    return new this(message).withStatus(400).withCode(code).withTitle('Bad Request')
  }

  /**
   * Creates an Unauthorized error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static unauthorized (message: string, code?: string): HttpError {
    return new this(message).withStatus(401).withCode(code).withTitle('Unauthorized')
  }

  /**
   * Creates a Payment Required error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static paymentRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(402).withCode(code).withTitle('Payment Required')
  }

  /**
   * Creates a Forbidden error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static forbidden (message: string, code?: string): HttpError {
    return new this(message).withStatus(403).withCode(code).withTitle('Forbidden')
  }

  /**
   * Creates a Not Found error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static notFound (message: string, code?: string): HttpError {
    return new this(message).withStatus(404).withCode(code).withTitle('Not Found')
  }

  /**
   * Creates a Method Not Allowed error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static methodNotAllowed (message: string, code?: string): HttpError {
    return new this(message).withStatus(405).withCode(code).withTitle('Method Not Allowed')
  }

  /**
   * Creates a Not Acceptable error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static notAcceptable (message: string, code?: string): HttpError {
    return new this(message).withStatus(406).withCode(code).withTitle('Not Acceptable')
  }

  /**
   * Creates a Proxy Authentication Required error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static proxyAuthRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(407).withCode(code).withTitle('Proxy Authentication Required')
  }

  /**
   * Creates a Request Timeout error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static requestTimeout (message: string, code?: string): HttpError {
    return new this(message).withStatus(408).withCode(code).withTitle('Request Timeout')
  }

  /**
   * Creates a Conflict error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static conflict (message: string, code?: string): HttpError {
    return new this(message).withStatus(409).withCode(code).withTitle('Conflict')
  }

  /**
   * Creates a Unauthorized error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static gone (message: string, code?: string): HttpError {
    return this.resourceGone(message, code)
  }

  /**
   * Creates a Resource Gone error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static resourceGone (message: string, code?: string): HttpError {
    return new this(message).withStatus(410).withCode(code).withTitle('Gone')
  }

  /**
   * Creates a Length Required error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static lengthRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(411).withCode(code).withTitle('Length Required')
  }

  /**
   * Creates a Precondition Failed error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static preconditionFailed (message: string, code?: string): HttpError {
    return new this(message).withStatus(412).withCode(code).withTitle('Precondition Failed')
  }

  /**
   * Creates a Payload Too Large error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static payloadTooLarge (message: string, code?: string): HttpError {
    return new this(message).withStatus(413).withCode(code).withTitle('Payload Too Large')
  }

  /**
   * Creates a Request-URI Too Long error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static uriTooLong (message: string, code?: string): HttpError {
    return new this(message).withStatus(414).withCode(code).withTitle('Request-URI Too Long')
  }

  /**
   * Creates a Unsupported Media Type error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static unsupportedMediaType (message: string, code?: string): HttpError {
    return new this(message).withStatus(415).withCode(code).withTitle('Unsupported Media Type')
  }

  /**
   * Creates a Requested Range Not Satisfiable error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static rangeNotSatisfiable (message: string, code?: string): HttpError {
    return new this(message).withStatus(416).withCode(code).withTitle('Requested Range Not Satisfiable')
  }

  /**
   * Creates a Expectation Failed error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static expectationFailed (message: string, code?: string): HttpError {
    return new this(message).withStatus(417).withCode(code).withTitle('Expectation Failed')
  }

  /**
   * Creates an I’m a teapot error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static teapot (message: string, code?: string): HttpError {
    return new this(message).withStatus(418).withCode(code).withTitle('I\'m a teapot')
  }

  /**
   * Creates a Misdirected Request error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static misdirectedRequest (message: string, code?: string): HttpError {
    return new this(message).withStatus(421).withCode(code).withTitle('Misdirected Request')
  }

  /**
   * Creates a Unprocessable Entity error. This is an alias for the `unprocessableEntity` method.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static badData (message: string, code?: string): HttpError {
    return this.unprocessableEntity(message, code)
  }

  /**
   * Creates a Unprocessable Entity error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static unprocessableEntity (message: string, code?: string): HttpError {
    return new this(message).withStatus(422).withCode(code).withTitle('Unprocessable Entity')
  }

  /**
   * Creates a Locked error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static locked (message: string, code?: string): HttpError {
    return new this(message).withStatus(423).withCode(code).withTitle('Locked')
  }

  /**
   * Creates a Failed Dependency error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static failedDependency (message: string, code?: string): HttpError {
    return new this(message).withStatus(424).withCode(code).withTitle('Failed Dependency')
  }

  /**
   * Creates a Too Early error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static tooEarly (message: string, code?: string): HttpError {
    return new this(message).withStatus(425).withCode(code).withTitle('Too Early')
  }

  /**
   * Creates an Upgrade Required error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static upgradeRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(426).withCode(code).withTitle('Upgrade Required')
  }

  /**
   * Creates a Precondition Required error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static preconditionRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(428).withCode(code).withTitle('Precondition Required')
  }

  /**
   * Creates a Too Many Requests error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static tooManyRequests (message: string, code?: string): HttpError {
    return new this(message).withStatus(429).withCode(code).withTitle('Too Many Requests')
  }

  /**
   * Creates a Request Header Fields Too Large error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static headerFieldsTooLarge (message: string, code?: string): HttpError {
    return new this(message).withStatus(431).withCode(code).withTitle('Request Header Fields Too Large')
  }

  /**
   * Creates an Unavailable For Legal Reasons error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static illegal (message: string, code?: string): HttpError {
    return new this(message).withStatus(451).withCode(code).withTitle('Unavailable For Legal Reasons')
  }

  /**
   * Creates an Internal Server Error error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static internal (message: string, code?: string): HttpError {
    return new this(message).withStatus(500).withCode(code).withTitle('Internal Server Error')
  }

  /**
   * Creates a Not Implemented error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static notImplemented (message: string, code?: string): HttpError {
    return new this(message).withStatus(501).withCode(code).withTitle('Not Implemented')
  }

  /**
   * Creates a Bad Gateway error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static badGateway (message: string, code?: string): HttpError {
    return new this(message).withStatus(502).withCode(code).withTitle('Bad Gateway')
  }

  /**
   * Creates a Service Unavailable error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static serviceUnavailable (message: string, code?: string): HttpError {
    return new this(message).withStatus(503).withCode(code).withTitle('Service Unavailable')
  }

  /**
   * Creates a Gateway Timeout error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static gatewayTimeout (message: string, code?: string): HttpError {
    return new this(message).withStatus(504).withCode(code).withTitle('Gateway Timeout')
  }

  /**
   * Creates a HTTP Version Not Supported error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static httpVersionNotSupported (message: string, code?: string): HttpError {
    return new this(message).withStatus(505).withCode(code).withTitle('HTTP Version Not Supported')
  }

  /**
   * Creates a Variant Also Negotiates error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static variantNegotiates (message: string, code?: string): HttpError {
    return new this(message).withStatus(506).withCode(code).withTitle('Variant Also Negotiates')
  }

  /**
   * Creates an Insufficient Storage error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static insufficientStorage (message: string, code?: string): HttpError {
    return new this(message).withStatus(507).withCode(code).withTitle('Insufficient Storage')
  }

  /**
   * Creates a Loop Detected error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static loopDetected (message: string, code?: string): HttpError {
    return new this(message).withStatus(508).withCode(code).withTitle('Loop Detected')
  }

  /**
   * Creates a Not Extended error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static notExtended (message: string, code?: string): HttpError {
    return new this(message).withStatus(509).withCode(code).withTitle('Not Extended')
  }

  /**
   * Creates a Network Authentication Required error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static networkAuthenticationRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(510).withCode(code).withTitle('Network Authentication Required')
  }
}
