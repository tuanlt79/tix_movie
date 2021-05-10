import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import background2 from "../../Assets/img/bg2.jpg";
import logoLogin from "../../Assets/img/group@2x.png";
export default function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "closeLoading" });
  }, []);

  return (
    <section
      className="signin "
      style={{ backgroundImage: `url(${background2})` }}
    >
      <div className="signin__vertical">
        <div className="container signin__wrapper">
          <NavLink to="/">
            <img src={logoLogin} alt="" />
          </NavLink>
          <div className="signin__message">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>

          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                placeholder="Tài Khoản"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="matKhau"
                placeholder="Mật Khẩu"
              />
            </div>
            <button type="submit">Đăng Nhập</button>
          </form>
        </div>
      </div>
    </section>
  );
}
