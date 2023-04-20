import { useMutation } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import UpdateQuotes from '../updateData/quotes-update.ctp.graphql';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

export const useQuotesUpdate = () => {
  const [updateItem] = useMutation(UpdateQuotes, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  const updateQuotes = (key, data) => {
    updateItem({
      variables: {
        container: 'quotes',
        key: key,
        value: JSON.stringify(data),
      },
    });
  };

  return {
    updateQuotes,
  };
};
