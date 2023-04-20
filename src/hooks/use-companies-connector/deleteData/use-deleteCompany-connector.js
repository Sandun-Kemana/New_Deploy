import { useMutation } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import DeleteCustomObjects from './company-delete.ctp.graphql';

export function useCompaniesDelete() {
  const [deleteCustomObjectMutation, { loading, error, data }] =
    useMutation(DeleteCustomObjects);

  const deleteCustomObject = (id) => {
    deleteCustomObjectMutation({
      context: {
        target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
      },
      variables: { id },
    });
  };

  return { deleteCustomObject, loading, error, data };
}
