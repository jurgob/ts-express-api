import apiTestClient, { Request } from './apiTestClient';

type ApiResponseExpect = {
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
};

type APITestEntry = {
  request: Request;
  expected: ApiResponseExpect;
};

const testEntires: [APITestEntry] = [
  {
    request: { method: 'get', url: '/ping' },
    expected: {
      status: 200,
      body: { up: true }
    }
  }
];

describe(`API requests e2e`, () => {
  testEntires.forEach(({ request, expected }) => {
    const methodUpper: string = `${request.method}`.toUpperCase();
    describe(`${methodUpper} ${request.url} return ${expected.status}`, () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let httpRes: any;
      beforeAll(async () => {
        httpRes = await apiTestClient(request);
        return httpRes;
      });
      test(`status code is  ${expected.status}`, async () => {
        expect(httpRes.status).toBe(expected.status);
      });
      if (expected.body) {
        test(`body match expectation`, async () => {
          expect(httpRes.body).toMatchObject(expected.body);
        });
      }
    });
  });
});
