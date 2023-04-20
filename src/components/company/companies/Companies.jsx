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
} from 'react-router-dom';
import { BackIcon } from '@commercetools-uikit/icons';

import { useCompaniesFetcher } from '../../../hooks/use-companies-connector/use-getcompany-connector';
import { useCompaniesDelete } from '../../../hooks/use-companies-connector/deleteData/use-deleteCompany-connector';
import { UpdatePage } from '../../../components/company/updateCompanyData/updateCompanyForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Companies = (props) => {
  const intl = useIntl();
  const { data, loading, error } = useCompaniesFetcher();
  const showApiErrorNotification = useShowApiErrorNotification();
  const showNotification = useShowNotification();

  //Codes for Delete Function
  const [companyList, setCompanyList] = useState([]);
  const {
    deleteCustomObject,
    loading: isDeleting,
    error: deleteError,
    data: deleteData,
  } = useCompaniesDelete();

  const handleDelete = (id) => {
    deleteCustomObject(id);
    console.log(deleteError);
    console.log(deleteData);

    showNotification({
      kind: 'success',
      domain: DOMAINS.SIDE,
      text: 'Company is successfully deleted',
    });

    if (!deleteError) {
      removeCompany(id);
    }
  };

  const removeCompany = (id) => {
    setCompanyList((prev) =>
      prev?.filter((company) => {
        return company?.id !== id;
      })
    );
  };

  //this use to reload page
  useEffect(() => {
    console.log('initial render');
  }, []);

  useEffect(() => {
    console.log('company change');
    setCompanyList(data?.results);
  }, [data?.results]);

  //Creating route navigate to update page

  return (
    <div>
      <FlatButton
        as={RouterLink}
        to={props.linkToWelcome}
        label={intl.formatMessage(messages.backToWelcome)}
        icon={<BackIcon />}
      />
      <br />
      <h1>Companies List{isDeleting ? 'deleting item' : null}</h1>
      <br></br>
      <table className="table">
        <thead>
          <th scope="col">Company ID</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>Loading companies</td>
            </tr>
          ) : (
            companyList?.map((item, key) => (
              <tr key={key}>
                <td>{item?.id}</td>
                <td>{item?.value?.name}</td>
                <td>{item?.value?.address}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item?.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/custom_project/starter-4436ea/updatecompany/${item?.key}`}
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
Companies.propTypes = {
  linkToWelcome: PropTypes.string.isRequired,
};

export default Companies;
