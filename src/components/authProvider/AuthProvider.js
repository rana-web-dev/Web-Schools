import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/Firebase';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { createUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;