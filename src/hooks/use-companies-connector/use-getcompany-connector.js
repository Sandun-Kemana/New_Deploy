import React from 'react';
import { useQuery } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import GetCustomObjects from './company-get.ctp.graphql';

export const useCompaniesFetcher = () => {
  const { data, error, loading } = useQuery(GetCustomObjects, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    data: data?.customObjects,
    error,
    loading,
  };
};
