// context/AuthContext.jsx
import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children, user }) {
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
