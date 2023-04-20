import React from 'react';
import { useMutation } from '@apollo/client';
import CREATE_CUSTOM_OBJECT_MUTATION from './company-create.ctp.graphql';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import { extractErrorFromGraphQlResponse, getRandomUid } from '../../helpers';

export const useCompanyCreater = () => {
  const [createCompany, { loading }] = useMutation(
    CREATE_CUSTOM_OBJECT_MUTATION
  );

  const container = 'company';
  const key = `c-${getRandomUid(5)}`;

  const execute = async ({ formData }) => {
    try {
      await createCompany({
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
