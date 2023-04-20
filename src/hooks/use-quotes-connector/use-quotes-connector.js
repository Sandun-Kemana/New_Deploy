import React from 'react';
import { useMutation } from '@apollo/client';
import CREATE_CUSTOM_OBJECT_MUTATION from './quotes-create.ctp.graphql';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import { extractErrorFromGraphQlResponse, getRandomUid } from '../../helpers';

export const useQuotesCreater = () => {
  const [createQuotes, { loading }] = useMutation(
    CREATE_CUSTOM_OBJECT_MUTATION
  );

  const container = 'quotes';
  const key = `c-${getRandomUid(5)}`;

  const execute = async ({ formData }) => {
    try {
      await createQuotes({
        context: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
        },
        variables: { container, key, value: formData },
      });
      console.log();
    } catch (graphQlResponse) {
      throw extractErrorFromGraphQlResponse(graphQlResponse);
    }
  };

  return {
    loading,
    execute,
  };
};
