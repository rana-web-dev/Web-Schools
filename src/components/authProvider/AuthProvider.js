import React, { createContext } from 'react';
import {createUserWithEmailAndPassword} from '../../firebase/Firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword();
    }

    const authInfo = {createUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;