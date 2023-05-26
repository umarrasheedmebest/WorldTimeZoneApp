import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./AuthProvider";

const App = () => {
  if (!__DEV__) {
    console.log = () => { };
  }
  return (
    // <Provider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    // </Provider>
  );
};

export default App;