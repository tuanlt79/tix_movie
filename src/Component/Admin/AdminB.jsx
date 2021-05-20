import React, { useEffect, useState } from "react";
import bg2 from "../../Assets/img/bg2.jpg";
import logo from "../../Assets/img/web-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function AdminB() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "closeLoading" });
  }, []);
  const [uploadPic, setUploadPic] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP06",
    ngayKhoiChieu: "",
    danhGia: 0,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    var form_data = new FormData();
    for (var key in data) {
      if (key === "hinhAnh") {
        form_data.append(key, data[key][0]);
        console.log(data[key]);
      } else {
        form_data.append(key, data[key]);
      }
    }
    console.log(form_data.get("hinhAnh"));
    axios({
      url: "http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <span>Ma Phim</span>
          <input type="text" {...register("maPhim")} className="form-control" />
        </div>
        <div className="form-group">
          <span>Ten Phim</span>
          <input
            type="text"
            {...register("tenPhim")}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <span>Bi Danh</span>
          <input type="text" {...register("biDanh")} className="form-control" />
        </div>
        <div className="form-group">
          <span>Trailer</span>
          <input
            type="text"
            {...register("trailer")}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <span>Hinh Anh</span>
          <input
            type="file"
            {...register("hinhAnh")}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <span>Mo Ta</span>
          <input type="text" {...register("moTa")} className="form-control" />
        </div>
        <div className="form-group">
          <span>Ma Nhom</span>
          <input type="text" {...register("maNhom")} className="form-control" />
        </div>
        <div className="form-group">
          <span>Ngay Khoi Chieu</span>
          <input
            type="text"
            {...register("ngayKhoiChieu")}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <span>Danh Gia</span>
          <input
            type="text"
            {...register("danhGia")}
            className="form-control"
          />
        </div>
        <button type="submit">Them Phim</button>
      </form>
    </section>
  );
}
