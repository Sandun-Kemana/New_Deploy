import React from 'react';
import { useQuery } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import GetCustomObjects from './quotes-get.ctp.graphql';

export const useQuotesFetcher = () => {
  const { data, error, loading } = useQuery(GetCustomObjects, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
    // variables: { container: 'YOUR_CONTAINER_NAME' },
  });

  // console.log(data);

  return {
    data: data?.customObjects,
    error,
    loading,
  };
};

