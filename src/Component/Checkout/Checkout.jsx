import React, { useEffect } from "react";
import screen from "../../Assets/img/screen.png";
import logouser from "../../Assets/img/avatar.png";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinPhongVeAction } from "../../Action/PhimAction";
import { taiKhoan } from "../../configs/setting";
import { Redirect } from "react-router";
import { datVeAction } from "../../Action/QuanLyDatVeAction";
import { NavLink } from "react-router-dom";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  const { danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhongVeAction(id));
  }, []);
  let renderGhe = () => {
    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      let classGheDD = indexGheDD !== -1 ? "gheDangDat" : "";
      let classDaDat = ghe.daDat ? "gheDaDat" : "";
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";

      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classDaDat} ${classGheVip} ${classGheDD} `}
            disabled={ghe.daDat}
            onClick={() => {
              dispatch({ type: "DAT_GHE", ghe });
            }}
          >
            {ghe.daDat === true ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const renderGheDD = () => {
    return danhSachGheDangDat.map((gheDD, index) => {
      return (
        <Fragment key={index}>
          <span className="mr-1">{gheDD.stt},</span>
        </Fragment>
      );
    });
  };
  let totalGiaVe = () => {
    return danhSachGheDangDat.reduce((tongTien, gheDat, index) => {
      return (tongTien += gheDat.giaVe);
    }, 0);
  };
  if (!localStorage.getItem(taiKhoan)) {
    return <Redirect to="/login" />;
  }
  return (
    <section className="checkout">
      <div className="container-fluid">
        <div className="seat__map">
          <div className="row">
            <div className="col-lg-8">
              <div className="step__checkout">
                <div className="info__step">
                  <div> CH???N GH??? & THANH TO??N</div>
                  <div>
                    <span className="btnLogin">
                      <NavLink to="/profile" className="header__user">
                        <img className="imgLogin" alt="" src={logouser} />
                        {JSON.parse(localStorage.getItem(taiKhoan)).taiKhoan}
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
              <div className="seat__checkout">
                <div className="screen">
                  <img src={screen} alt="" />
                </div>
                <div className="list__seat">{renderGhe()}</div>
                <div className="seat__type ">
                  <div className="container">
                    <div className="row">
                      <span className="col-sm-3 col-md-3 ">
                        <div className="ghe__dadat ">X</div>
                        <p>Gh??? ???? c?? ng?????i ch???n</p>
                      </span>
                      <span className="col-sm-3 col-md-3 ">
                        <div className="ghe__thuong "></div>
                        <p>Gh??? Th?????ng</p>
                      </span>
                      <span className="col-sm-3 col-md-3 ">
                        <div className="ghe__vip "></div>
                        <p>Gh??? Vip</p>
                      </span>
                      <span className="col-sm-3 col-md-3 ">
                        <div className="ghe__dangchon "></div>
                        <p>Gh??? ??ang Ch???n</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right__checkout">
                <div className="total">
                  <p className="cash">{totalGiaVe().toLocaleString()} ??</p>
                </div>
                <div className="checkout__info ">
                  <p>
                    <span>C16</span>
                    {thongTinPhongVe.thongTinPhim?.tenPhim}
                  </p>

                  <div className="content__cinema">
                    <div> ?????a Ch???: {thongTinPhongVe.thongTinPhim?.diaChi}</div>

                    <div>
                      Ng??y: {thongTinPhongVe.thongTinPhim?.ngayChieu} -
                      {thongTinPhongVe.thongTinPhim?.gioChieu} -
                      {thongTinPhongVe.thongTinPhim?.tenRap}
                    </div>
                  </div>
                </div>
                <div className="chair">
                  <p>Gh???: {renderGheDD()}</p>

                  <img
                    src={thongTinPhongVe.thongTinPhim?.hinhAnh}
                    width="100%"
                    height="500"
                    alt=""
                  />
                </div>
                <div
                  className="buy__ticket"
                  onClick={() => {
                    let userLogin = JSON.parse(localStorage.getItem(taiKhoan));
                    let thongTinDatVe = {
                      maLichChieu: props.match.params.id,
                      danhSachVe: danhSachGheDangDat,
                      taiKhoanNguoiDung: userLogin.taiKhoan,
                    };
                    dispatch(datVeAction(thongTinDatVe));
                  }}
                >
                  ?????t v??
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
