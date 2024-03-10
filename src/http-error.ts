
import { HttpError as BaseHttpError } from '@supercharge/errors'

export class HttpError extends BaseHttpError {
  /**
   * Determine whether the given `error` is an `HttpError` instance.
   */
  static isHttpError (error: Error): error is HttpError {
    return error instanceof HttpError
  }

  /**
   * Creates a Bad Request error.
   */
  static badRequest (message: string, code?: string): HttpError {
    return new this(message).withStatus(400).withCode(code).withTitle('Bad Request') as any
  }

  /**
   * Creates an Unauthorized error.
   */
  static unauthorized (message: string, code?: string): HttpError {
    return new this(message).withStatus(401).withCode(code).withTitle('Unauthorized')
  }

  /**
   * Creates a Payment Required error.
   */
  static paymentRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(402).withCode(code).withTitle('Payment Required')
  }

  /**
   * Creates a Forbidden error.
   */
  static forbidden (message: string, code?: string): HttpError {
    return new this(message).withStatus(403).withCode(code).withTitle('Forbidden')
  }

  /**
   * Creates a Not Found error.
   */
  static notFound (message: string, code?: string): HttpError {
    return new this(message).withStatus(404).withCode(code).withTitle('Not Found')
  }

  /**
   * Creates a Method Not Allowed error.
   */
  static methodNotAllowed (message: string, code?: string): HttpError {
    return new this(message).withStatus(405).withCode(code).withTitle('Method Not Allowed')
  }

  /**
   * Creates a Not Acceptable error.
   */
  static notAcceptable (message: string, code?: string): HttpError {
    return new this(message).withStatus(406).withCode(code).withTitle('Not Acceptable')
  }

  /**
   * Creates a Proxy Authentication Required error.
   */
  static proxyAuthRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(407).withCode(code).withTitle('Proxy Authentication Required')
  }

  /**
   * Creates a Request Timeout error.
   */
  static requestTimeout (message: string, code?: string): HttpError {
    return new this(message).withStatus(408).withCode(code).withTitle('Request Timeout')
  }

  /**
   * Creates a Conflict error.
   */
  static conflict (message: string, code?: string): HttpError {
    return new this(message).withStatus(409).withCode(code).withTitle('Conflict')
  }

  /**
   * Creates a Unauthorized error.
   */
  static gone (message: string, code?: string): HttpError {
    return this.resourceGone(message, code)
  }

  /**
   * Creates a Resource Gone error.
   */
  static resourceGone (message: string, code?: string): HttpError {
    return new this(message).withStatus(410).withCode(code).withTitle('Gone')
  }

  /**
   * Creates a Length Required error.
   */
  static lengthRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(411).withCode(code).withTitle('Length Required')
  }

  /**
   * Creates a Precondition Failed error.
   */
  static preconditionFailed (message: string, code?: string): HttpError {
    return new this(message).withStatus(412).withCode(code).withTitle('Precondition Failed')
  }

  /**
   * Creates a Payload Too Large error.
   */
  static payloadTooLarge (message: string, code?: string): HttpError {
    return new this(message).withStatus(413).withCode(code).withTitle('Payload Too Large')
  }

  /**
   * Creates a Request-URI Too Long error.
   */
  static uriTooLong (message: string, code?: string): HttpError {
    return new this(message).withStatus(414).withCode(code).withTitle('Request-URI Too Long')
  }

  /**
   * Creates a Unsupported Media Type error.
   */
  static unsupportedMediaType (message: string, code?: string): HttpError {
    return new this(message).withStatus(415).withCode(code).withTitle('Unsupported Media Type')
  }

  /**
   * Creates a Requested Range Not Satisfiable error.
   */
  static rangeNotSatisfiable (message: string, code?: string): HttpError {
    return new this(message).withStatus(416).withCode(code).withTitle('Requested Range Not Satisfiable')
  }

  /**
   * Creates a Expectation Failed error.
   */
  static expectationFailed (message: string, code?: string): HttpError {
    return new this(message).withStatus(417).withCode(code).withTitle('Expectation Failed')
  }

  /**
   * Creates an I’m a teapot error.
   */
  static teapot (message: string, code?: string): HttpError {
    return new this(message).withStatus(418).withCode(code).withTitle('I\'m a teapot')
  }

  /**
   * Creates a Misdirected Request error.
   */
  static misdirectedRequest (message: string, code?: string): HttpError {
    return new this(message).withStatus(421).withCode(code).withTitle('Misdirected Request')
  }

  /**
   * Creates a Unprocessable Entity error. This is an alias for the `unprocessableEntity` method.
   */
  static badData (message: string, code?: string): HttpError {
    return this.unprocessableEntity(message, code)
  }

  /**
   * Creates a Unprocessable Entity error.
   */
  static unprocessableEntity (message: string, code?: string): HttpError {
    return new this(message).withStatus(422).withCode(code).withTitle('Unprocessable Entity')
  }

  /**
   * Creates a Locked error.
   */
  static locked (message: string, code?: string): HttpError {
    return new this(message).withStatus(423).withCode(code).withTitle('Locked')
  }

  /**
   * Creates a Failed Dependency error.
   */
  static failedDependency (message: string, code?: string): HttpError {
    return new this(message).withStatus(424).withCode(code).withTitle('Failed Dependency')
  }

  /**
   * Creates a Too Early error.
   */
  static tooEarly (message: string, code?: string): HttpError {
    return new this(message).withStatus(425).withCode(code).withTitle('Too Early')
  }

  /**
   * Creates an Upgrade Required error.
   */
  static upgradeRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(426).withCode(code).withTitle('Upgrade Required')
  }

  /**
   * Creates a Precondition Required error.
   */
  static preconditionRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(428).withCode(code).withTitle('Precondition Required')
  }

  /**
   * Creates a Too Many Requests error.
   */
  static tooManyRequests (message: string, code?: string): HttpError {
    return new this(message).withStatus(429).withCode(code).withTitle('Too Many Requests')
  }

  /**
   * Creates a Request Header Fields Too Large error.
   */
  static headerFieldsTooLarge (message: string, code?: string): HttpError {
    return new this(message).withStatus(431).withCode(code).withTitle('Request Header Fields Too Large')
  }

  /**
   * Creates an Unavailable For Legal Reasons error.
   */
  static illegal (message: string, code?: string): HttpError {
    return new this(message).withStatus(451).withCode(code).withTitle('Unavailable For Legal Reasons')
  }

  /**
   * Creates an Internal Server Error error.
   */
  static internal (message: string, code?: string): HttpError {
    return new this(message).withStatus(500).withCode(code).withTitle('Internal Server Error')
  }

  /**
   * Creates a Not Implemented error.
   */
  static notImplemented (message: string, code?: string): HttpError {
    return new this(message).withStatus(501).withCode(code).withTitle('Not Implemented')
  }

  /**
   * Creates a Bad Gateway error.
   */
  static badGateway (message: string, code?: string): HttpError {
    return new this(message).withStatus(502).withCode(code).withTitle('Bad Gateway')
  }

  /**
   * Creates a Service Unavailable error.
   */
  static serviceUnavailable (message: string, code?: string): HttpError {
    return new this(message).withStatus(503).withCode(code).withTitle('Service Unavailable')
  }

  /**
   * Creates a Gateway Timeout error.
   */
  static gatewayTimeout (message: string, code?: string): HttpError {
    return new this(message).withStatus(504).withCode(code).withTitle('Gateway Timeout')
  }

  /**
   * Creates a HTTP Version Not Supported error.
   */
  static httpVersionNotSupported (message: string, code?: string): HttpError {
    return new this(message).withStatus(505).withCode(code).withTitle('HTTP Version Not Supported')
  }

  /**
   * Creates a Variant Also Negotiates error.
   */
  static variantNegotiates (message: string, code?: string): HttpError {
    return new this(message).withStatus(506).withCode(code).withTitle('Variant Also Negotiates')
  }

  /**
   * Creates an Insufficient Storage error.
   */
  static insufficientStorage (message: string, code?: string): HttpError {
    return new this(message).withStatus(507).withCode(code).withTitle('Insufficient Storage')
  }

  /**
   * Creates a Loop Detected error.
   */
  static loopDetected (message: string, code?: string): HttpError {
    return new this(message).withStatus(508).withCode(code).withTitle('Loop Detected')
  }

  /**
   * Creates a Not Extended error.
   */
  static notExtended (message: string, code?: string): HttpError {
    return new this(message).withStatus(509).withCode(code).withTitle('Not Extended')
  }

  /**
   * Creates a Network Authentication Required error.
   */
  static networkAuthenticationRequired (message: string, code?: string): HttpError {
    return new this(message).withStatus(510).withCode(code).withTitle('Network Authentication Required')
  }
}
