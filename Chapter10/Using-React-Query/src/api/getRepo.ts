import { RepoData, SearchCriteria } from './types';

export const GET_REPO = `
  query GetRepo($org: String!, $repo: String!) {
    repository(owner: $org, name: $repo) {
      id
      name
      description
      viewerHasStarred
      stargazers {
        totalCount
      }
    }
  }
`;

type GetRepoResponse = {
  data: RepoData;
};

export async function getRepo(searchCriteria: SearchCriteria) {
  const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query: GET_REPO,
      variables: {
        org: searchCriteria.org,
        repo: searchCriteria.repo,
      },
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
    },
  });
  const body = (await response.json()) as unknown;
  assertIsGetRepoResponse(body);
  return body.data;
}

function assertIsGetRepoResponse(response: any): asserts response is GetRepoResponse {
  if (typeof response !== 'object' || response === null) {
    throw new Error("response isn't an object");
  }
  if (!('data' in response)) {
    throw new Error("response doesn't contain data");
  }
  if (typeof response.data !== 'object') {
    throw new Error('response is not an object');
  }
  if (!('repository' in response.data)) {
    throw new Error("data doesn't contain repository");
  }
  if (typeof response.data.repository !== 'object') {
    throw new Error('repository is not an object');
  }
  if (!('id' in response.data.repository)) {
    throw new Error("repository doesn't contain id");
  }
  if (typeof response.data.repository.id !== 'string') {
    throw new Error('repository id is not a string');
  }
  if (!('name' in response.data.repository)) {
    throw new Error("repository doesn't contain name");
  }
  if (typeof response.data.repository.name !== 'string') {
    throw new Error('repository name is not a string');
  }
  if (!('description' in response.data.repository)) {
    throw new Error("repository doesn't contain description");
  }
  if (typeof response.data.repository.description !== 'string') {
    throw new Error('repository description is not a string');
  }
  if (!('viewerHasStarred' in response.data.repository)) {
    throw new Error("repository doesn't contain viewerHasStarred");
  }
  if (typeof response.data.repository.viewerHasStarred !== 'boolean') {
    throw new Error('repository viewerHasStarred is not a boolean');
  }
  if (!('stargazers' in response.data.repository)) {
    throw new Error("repository doesn't contain stargazers");
  }
  if (typeof response.data.repository.stargazers !== 'object') {
    throw new Error('repository stargazers is not an object');
  }
  if (!('totalCount' in response.data.repository.stargazers)) {
    throw new Error("repository stargazers doesn't contain totalCount");
  }
  if (typeof response.data.repository.stargazers.totalCount !== 'number') {
    throw new Error('repository stargazers totalCount is not a number');
  }
}
