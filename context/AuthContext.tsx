import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (email: string, password: string, confirmPassword: string) => Promise<any>;
    onLogin?: (email: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                setAuthState({
                    token,
                    authenticated: true,
                })
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }
            console.log('loaded Token', authState.token, authState.authenticated)
        }
        loadToken()
    }, []);

    const register = async (email: string, password: string, confirmPassword: string) => {
        try {
            return await axios.post('http://localhost:3000/register', {email, password, confirmPassword})
        } catch (e) {
            return {error: true, msg: e.response.data.msg}
        }
    }

    const login = async (email: string, password: string, confirmPassword: string) => {
        try {
            // const result = await axios.post('http://localhost:3000/auth', {email, password, confirmPassword})
            // console.log('login', result.data.token)
            const token = '123'
            setAuthState({
                token: token, // result.data.token,
                authenticated: true,
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            await AsyncStorage.setItem('token', token)

            return token
        } catch (e) {
            return {error: true, msg: e.response.data.msg}
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('token')

        axios.defaults.headers.common['Authorization'] = ''

        setAuthState({
            token: null,
            authenticated: false,
        })
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };

    // @ts-ignore
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
