import React, {useState} from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          setUser(true);
        },
        logout: () => {
          setUser(null);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
