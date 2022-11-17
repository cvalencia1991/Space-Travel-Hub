import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://api.spacexdata.com/v3/rockets/', (req, res, ctx) => res(ctx.json({
    id: '1', rocket_name: 'Test Rocket', description: 'Test description', flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
  }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
