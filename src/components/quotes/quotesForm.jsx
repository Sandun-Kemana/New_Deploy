import React, { useState } from 'react';
import {
    useShowNotification,
    useShowApiErrorNotification,
  } from '@commercetools-frontend/actions-global';
import PrimaryButton from '@commercetools-uikit/primary-button';
import { transformErrors } from './transformErrors';
import Spacings from '@commercetools-uikit/spacings';
import TextField from '@commercetools-uikit/text-field';
import { DOMAINS } from '@commercetools-frontend/constants';
import { useQuotesCreater } from '../../hooks/use-quotes-connector/use-quotes-connector';

const QuotesForm = () => {
    const showApiErrorNotification = useShowApiErrorNotification();
    const quotesCreater = useQuotesCreater();
    const showNotification = useShowNotification();
    const [data, setFormData] = useState({});
  

const handleSubmit = async (event) => {
    // const value = { name: 'My Company0014', address: '000 Main St' };
    event.preventDefault();
    console.log(data);

    try {
      await quotesCreater.execute({
        formData: JSON.stringify(data),
      });

      showNotification({
        kind: 'success',
        domain: DOMAINS.SIDE,
        text: 'Quote is successfully created',
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
    <form onSubmit={handleSubmit}>
    <Spacings.Stack scale="l">
      <TextField
        name="name"
        title="Name"
        isRequired
        onChange={handleChange}
        
      />

    <TextField
        name="description"
        title="Description"
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
  );
}

export default QuotesForm;