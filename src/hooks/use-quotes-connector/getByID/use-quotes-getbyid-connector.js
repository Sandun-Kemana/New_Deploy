import React from 'react';
import { useQuery } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import GetQuotesByID from '../getByID/quotes-get-by-id.ctp.graphql';

// export const useCompanies = () => {
//   const { data, error, loading } = useQuery(GetCompanyByID, {
//     context: {
//       target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
//     },
//   });

//   console.log(data);

//   return {
//     data: data?.customObjects,
//     error,
//     loading,
//   };
// };

export const useQuotesByID = (quoteId) => {
  console.log(quoteId);
  const { data, error, loading } = useQuery(GetQuotesByID, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
    variables: {
      key: quoteId,
    },
  });

  console.log(data);

  return {
    data: data?.customObject,
    error,
    loading,
  };
};
