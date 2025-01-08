import request from 'supertest';
import app from '../index';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

test('GET /greet returns "ping!"', async () => {
  const response = await request(app).get('/ping/');
  assert.is(response.status, 200, 'Response status should be 200');
  assert.is(response.text, "{\"message\":\"ping!\"}");
});

test.run();

