import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
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

            <a className="btnLogin" href="#">
              <img className="imgLogin" alt="" />
              Đăng Nhập
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
