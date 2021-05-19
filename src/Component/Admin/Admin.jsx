import React, { Component } from "react";
import bg2 from "../../Assets/img/bg2.jpg";
import logo from "../../Assets/img/web-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default class Admin extends Component {
  state = {
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP06",
    ngayKhoiChieu: "",
    danhGia: 0,
  };

  handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log(this.state);
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
    }
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
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: "closeLoading",
  //   });
  // }
  render() {
    const dateFormat = "DD/MM/YYYY";
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
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Mã Phim
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập Mã Phim"
                        aria-describedby="basic-addon1"
                        name="maPhim"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Tên Phim
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập Tên Phim"
                        aria-describedby="basic-addon1"
                        name="tenPhim"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Bí Danh Phim
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="nhap-bi-danh-phim"
                        aria-describedby="basic-addon1"
                        name="biDanh"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Ngày Khởi Chiếu
                        </span>
                      </div>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Nhập dd/mm/yyyy"
                        aria-describedby="basic-addon1"
                        name="ngayKhoiChieu"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Trailer Phim
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập Trailer URL"
                        aria-describedby="basic-addon1"
                        name="trailer"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Mô Tả Phim
                        </span>
                      </div>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Nhập Mô Tả Phim"
                        aria-describedby="basic-addon1"
                        name="moTa"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                      />
                    </div>
                    <button type="submit">Thêm Phim</button>
                  </form>
                </div>
                <div
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
