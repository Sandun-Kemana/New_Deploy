import { useMutation } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import DeleteCustomObjects from './quotes-delete.ctp.graphql';

export function useQuotesDelete() {
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
// const deleteMutation = useQuery(DELETE_USER, { variables: { id: f1f8cea1-de89-4f85-a60c-6095237adbf9 } });
