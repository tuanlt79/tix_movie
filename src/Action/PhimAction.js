import axios from "axios";
import { domain, maNhom } from "../configs/setting";
import { history } from "../App";

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
export const addFilm = (value, hinhAnh) => {
  return async (dispatch) => {
    dispatch({ type: "openLoading" });
    setTimeout(async () => {
      var form_data = new FormData();
      form_data.append("file", hinhAnh);
      try {
        let promise = await axios({
          url: "http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
          method: "POST",
          data: form_data,
        });
        promise.then((res) => {});
        promise.catch((err) => {
          console.log(err.response?.data);
        });
        alert("Thêm Khóa Học Thành Công");
        history.push("/");
        window.location.reload();
      } catch (errors) {
        console.log(errors);
      }
      dispatch({
        type: "closeLoading",
      });
    }, 700);
  };
};
