import React, { useState, useEffect } from 'react';
import {
  useShowNotification,
  useShowApiErrorNotification,
} from '@commercetools-frontend/actions-global';
import { DOMAINS } from '@commercetools-frontend/constants';
import Spacings from '@commercetools-uikit/spacings';
import TextField from '@commercetools-uikit/text-field';
import { useQuotesUpdate } from '../../hooks/use-quotes-connector/updateData/use-updateQuotes-connector';
import { transformErrors } from './transformErrors';
import PrimaryButton from '@commercetools-uikit/primary-button';
import { useQuotesByID } from '../../hooks/use-quotes-connector/getByID/use-quotes-getbyid-connector';

import { useParams } from 'react-router-dom';

const UpdateQuotesForm = (event, id) => {
  const params = useParams();

  const { data, loading, error } = useQuotesByID(params?.id);
  const { updateQuotes } = useQuotesUpdate();

  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const showApiErrorNotification = useShowApiErrorNotification();
  const showNotification = useShowNotification();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputName);
    console.log(inputDescription);

    showNotification({
        kind: 'success',
        domain: DOMAINS.SIDE,
        text: 'Quote is successfully updated',
      });

      setInputName("");
      setInputDescription("");

    console.log(data?.key);
    const response = updateQuotes(data?.key, {
      name: inputName,
      description: inputDescription,
    });
    console.log(response);
  };

  useEffect(() => {
    setInputName(data?.value?.name);
    setInputDescription(data?.value?.description);
  }, [data]);

  return (
    <>
      <div>
        <h1>Update the Quote</h1>
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
            name="Description"
            value={inputDescription}
            onChange={(e) => setInputDescription(e?.target?.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateQuotesForm;
