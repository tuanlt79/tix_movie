import React, { useEffect, useState } from "react";
import bg2 from "../../Assets/img/bg2.jpg";
import logo from "../../Assets/img/web-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

import { Redirect } from "react-router";
import { addFilm } from "../../Action/PhimAction";
export default function AdminF(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "closeLoading" });
  }, []);
  const { taiKhoan } = useSelector((state) => state.UserReducer);

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

  const userAddtionSchema = Yup.object().shape({
    maPhim: Yup.string().required("Vui Lòng Điền Mã Phim"),
    tenPhim: Yup.string().required("Vui Lòng Điền Tên Phim"),
    biDanh: Yup.string().required("Vui Lòng Nhập Bí Danh"),
    hinhAnh: Yup.string().required("Vui Lòng Cập Nhập Hình Ảnh"),
    trailer: Yup.string().required("Vui Lòng Trailer"),
    ngayKhoiChieu: Yup.string().required("Vui Lòng Chọn Ngày Chiếu"),
    danhGia: Yup.string().required("Vui Lòng Điền Đánh Giá Phim"),
    moTa: Yup.string().required("Vui Lòng Nhập Mô Tả"),
    biDanh: Yup.string().required("Vui Lòng Điền Bí Danh"),
  });
  let userAddition = {
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP02",
    ngayKhoiChieu: "",
    danhGia: 0,
  };

  let tokenLocal = JSON.parse(localStorage.getItem("taiKhoan"));

  const dateFormat = "DD/MM/YYYY";

  if (tokenLocal.maLoaiNguoiDung === "QuanTri") {
    return (
      <section className="admin">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-3 bg__admin "
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <a href="/" className="admin__logo text-center ">
                <img src={logo} alt="" width="15%" className="mt-3" />
              </a>
              <div
                className="nav flex-column nav-pills mt-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Thêm Phim
                </a>
                {/* <a
          className="nav-link"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-profile"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Profile
        </a>
        <a
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-messages"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Messages
        </a>
        <a
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Settings
        </a> */}
              </div>
            </div>
            <div className="col-9 admin__info">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <Formik
                    initialValues={userAddition}
                    validationSchema={userAddtionSchema}
                    onSubmit={(value) => {
                      dispatch(addFilm(value, uploadPic.hinhAnh));
                      // console.log(form_data);
                    }}
                  >
                    {({ errors, touched, values }) => (
                      <Form>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Mã Phim
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập Mã Phim"
                            aria-describedby="basic-addon1"
                            name="maPhim"
                            onChange={(e) => {
                              values.maPhim = e.target.value;
                              console.log(values.maPhim);
                            }}
                          />
                          {errors.maPhim && touched.maPhim ? (
                            <div className="alert alert-danger text-left">
                              {errors.maPhim}
                            </div>
                          ) : null}
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Tên Phim
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập Tên Phim"
                            aria-describedby="basic-addon1"
                            name="tenPhim"
                            onChange={(e) => {
                              values.tenPhim = e.target.value;
                              console.log(values.tenPhim);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Bí Danh Phim
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="nhap-bi-danh-phim"
                            aria-describedby="basic-addon1"
                            name="biDanh"
                            onChange={(e) => {
                              values.biDanh = e.target.value;
                              console.log(values.biDanh);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Ngày Khởi Chiếu
                            </span>
                          </div>
                          <input
                            type="input"
                            className="form-control"
                            placeholder="Nhập dd/mm/yyyy"
                            aria-describedby="basic-addon1"
                            name="ngayKhoiChieu"
                            onChange={(e) => {
                              values.ngayKhoiChieu = e.target.value;
                              console.log(values.ngayKhoiChieu);
                            }}
                            // format={dateFormat}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Đánh Giá</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập đánh giá /10"
                            name="danhGia"
                            onChange={(e) => {
                              values.danhGia = e.target.value;
                              console.log(values.danhGia);
                            }}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <FontAwesomeIcon icon={faStar} />
                            </span>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Trailer Phim
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập Trailer URL"
                            aria-describedby="basic-addon1"
                            name="trailer"
                            onChange={(e) => {
                              values.trailer = e.target.value;
                              console.log(values.trailer);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              Mô Tả Phim
                            </span>
                          </div>
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder="Nhập Mô Tả Phim"
                            aria-describedby="basic-addon1"
                            name="moTa"
                            onChange={(e) => {
                              values.moTa = e.target.value;
                              console.log(values.moTa);
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroupFileAddon01"
                            >
                              Hình Ảnh
                            </span>
                          </div>
                          <input
                            type="file"
                            name="hinhAnh"
                            className="form-control"
                            onChange={(e) => {
                              let target = e.target;

                              if (target.name === "hinhAnh") {
                                setUploadPic(
                                  { hinhAnh: e.target.files[0] },
                                  () => {
                                    console.log(uploadPic);
                                  }
                                );
                              } else {
                                setUploadPic(
                                  { [e.target.name]: e.target.value },
                                  () => {
                                    console.log(uploadPic);
                                  }
                                );
                              }
                              console.log(e.target);
                            }}
                          />
                        </div>
                        <button type="submit">Thêm Phim</button>
                      </Form>
                    )}
                  </Formik>
                </div>
                {/* <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    alert("Bạn Phải Đăng Nhập Admin Mới Có Thể Truy Cập Trang Này");
    return <Redirect to="/login" />;
  }
}
