import { taiKhoan } from "../../configs/setting";
let taiKhoanNguoiDung = "";
let emailUser = "";
let hoTenUser = "";
let soDt = "";

if (localStorage.getItem(taiKhoan)) {
  //kiểm tra tài khoản có trong localStorage không
  let tkNguoiDungStore = localStorage.getItem(taiKhoan);

  // taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
  // emailUser = JSON.parse(tkNguoiDungStore).email;

  let { taiKhoan, email } = JSON.parse(tkNguoiDungStore);
}
const stateDefault = {
  taiKhoan: taiKhoanNguoiDung,
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
    // case "PROFILE_USER": {
    //   state.email = action.email;
    //   return { ...state };
    // }
    case "EDIT_USER": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
