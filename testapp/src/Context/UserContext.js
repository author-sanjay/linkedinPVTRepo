import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userObject, setUserObject] = useState({});
  const setUser = (user) => {
    setUserObject(user);
  };

  useEffect(() => {
    console.log(userObject, "inside use Effect");
  }, [userObject]);
  const logoutUser = (user) => {
    setUserObject(null);
  };
  return (
    <UserContext.Provider value={{ setUser, logoutUser, userObject }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return user;
};
export { UserProvider, useUser };
