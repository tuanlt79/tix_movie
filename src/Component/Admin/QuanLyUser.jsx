import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getInfoAllUser } from "../../Action/UserAction";
import { accessToken } from "../../configs/setting";

export default function QuanLyUser() {
  const dispatch = useDispatch();
  const thongTinAllUser = useSelector(
    (state) => state.UserReducer.thongTinAllUser
  );
  const { accessToken } = useSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(getInfoAllUser());
  }, []);

  const danhSachUser = () => {
    return thongTinAllUser?.map((item, index) => {
      // console.log(nguoiDung);
      return (
        <tr key={index}>
          <th scope="row">{item.taiKhoan}</th>
          <td>{item.hoTen}</td>
          <td>{item.soDt}</td>
          <td>{item.email}</td>
          <td>{item.matKhau}</td>
          <td>{item.maLoaiNguoiDung}</td>
          <td>
            <button className="btn__edit">Sửa</button>
            <button
              className="btn__del"
              onClick={() => {
                dispatch(deleteUser(item.taiKhoan, accessToken));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  console.log(thongTinAllUser);
  return (
    <Fragment>
      <table className="table table-striped">
        <thead className="thead-dark ">
          <tr>
            <th scope="col">Tài Khoản</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Số Điện Thoại</th>
            <th scope="col">Email</th>
            <th>Mật Khẩu</th>
            <th scope="col">Loại</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{danhSachUser()}</tbody>
      </table>
    </Fragment>
  );
}
