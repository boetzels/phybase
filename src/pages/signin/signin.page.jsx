import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// graphql
import { useMutation, gql } from "@apollo/client";

import { FormInput, useFormInput } from '../../components/form_input/form_input.comp';
import CustomButton from '../../components/custom_button/custom_button.comp';
import { setToken } from '../../utils/session.utils';
//import { isPropertySignature } from 'typescript';

const SIGNIN_MUTATION = gql`
    mutation SignInMutation(
            $email: String!
            $password: String!
        ) {
        signin(email: $email, password: $password) {
            jwt
        }
    }
`;

function SignIn(props) {
    // setting states and form inputs
    const email = useFormInput('');
    const password = useFormInput('');

    const navigate = useNavigate();

    const [signIn, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
        onCompleted : (data) => {
            setToken(data.jwt);
            navigate('/dash');
        }
    });

    // handles form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        signIn({variables: {
            email: email.value,
            password: password.value,
        },});

        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;
    };

    return (
        <div className='modal-dialog' role='document'>

            <div className='modal-content rounded-6 shadow sign-in'>
                <form onSubmit={ handleSubmit }>
                    <div className='modal-header border-bottom-0'>
                        <h2>Sign In</h2>
                    </div>
                    <div className='modal-body py-0'>
                        
                        <FormInput name='email' type='email' value={ '' } {...email} required label='email' />

                        <FormInput name='password' type='password' value={ '' } {...password} required label='password' />

                    </div>
                    <div className='modal-footer flex-column border-top-0'>
                        <CustomButton type='submit' disabled={loading}>{loading ? 'Loading...': 'Sign In'}</CustomButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;