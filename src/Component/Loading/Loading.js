import React from "react";

export default function Loading() {
  let renderLoading = () => {
    console.log(this.props.isloading);
    if (this.props.isloading) {
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
              backgroundColor: "rgba(0,0,0,.5)",
            }}
          >
            <span className="display-4 text-white">Loading...</span>
          </div>
        </div>
      );
      return "";
    }
  };
}
