import React from 'react';
import { useQuery } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import GetCompanyByID from '../getByID/company-get-by-id.ctp.graphql';

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

export const useCompaniesByID = (companyId) => {
  console.log(companyId);
  const { data, error, loading } = useQuery(GetCompanyByID, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
    variables: {
      key: companyId,
    },
  });

  console.log(data);

  return {
    data: data?.customObject,
    error,
    loading,
  };
};
