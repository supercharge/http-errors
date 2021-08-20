'use strict'

const { test } = require('tap')
const { HttpError } = require('../dist')

test('HttpError', async () => {
  test('throw', async t => {
    await t.throws(() => {
      throw HttpError('Failing')
    }, 'Failing')
  })

  test('badRequest', async t => {
    const error = HttpError.badRequest('message')

    t.equal(error.status, 400)
    t.equal(error.code, undefined)
    t.equal(error.title, 'Bad Request')
  })

  test('unauthorized', async t => {
    const error = HttpError.unauthorized('message')
    t.equal(error.status, 401)
  })

  test('paymentRequired', async t => {
    const error = HttpError.paymentRequired('message')
    t.equal(error.status, 402)
  })

  test('forbidden', async t => {
    const error = HttpError.forbidden('message')
    t.equal(error.status, 403)
  })

  test('notFound', async t => {
    const error = HttpError.notFound('message')
    t.equal(error.status, 404)
  })

  test('methodNotAllowed', async t => {
    const error = HttpError.methodNotAllowed('message')
    t.equal(error.status, 405)
  })

  test('notAcceptable', async t => {
    const error = HttpError.notAcceptable('message')
    t.equal(error.status, 406)
  })

  test('proxyAuthRequired', async t => {
    const error = HttpError.proxyAuthRequired('message')
    t.equal(error.status, 407)
  })

  test('requestTimeout', async t => {
    const error = HttpError.requestTimeout('message')
    t.equal(error.status, 408)
  })

  test('conflict', async t => {
    const error = HttpError.conflict('message')
    t.equal(error.status, 409)
  })

  test('gone', async t => {
    const error = HttpError.gone('message')
    t.equal(error.status, 410)
  })

  test('resourceGone', async t => {
    const error = HttpError.resourceGone('message')
    t.equal(error.status, 410)
  })

  test('lengthRequired', async t => {
    const error = HttpError.lengthRequired('message')
    t.equal(error.status, 411)
  })

  test('preconditionFailed', async t => {
    const error = HttpError.preconditionFailed('message')
    t.equal(error.status, 412)
  })

  test('payloadTooLarge', async t => {
    const error = HttpError.payloadTooLarge('message')
    t.equal(error.status, 413)
  })

  test('uriTooLong', async t => {
    const error = HttpError.uriTooLong('message')
    t.equal(error.status, 414)
  })

  test('unsupportedMediaType', async t => {
    const error = HttpError.unsupportedMediaType('message')
    t.equal(error.status, 415)
  })

  test('rangeNotSatisfiable', async t => {
    const error = HttpError.rangeNotSatisfiable('message')
    t.equal(error.status, 416)
  })

  test('expectationFailed', async t => {
    const error = HttpError.expectationFailed('message')
    t.equal(error.status, 417)
  })

  test('teapot', async t => {
    const error = HttpError.teapot('message')
    t.equal(error.status, 418)
  })

  test('misdirectedRequest', async t => {
    const error = HttpError.misdirectedRequest('message')
    t.equal(error.status, 421)
  })

  test('badData', async t => {
    const error = HttpError.badData('message')
    t.equal(error.status, 422)
  })

  test('unprocessableEntity', async t => {
    const error = HttpError.unprocessableEntity('message')
    t.equal(error.status, 422)
  })

  test('locked', async t => {
    const error = HttpError.locked('message')
    t.equal(error.status, 423)
  })

  test('failedDependency', async t => {
    const error = HttpError.failedDependency('message')
    t.equal(error.status, 424)
  })

  test('tooEarly', async t => {
    const error = HttpError.tooEarly('message')
    t.equal(error.status, 425)
  })

  test('upgradeRequired', async t => {
    const error = HttpError.upgradeRequired('message')
    t.equal(error.status, 426)
  })

  test('preconditionRequired', async t => {
    const error = HttpError.preconditionRequired('message')
    t.equal(error.status, 428)
  })

  test('tooManyRequests', async t => {
    const error = HttpError.tooManyRequests('message')
    t.equal(error.status, 429)
  })

  test('headerFieldsTooLarge', async t => {
    const error = HttpError.headerFieldsTooLarge('message')
    t.equal(error.status, 431)
  })

  test('illegal', async t => {
    const error = HttpError.illegal('message')
    t.equal(error.status, 451)
  })

  test('internal', async t => {
    const error = HttpError.internal('message')
    t.equal(error.status, 500)
  })

  test('notImplemented', async t => {
    const error = HttpError.notImplemented('message')
    t.equal(error.status, 501)
  })

  test('badGateway', async t => {
    const error = HttpError.badGateway('message')
    t.equal(error.status, 502)
  })

  test('serviceUnavailable', async t => {
    const error = HttpError.serviceUnavailable('message')
    t.equal(error.status, 503)
  })

  test('gatewayTimeout', async t => {
    const error = HttpError.gatewayTimeout('message')
    t.equal(error.status, 504)
  })

  test('httpVersionNotSupported', async t => {
    const error = HttpError.httpVersionNotSupported('message')
    t.equal(error.status, 505)
  })

  test('variantNegotiates', async t => {
    const error = HttpError.variantNegotiates('message')
    t.equal(error.status, 506)
  })

  test('insufficientStorage', async t => {
    const error = HttpError.insufficientStorage('message')
    t.equal(error.status, 507)
  })

  test('loopDetected', async t => {
    const error = HttpError.loopDetected('message')
    t.equal(error.status, 508)
  })

  test('notExtended', async t => {
    const error = HttpError.notExtended('message')
    t.equal(error.status, 509)
  })

  test('networkAuthenticationRequired', async t => {
    const error = HttpError.networkAuthenticationRequired('message')
    t.equal(error.status, 510)
  })
})
