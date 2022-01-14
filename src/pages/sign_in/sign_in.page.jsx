import React , { useState } from 'react';

// graphql
import { useMutation, gql } from "@apollo/client";

import { FormInput, useFormInput } from '../../components/form_input/form_input.comp';
import CustomButton from '../../components/custom_button/custom_button.comp';
import { setUserSession } from '../../utils/session.utils';
//import { isPropertySignature } from 'typescript';

const SIGNIN_QUERY = gql`
    mutation SignIn($email: string!, $password: string) {
        signIn(email: $email, password: $password) {
            jwt
        }
    }
`;

function SignIn(props) {
    const email = useFormInput('');
    const password = useFormInput('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
        const [signIn, { data, loading, error }] = useMutation(SIGNIN_QUERY);

        if (error) setError(`Submission error! ${error.message}`);
        /* axios.post(`http://localhost:4000`,{
            email: email.value,
            password: password.value,
        }).then(response => {
            setLoading(false);
            console.log('response', response.data.token, response.data.user);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dash');
        }).catch(error => {
            setLoading(false);
            setError('Something wrong, try again later');
        }); */
        console.log('handleSubmit()');
        /*setEmail('');
        setPassword('');*/
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        props.history.push('/dashboard');
        /*switch (name) {
            case 'email': setEmail(value); break;
            case 'password': setPassword(value); break;
        }*/
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