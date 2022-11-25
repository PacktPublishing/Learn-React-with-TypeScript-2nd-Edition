import { ViewerData } from './types';

export const GET_VIEWER_QUERY = `
  query {
    viewer {
      name
      avatarUrl
    }
  }
  `;

type GetViewerResponse = {
  data: {
    viewer: ViewerData;
  };
};

export async function getViewer() {
  const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: GET_VIEWER_QUERY,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
    },
  });
  const body = (await response.json()) as unknown;
  assertIsGetViewerResponse(body);
  return body.data;
}

function assertIsGetViewerResponse(response: any): asserts response is GetViewerResponse {
  if (!('data' in response)) {
    throw new Error("response doesn't contain data");
  }
  if (typeof response.data !== 'object') {
    throw new Error('response is not an object');
  }
  if (!('viewer' in response.data)) {
    throw new Error("data doesn't contain viewer");
  }
  if (typeof response.data.viewer !== 'object') {
    throw new Error('viewer is not an object');
  }
  if (!('name' in response.data.viewer)) {
    throw new Error("viewer doesn't contain name");
  }
  if (typeof response.data.viewer.name !== 'string') {
    throw new Error('viewer name is not a string');
  }
  if (!('avatarUrl' in response.data.viewer)) {
    throw new Error("viewer doesn't contain avatarUrl");
  }
  if (typeof response.data.viewer.avatarUrl !== 'string') {
    throw new Error('viewer avatarUrl is not a string');
  }
}
