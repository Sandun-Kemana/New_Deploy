import { useState, useEffect, lazy } from 'react';
import FlatButton from '@commercetools-uikit/flat-button';
import messages from './messages';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import {
  useShowNotification,
  useShowApiErrorNotification,
} from '@commercetools-frontend/actions-global';
import { DOMAINS } from '@commercetools-frontend/constants';
import {
  Link as RouterLink,
  Switch,
  useHistory,
  useRouteMatch,
  Link
} from 'react-router-dom';
import { BackIcon } from '@commercetools-uikit/icons';
import { useQuotesFetcher } from '../../hooks/use-quotes-connector/use-getquotes-connector';
import { useQuotesDelete } from '../../hooks/use-quotes-connector/deleteData/use-deleteQuotes-connector';

const Quotes = (props) => {
  const intl = useIntl();
  const { data, loading, error } = useQuotesFetcher();
  const showApiErrorNotification = useShowApiErrorNotification();
  const showNotification = useShowNotification();

  const [quotesList, setQuotesList] = useState([]);
  const {
    deleteCustomObject,
    loading: isDeleting,
    error: deleteError,
    data: deleteData,
  } = useQuotesDelete();

  const handleDelete = (id) => {
    deleteCustomObject(id);
    console.log(deleteError);
    console.log(deleteData);

    showNotification({
      kind: 'success',
      domain: DOMAINS.SIDE,
      text: 'Quote is successfully deleted',
    });

    if (!deleteError) {
      removeQuotes(id);
    }
  };

  const removeQuotes = (id) => {
    setQuotesList((prev) =>
      prev?.filter((quotes) => {
        return quotes?.id !== id;
      })
    );
  };

  useEffect(() => {
    console.log('initial render');
  }, []);

  useEffect(() => {
    console.log('quotes change');
    setQuotesList(data?.results);
  }, [data?.results]);

  return (
    <div>
      <FlatButton
          as={RouterLink}
          to={props.linkToWelcome}
          label={intl.formatMessage(messages.backToWelcome)}
          icon={<BackIcon />}
        />
        <br/>
      <h1>Quotes List{isDeleting ? 'deleting item' : null}</h1>
      <br></br>
      <table className='table'>
        <thead>
            <th scope='col'>Quote ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Actions</th>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>Loading companies</td>
            </tr>
          ) : (
            quotesList?.map((item, key) => (
              <tr key={key}>
                <td>{item?.id}</td>
                <td>{item?.value?.name}</td>
                <td>{item?.value?.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item?.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/custom_project/starter-4436ea/updatequotes/${item?.key}`}
                  >
                    {/* Update this line */}
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
        </table>
  </div>
  );
};
Quotes.propTypes = {
  linkToWelcome: PropTypes.string.isRequired,
};

export default Quotes;