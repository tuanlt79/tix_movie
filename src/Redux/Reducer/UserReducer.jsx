import { taiKhoan } from "../../configs/setting";
let taiKhoanNguoiDung = "";
if (localStorage.getItem(taiKhoan)) {
  //kiểm tra tài khoản có trong localStorage không
  let tkNguoiDungStore = localStorage.getItem(taiKhoan);
  taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
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

    case "DANG_KY": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
