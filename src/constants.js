// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

export const entryPointUriPath = 'avengers2';

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);
