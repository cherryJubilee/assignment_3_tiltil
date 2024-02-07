"use client";
import React from "react";
import MyPageForm from "./_components/MyPageForm/MyPageForm";
import { Provider } from "react-redux";
import store from "../../_store/store";

function MyPage() {
  return (
    <Provider store={store}>
      <div>
        <MyPageForm />
      </div>
    </Provider>
  );
}

export default MyPage;
