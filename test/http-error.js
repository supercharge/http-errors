'use strict'

const { test } = require('uvu')
const expect = require('expect')
const { HttpError } = require('../dist')

test('isHttpError', () => {
  expect(HttpError.isHttpError(HttpError.badRequest('message'))).toBe(true)

  expect(HttpError.isHttpError(new Error('message'))).toBe(false)
})

test('throw', () => {
  expect(() => {
    throw new HttpError('Failing')
  }).toThrow('Failing')
})

test('badRequest', () => {
  const error = HttpError.badRequest('message')

  expect(error.status).toEqual(400)
  expect(error.code).toEqual(undefined)
  expect(error.title).toEqual('Bad Request')
})

test('unauthorized', () => {
  const error = HttpError.unauthorized('message')
  expect(error.status).toEqual(401)
})

test('paymentRequired', () => {
  const error = HttpError.paymentRequired('message')
  expect(error.status).toEqual(402)
})

test('forbidden', () => {
  const error = HttpError.forbidden('message')
  expect(error.status).toEqual(403)
})

test('notFound', () => {
  const error = HttpError.notFound('message')
  expect(error.status).toEqual(404)
})

test('methodNotAllowed', () => {
  const error = HttpError.methodNotAllowed('message')
  expect(error.status).toEqual(405)
})

test('notAcceptable', () => {
  const error = HttpError.notAcceptable('message')
  expect(error.status).toEqual(406)
})

test('proxyAuthRequired', () => {
  const error = HttpError.proxyAuthRequired('message')
  expect(error.status).toEqual(407)
})

test('requestTimeout', () => {
  const error = HttpError.requestTimeout('message')
  expect(error.status).toEqual(408)
})

test('conflict', () => {
  const error = HttpError.conflict('message')
  expect(error.status).toEqual(409)
})

test('gone', () => {
  const error = HttpError.gone('message')
  expect(error.status).toEqual(410)
})

test('resourceGone', () => {
  const error = HttpError.resourceGone('message')
  expect(error.status).toEqual(410)
})

test('lengthRequired', () => {
  const error = HttpError.lengthRequired('message')
  expect(error.status).toEqual(411)
})

test('preconditionFailed', () => {
  const error = HttpError.preconditionFailed('message')
  expect(error.status).toEqual(412)
})

test('payloadTooLarge', () => {
  const error = HttpError.payloadTooLarge('message')
  expect(error.status).toEqual(413)
})

test('uriTooLong', () => {
  const error = HttpError.uriTooLong('message')
  expect(error.status).toEqual(414)
})

test('unsupportedMediaType', () => {
  const error = HttpError.unsupportedMediaType('message')
  expect(error.status).toEqual(415)
})

test('rangeNotSatisfiable', () => {
  const error = HttpError.rangeNotSatisfiable('message')
  expect(error.status).toEqual(416)
})

test('expectationFailed', () => {
  const error = HttpError.expectationFailed('message')
  expect(error.status).toEqual(417)
})

test('teapot', () => {
  const error = HttpError.teapot('message')
  expect(error.status).toEqual(418)
})

test('misdirectedRequest', () => {
  const error = HttpError.misdirectedRequest('message')
  expect(error.status).toEqual(421)
})

test('badData', () => {
  const error = HttpError.badData('message')
  expect(error.status).toEqual(422)
})

test('unprocessableEntity', () => {
  const error = HttpError.unprocessableEntity('message')
  expect(error.status).toEqual(422)
})

test('locked', () => {
  const error = HttpError.locked('message')
  expect(error.status).toEqual(423)
})

test('failedDependency', () => {
  const error = HttpError.failedDependency('message')
  expect(error.status).toEqual(424)
})

test('tooEarly', () => {
  const error = HttpError.tooEarly('message')
  expect(error.status).toEqual(425)
})

test('upgradeRequired', () => {
  const error = HttpError.upgradeRequired('message')
  expect(error.status).toEqual(426)
})

test('preconditionRequired', () => {
  const error = HttpError.preconditionRequired('message')
  expect(error.status).toEqual(428)
})

test('tooManyRequests', () => {
  const error = HttpError.tooManyRequests('message')
  expect(error.status).toEqual(429)
})

test('headerFieldsTooLarge', () => {
  const error = HttpError.headerFieldsTooLarge('message')
  expect(error.status).toEqual(431)
})

test('illegal', () => {
  const error = HttpError.illegal('message')
  expect(error.status).toEqual(451)
})

test('internal', () => {
  const error = HttpError.internal('message')
  expect(error.status).toEqual(500)
})

test('notImplemented', () => {
  const error = HttpError.notImplemented('message')
  expect(error.status).toEqual(501)
})

test('badGateway', () => {
  const error = HttpError.badGateway('message')
  expect(error.status).toEqual(502)
})

test('serviceUnavailable', () => {
  const error = HttpError.serviceUnavailable('message')
  expect(error.status).toEqual(503)
})

test('gatewayTimeout', () => {
  const error = HttpError.gatewayTimeout('message')
  expect(error.status).toEqual(504)
})

test('httpVersionNotSupported', () => {
  const error = HttpError.httpVersionNotSupported('message')
  expect(error.status).toEqual(505)
})

test('variantNegotiates', () => {
  const error = HttpError.variantNegotiates('message')
  expect(error.status).toEqual(506)
})

test('insufficientStorage', () => {
  const error = HttpError.insufficientStorage('message')
  expect(error.status).toEqual(507)
})

test('loopDetected', () => {
  const error = HttpError.loopDetected('message')
  expect(error.status).toEqual(508)
})

test('notExtended', () => {
  const error = HttpError.notExtended('message')
  expect(error.status).toEqual(509)
})

test('networkAuthenticationRequired', () => {
  const error = HttpError.networkAuthenticationRequired('message')
  expect(error.status).toEqual(510)
})

test.run()
