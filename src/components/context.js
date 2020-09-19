import React, { createContext, useEffect } from "react";
import * as app from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
export const FireBaseContext = createContext();

const FireBaseContextProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
  };
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  return (
    <FireBaseContext.Provider
      value={{
        firestore,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};

export default FireBaseContextProvider;
