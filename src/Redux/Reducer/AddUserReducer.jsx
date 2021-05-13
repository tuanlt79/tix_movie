const stateDefault = {
  addUser: {
    //         taiKhoan: "",
    //   matKhau: "",
    //   email: "",
    //   soDt: "",
    //   maNhom: "GP02",
    //   maLoaiNguoiDung: "KhachHang",
    //         hoTen: ""
  },
};

export const AddUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_KY": {
      state.addUser = { ...action.addUser };
    }

    default: {
      return { ...state };
    }
  }
};
