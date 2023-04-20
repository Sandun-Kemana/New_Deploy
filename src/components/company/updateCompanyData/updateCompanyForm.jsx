import React, { useState, useEffect } from 'react';
import {
  useShowNotification,
  useShowApiErrorNotification,
} from '@commercetools-frontend/actions-global';
import { DOMAINS } from '@commercetools-frontend/constants';
import Spacings from '@commercetools-uikit/spacings';
import TextField from '@commercetools-uikit/text-field';
import { useCompanyUpdate } from '../../../hooks/use-companies-connector/updateData/use-updateCompany-connector';
import { transformErrors } from '../transform-errors';
import PrimaryButton from '@commercetools-uikit/primary-button';
import { useCompaniesByID } from '../../../hooks/use-companies-connector/getByID/use-company-getbyid-connector';

import { useParams } from 'react-router-dom';

const UpdateCompanyForm = (event, id) => {
  const params = useParams();

  const { data, loading, error } = useCompaniesByID(params?.id);
  const { updateCompany } = useCompanyUpdate();

  const [inputName, setInputName] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const showApiErrorNotification = useShowApiErrorNotification();
  const showNotification = useShowNotification();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputName);
    console.log(inputAddress);

    showNotification({
      kind: 'success',
      domain: DOMAINS.SIDE,
      text: 'Company is successfully updated',
    });

    setInputName("");
    setInputAddress("");

    console.log(data?.key);
    const response = updateCompany(data?.key, {
      name: inputName,
      address: inputAddress,
    });
    console.log(response);
  };

  useEffect(() => {
    setInputName(data?.value?.name);
    setInputAddress(data?.value?.address);
  }, [data]);

  return (
    <>
      <div>
        <h1>Update the Company</h1>
        <br/>
        <form>
          <input
            type="text"
            name="Name"
            value={inputName}
            onChange={(e) => setInputName(e?.target?.value)}
          />
          <input
            type="text"
            name="Address"
            value={inputAddress}
            onChange={(e) => setInputAddress(e?.target?.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateCompanyForm;
