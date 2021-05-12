import axios from "axios";
import { domain } from "../configs/setting";
import { history } from "../App.js";
export const loginUserAction = (nguoiDung) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: nguoiDung,
      });
      // lấy giá trị api gửi về localstorge
      // console.log(result.data);

      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("taiKhoan", JSON.stringify(result.data));
      //đăng nhập thành công chuyển về trang home
      history.push("/");
      dispatch({
        type: "DANG_NHAP",
        taiKhoan: result.data.taiKhoan,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
