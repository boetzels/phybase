import React , { useState } from 'react';

import FormInput from '../../components/form_input/form_input.comp';
import CustomButton from '../../components/custom_button/custom_button.comp';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        switch (name) {
            case 'email': setEmail(value); break;
            case 'password': setPassword(value); break;
        }
    };

    return (
        <div className='modal-dialog' role='document'>

            <div className='modal-content rounded-6 shadow sign-in'>
                <form onSubmit={ handleSubmit }>
                    <div className='modal-header border-bottom-0'>
                        <h2>Sign In</h2>
                    </div>
                    <div className='modal-body py-0'>
                        
                        <FormInput name='email' type='email' value={ email } required handleChange={ handleChange } label='email' />

                        <FormInput name='password' type='password' value={ password } required handleChange={ handleChange } label='password' />

                    </div>
                    <div className='modal-footer flex-column border-top-0'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;