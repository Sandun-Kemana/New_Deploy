import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Starter 4436ea',
  entryPointUriPath: 'avengers2',
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'custom_project',
    },
    production: {
      applicationId: 'clgp4fmdm0002v801k8odg4vo',
      url: 'https://new-deploy-vert.vercel.app/',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
    {
      uriPath: 'companiesNavi',
      defaultLabel: 'Companies',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
    {
      uriPath: 'quotesNavi',
      defaultLabel: 'Quotes',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
