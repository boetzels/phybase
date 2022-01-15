import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './session.utils';
 
// handle the private routes
function PrivateRoute({ component: Component }: { component: React.ComponentType }) {
    return (
        getToken() ? <Component /> : <Navigate to="/signin" />
    )
}
 
export { PrivateRoute };