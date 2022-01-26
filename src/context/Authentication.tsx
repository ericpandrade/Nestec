/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect } from "react";
import usePersistedState from "../utils/persistedState";

interface Props {
  children: React.ReactNode;
}

interface AuthContextType {
  auth: boolean;
  RouteAuthentication: () => void;
  themeState: boolean;
  changeTheme: () => void;
  setAuth: (bool: boolean) => void;
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: Props) {
  const [auth, setAuth] = usePersistedState("@Authentication/auth", false);
  const [themeState, setThemeState] = usePersistedState(
    "@Authentication/theme",
    false
  );

  useEffect(() => {
    if (window) {
      const storageMode =
        window.localStorage.getItem("@ChangeTheme/Theme") === "darkTheme";

      if (storageMode) {
        setThemeState(
          window.localStorage.getItem("@ChangeTheme/Theme") === "darkTheme"
        );
        document.documentElement.className = storageMode ? "darkTheme" : "";
      }
    }
  }, []);

  function changeTheme() {
    const isDark = !themeState;

    document.documentElement.className = isDark ? "darkTheme" : "";

    setThemeState(!themeState);

    localStorage.setItem("@ChangeTheme/Theme", isDark ? "darkTheme" : "");
  }

  function RouteAuthentication() {
    setAuth(!auth);
  }

  return (
    <AuthContext.Provider
      value={{ auth, RouteAuthentication, changeTheme, themeState, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuthContext };
