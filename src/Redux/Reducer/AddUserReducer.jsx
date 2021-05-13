const stateDefault = {
  user: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maNhom: "GP02",
    maLoaiNguoiDung: "KhachHang",
  },
};

export const AddUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_KY": {
      state.user = { ...action.user };
    }

    default: {
      return { ...state };
    }
  }
};
