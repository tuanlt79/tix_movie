import { history } from "../../App";
import { taiKhoan } from "../../configs/setting";
let taiKhoanNguoiDung = "";
// let userLocal = "";
if (localStorage.getItem(taiKhoan)) {
  //kiểm tra tài khoản có trong localStorage không
  let tkNguoiDungStore = localStorage.getItem("taiKhoan");
  taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
  // let { taiKhoan, email, hoTen, soDT } = JSON.parse(tkNguoiDungStore);
  // userLocal = { taiKhoan, email, hoTen, soDT };
}
const stateDefault = {
  taiKhoan: taiKhoanNguoiDung,
  thongTinUser: {},
};
export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    case "DANG_XUAT": {
      localStorage.clear();

      return { ...state, taiKhoan: "" };
    }
    case "DANG_KY": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    case "LAY_THONG_TIN_USER": {
      state.thongTinUser = { ...action.thongTinUser };
      return { ...state };
    }
    case "EDIT_USER": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
