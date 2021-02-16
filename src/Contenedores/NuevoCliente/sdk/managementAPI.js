import * as contentfulManagement from 'contentful-management';

import {
  ACCESS_TOKEN_MANAGEMENT,
  CONTENT_TYPE,
  ENVIRONMENT,
  SPACE_ID,
} from './utils';

const clientManagement = contentfulManagement.createClient({
  accessToken: ACCESS_TOKEN_MANAGEMENT,
});

export function createEntry(payload) {
  return clientManagement
    .getSpace(SPACE_ID)
    .then((space) => space.getEnvironment(ENVIRONMENT))
    .then((environment) =>
      environment.createEntry(CONTENT_TYPE, bodyTransformer(payload))
    )
    .then((entry) => entry.publish())
    .catch((err) => {
      console.error(err);
    });
}

function bodyTransformer(payload) {
  const entries = Object.entries(payload);
  let fields = {};
  entries.forEach(([key, value]) => {
    fields[key] = {
      'en-US': value,
    };
  });
  return { fields };
}
