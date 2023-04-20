import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import FetchCompanyQuery from './fetch-company.ctp.graphql';
import FlatButton from '@commercetools-uikit/flat-button';
import {
  Link as RouterLink,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useIntl } from 'react-intl';
import messages from '../../channels/messages';
import { BackIcon } from '@commercetools-uikit/icons';
import PropTypes from 'prop-types';

export const Company = (props) => {
  const { data } = useQuery(FetchCompanyQuery, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  function App() {
    const handleClick = () => {
      console.log('Button Clicked');
    };
  }

  return <></>;
};

export default Company;
