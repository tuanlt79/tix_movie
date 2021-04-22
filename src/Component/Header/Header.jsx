import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-white">
          <a className="navbar-brand" href="#"></a>
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
                <a className="nav-link" href="#">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
