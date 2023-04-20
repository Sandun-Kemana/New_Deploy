import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from './product-create.ctp.graphql';

const mockProductInput = {
    name: 'T-shirt',
    description: 'A cool T-shirt',
    category: 'clothing',
    attributes: {
        color: 'blue',
        size: 'M',
    },
};

const NewProductForm = () => {
    // useMutation hook returns a mutate function and an object with data, loading and error
    const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT);

    const handleSubmit = () => {
        // call the mutate function with variables
        createProduct({ variables: { input: mockProductInput } });
        // handle the response or error
        if (data) {
            console.log('New product created:', data.createProduct);
        }
        if (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
    // render your form component here
    // call handleSubmit on submit event
  );
};

export default NewProductForm;