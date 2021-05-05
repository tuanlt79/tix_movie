import axios from "axios";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
          method: "GET",
        });
        dispatch({
          type: "LAY_DANH_SACH_PHIM",
          mangPhim: result.data,
        });
      } catch {}
      dispatch({
        type: "closeLoading",
      });
    }, 400);
  };
};
//API 2
export const thongTinHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
      dispatch({
        type: "LAY_THONG_TIN_RAP",
        cumRap: result.data,
      });
    } catch (errors) {}
  };
};
//API 3
export const layThongTinHeThongCumRapAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02",
        method: "GET",
      });
      dispatch({
        type: "LAY_CHI_TIET_RAP",
        chiTietCumRap: result.data,
      });
    } catch (errors) {}
  };
};
//API 4
export const layChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    dispatch({ type: "openLoadng" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_CHI_TIET_PHIM",
          chiTietPhim: result.data,
        });
      } catch (errors) {
        console.log(errors);
      }
      dispatch({
        type: "closeLoading",
      });
    }, 400);
  };
};
