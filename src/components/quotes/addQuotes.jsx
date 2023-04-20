import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import FetchQuotesQuery from './fetch-quotes.ctp.graphql';
import FlatButton from '@commercetools-uikit/flat-button';
import {
  Link as RouterLink,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useIntl } from 'react-intl';
import messages from '../channels/messages';
import { BackIcon } from '@commercetools-uikit/icons';
import PropTypes from 'prop-types';

const Quotes = (props) => {
    const { data } = useQuery(FetchQuotesQuery, {
        context: {
          target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
        }
      });
    
      useEffect(() => {
        console.log(data);
      }, [data])

      function App() {
        const handleClick = () =>{
          console.log('Button Clicked');
        }
      }


      
  return (
    <>
    </>
  )
}

export default Quotes;