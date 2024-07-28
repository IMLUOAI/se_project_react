import React from "react";

const  CurrentUserContext = React.createContext({
    currentUser: null,
    isLoggedIn: false
});

export default CurrentUserContext;