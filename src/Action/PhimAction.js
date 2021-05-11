import axios from "axios";
import { domain, maNhom } from "../configs/setting";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
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
    }, 700);
  };
};
//API 2
export const thongTinHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyRap/LayThongTinHeThongRap`,
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
        url: `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`,
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
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
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
    }, 700);
  };
};
//API 5
export const layThongTinPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      try {
        let result = await axios({
          url: `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
          method: "GET",
        });
        dispatch({
          type: "LAY_THONG_TIN_PHONG_VE",
          thongTinPhongVe: result.data,
        });
      } catch (errors) {
        console.log(errors);
      }
      dispatch({
        type: "closeLoading",
      });
    }, 700);
  };
};
