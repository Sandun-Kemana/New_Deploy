import { useMutation } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import UpdateCompany from '../updateData/company-update.ctp.graphql';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

export const useCompanyUpdate = () => {
  const [updateItem] = useMutation(UpdateCompany, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  const updateCompany = (key, data) => {
    updateItem({
      variables: {
        container: 'company',
        key: key,
        value: JSON.stringify(data),
      },
    });
  };

  return {
    updateCompany,
  };
};
