import React from "react";
import { useDispatch, useSelector } from "react-redux";
import webLogo from "../../Assets/img/web-logo.png";
export default function Loading() {
  const dispatch = useDispatch();
  const isloading = useSelector((state) => state.LoadingReducer.loading);
  let renderLoading = () => {
    if (isloading) {
      return (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <img src={webLogo} width="150px" />
          </div>
        </div>
      );
      return "";
    }
  };
  return <div>{renderLoading()}</div>;
}
