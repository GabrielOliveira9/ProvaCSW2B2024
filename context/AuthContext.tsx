"use client";

import { createContext, useState } from "react";
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    authError: string | null;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authError, setAuthError] = useState<string | null>(null);

    const router = useRouter();

    async function login({ username, password }: SignIdData) {
        if (!username.trim() || !password.trim()) {
            setAuthError("Por favor, insira um nome de usuário e uma senha.");
            return;
        }
    
        if (username === 'admin' && password === 'password') {
            setCookie(null, 'isLoggedIn', 'true', { path: '/' });
    
            router.push('/recipes');
        } else {
            setAuthError("Nome de usuário ou senha incorretos.");
        }
    }
    

    return (
        <AuthContext.Provider value={{ login, authError }} >
            {children}
        </AuthContext.Provider>
    );
};
