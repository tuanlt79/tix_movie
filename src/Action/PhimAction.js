import axios from "axios";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    let result = await axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      method: "GET",
    });
    dispatch({
      type: "LAY_DANH_SACH_PHIM",
      mangPhim: result.data,
    });
  };
};
