import { store } from "@/store/store";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0} // to avoid the keyboard overlaying the content
      >
        {children}
      </KeyboardAvoidingView>
    </Provider>
  );
}
