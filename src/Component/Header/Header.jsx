import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { taiKhoan } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  return (
    <header>
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-white">
          <NavLink className="navbar-brand" to="/"></NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#lichChieu">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cumRap">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ứng Dụng
                </a>
              </li>
            </ul>
            {taiKhoan !== "" ? (
              <span className="btnLogin ">
                <img className="imgLogin" alt="" />
                {taiKhoan}
                <button
                  className="ml-2 btn__Logout"
                  onClick={() => {
                    dispatch({ type: "DANG_XUAT" });
                  }}
                >
                  Đăng Xuất
                </button>
              </span>
            ) : (
              <NavLink className="btnLogin" to="/login">
                <img className="imgLogin" alt="" />
                Đăng Nhập
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
