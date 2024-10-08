"use client";

import React from "react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

type StoreWrapperProps = {
  children: React.ReactNode;
};

export const CustomerReduxProvider = (props: StoreWrapperProps) => {
  const { children } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
