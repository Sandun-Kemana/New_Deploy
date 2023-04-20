import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import FetchProductsQuery from './fetch-products.ctp.graphql';
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

const Products = (props) => {

  const productId = '1';
  const intl = useIntl();

  const { data } = useQuery(FetchProductsQuery, {
    variables: {
      productId,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Spacings.Stack scale="l">
      <Spacings.Stack scale="xs">
        <FlatButton
          as={RouterLink}
          to={props.linkToWelcome}
          label={intl.formatMessage(messages.backToWelcome)}
          icon={<BackIcon />}
        />
        <Text.Headline as="h2" intlMessage={messages.title} />
      </Spacings.Stack>

        <Spacings.Stack scale="s">
          <div>Title</div> 
          <div>Description</div>
        </Spacings.Stack>
        
      </Spacings.Stack>
      <div>
        Products list
        {data?.products?.results?.map((product) => {
          return (
            <>
              <h1>key : {product?.key}</h1>
              <h4>descriptionn : {product?.masterData?.current?.description?.en}</h4>
            </>
          );
        })}
      </div>
    </>
  );
};

Products.displayName = 'Products';
Products.propTypes = {
  linkToWelcome: PropTypes.string.isRequired,
}
export default Products;
 