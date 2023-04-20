import React, { useState } from 'react';
import {
  useShowNotification,
  useShowApiErrorNotification,
} from '@commercetools-frontend/actions-global';
import { DOMAINS } from '@commercetools-frontend/constants';
import Spacings from '@commercetools-uikit/spacings';
import TextField from '@commercetools-uikit/text-field';
import { useCompanyCreater } from '../../../hooks/use-companies-connector/use-company-connector';
import { transformErrors } from '../transform-errors';
import PrimaryButton from '@commercetools-uikit/primary-button';

const NewCompanyForm = () => {
  const showApiErrorNotification = useShowApiErrorNotification();
  const companyCreater = useCompanyCreater();
  const showNotification = useShowNotification();
  const [data, setFormData] = useState({});

  const handleSubmit = async (event) => {
    // const value = { name: 'My Company0014', address: '000 Main St' };
    event.preventDefault();
    console.log(data);

    try {
      await companyCreater.execute({
        formData: JSON.stringify(data),
      });

      showNotification({
        kind: 'success',
        domain: DOMAINS.SIDE,
        text: 'Company is successfully created',
      });
    } catch (graphQLErrors) {
      const transformedErrors = transformErrors(graphQLErrors);
      if (transformedErrors.unmappedErrors.length > 0) {
        showApiErrorNotification({
          errors: transformedErrors.unmappedErrors,
        });
      }
      console.error(graphQLErrors);
    }
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    // render your form component here
    // call handleSubmit on submit event
    <>
      <form onSubmit={handleSubmit}>
    <Spacings.Stack scale="l">
      <TextField
        name="name"
        title="Name"
        isRequired
        onChange={handleChange}
      />

    <TextField
        name="address"
        title="Address"
        isRequired
        onChange={handleChange}
      />
      
      <PrimaryButton
        type="submit"
        label="Submit"
        onClick={handleSubmit}
      />
      </Spacings.Stack>
    </form>
    </>
  );
};

export default NewCompanyForm;
