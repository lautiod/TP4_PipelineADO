import test from 'node:test'
import assert from 'node:assert/strict'
import http from 'node:http'

/**
 * Test básico "de humo": verifica que el servidor responde 200 en /api/health.
 * Para este test, el servidor debe estar corriendo en otro proceso.
 * (En CI podemos hacer un test de integración levantando el server transientemente.)
 */
test('GET /api/health responde 200', (t, done) => {
  http.get('http://localhost:3001/api/health', res => {
    try {
      assert.equal(res.statusCode, 200)
      done()
    } catch (err) {
      done(err)
    }
  }).on('error', done)
})
