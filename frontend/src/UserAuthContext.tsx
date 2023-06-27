import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Space } from 'antd';
import { message } from 'antd';

export interface User{
    id: number;
    email: string;
    password: string;
    name: string;
    picture : string;
}

interface UserAuthContextData {
    user: User | undefined;
    login: (email: string, password: string, userType: string) => void;
    register: (name: string, email: string, password: string,) => void;
    logout: () => void;
    handleGoogleLogin: (googleUser: User) => void;
   
}

export const UserAuthContext = createContext<UserAuthContextData>({} as UserAuthContextData);

export default function UserAuthProvider({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();

    const [change, setOnChange] = useState<boolean>(false);
    const [user, setUser] = useState<User | undefined>();


    //login user
    const login = (email: string, password: string): void => {
      fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Email or password is incorrect');
          }
          return res.json();
        })
        .then((response) => {
        // console.log(response.user);
// give the user a token
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          sessionStorage.setItem('user', JSON.stringify(response.user));
          sessionStorage.setItem('jwtToken', response.token);
          setOnChange(!change);

          message.success('Login successful');
          setUser(response.user);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          message.error('Email or password is incorrect');
        });
    };
// Update the user state and store the user data after a successful Google login
const handleGoogleLogin = (googleUser: User) => {
  setUser(googleUser);

  // Store the user data in local storage
  localStorage.setItem('user', JSON.stringify(googleUser));
  window.open("http://localhost:3001/api/user/google", "_self");

  // Proceed with any additional logic or navigation after successful login
  // ...
};


    

  // register
    const register = (
        name: string,
        email: string,
        password: string,
        ): void => {
        fetch("http://localhost:3001/api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        })
          .then((res) => res.json())
          .then((response) => {
            setOnChange(!change);
            if (response.message === "User already exists") {
              console.log(response.message);
              message.error(response.message); // Display the error message
            } else if (response.error) {
              console.log(response.error);
              message.error(response.error); // Display the error message
            } else {
              message.success('Account Created Successfully');
              navigate('/login');
            }
          })
          .catch((error) => {
            console.log(error);
            message.error('An error occurred'); // Display a generic error message
          });
      };
      
    const logout = (): void => {
        setOnChange(!change);
        setUser(undefined);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('jwtToken');
        navigate('/login');
    }

    const userAuthContextData: UserAuthContextData = {
        user,
        login,
        register,
        logout,
        handleGoogleLogin,
    }


    return (
        <UserAuthContext.Provider value={userAuthContextData}>
            {children}
        </UserAuthContext.Provider>
    );

}