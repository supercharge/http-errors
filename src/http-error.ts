'use strict'

import { HttpError as BaseHttpError } from '@supercharge/errors'

export class HttpError extends BaseHttpError {
  /**
   * Creates a Bad Request error.
   *
   * @param {String} message
   * @param {String} code
   *
   * @returns {this}
   */
  static badRequest (message: string, code?: string): HttpError {
    return new this(message, 400, code).withTitle('Bad Request')
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
    return new this(message, 401, code).withTitle('Unauthorized')
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
    return new this(message, 402, code).withTitle('Payment Required')
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
    return new this(message, 403, code).withTitle('Forbidden')
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
    return new this(message, 404, code).withTitle('Not Found')
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
    return new this(message, 405, code).withTitle('Method Not Allowed')
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
    return new this(message, 406, code).withTitle('Not Acceptable')
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
    return new this(message, 407, code).withTitle('Proxy Authentication Required')
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
    return new this(message, 408, code).withTitle('Request Timeout')
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
    return new this(message, 409, code).withTitle('Conflict')
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
    return new this(message, 410, code).withTitle('Gone')
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
    return new this(message, 411, code).withTitle('Length Required')
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
    return new this(message, 412, code).withTitle('Precondition Failed')
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
    return new this(message, 413, code).withTitle('Payload Too Large')
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
    return new this(message, 414, code).withTitle('Request-URI Too Long')
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
    return new this(message, 415, code).withTitle('Unsupported Media Type')
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
    return new this(message, 416, code).withTitle('Requested Range Not Satisfiable')
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
    return new this(message, 417, code).withTitle('Expectation Failed')
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
    return new this(message, 418, code).withTitle('I\'m a teapot')
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
    return new this(message, 421, code).withTitle('Misdirected Request')
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
    return new this(message, 422, code).withTitle('Unprocessable Entity')
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
    return new this(message, 423, code).withTitle('Locked')
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
    return new this(message, 424, code).withTitle('Failed Dependency')
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
    return new this(message, 425, code).withTitle('Too Early')
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
    return new this(message, 426, code).withTitle('Upgrade Required')
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
    return new this(message, 428, code).withTitle('Precondition Required')
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
    return new this(message, 429, code).withTitle('Too Many Requests')
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
    return new this(message, 431, code).withTitle('Request Header Fields Too Large')
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
    return new this(message, 451, code).withTitle('Unavailable For Legal Reasons')
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
    return new this(message, 500, code).withTitle('Internal Server Error')
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
    return new this(message, 501, code).withTitle('Not Implemented')
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
    return new this(message, 502, code).withTitle('Bad Gateway')
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
    return new this(message, 503, code).withTitle('Service Unavailable')
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
    return new this(message, 504, code).withTitle('Gateway Timeout')
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
    return new this(message, 505, code).withTitle('HTTP Version Not Supported')
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
    return new this(message, 506, code).withTitle('Variant Also Negotiates')
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
    return new this(message, 507, code).withTitle('Insufficient Storage')
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
    return new this(message, 508, code).withTitle('Loop Detected')
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
    return new this(message, 509, code).withTitle('Not Extended')
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
    return new this(message, 510, code).withTitle('Network Authentication Required')
  }
}
