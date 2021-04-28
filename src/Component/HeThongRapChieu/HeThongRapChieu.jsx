import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinHeThongCumRapAction } from "../../Action/PhimAction";
import ThongTinRap from "./ThongTinRap";

export default function HeThongRapChieu() {
  const dispatch = useDispatch();
  const chiTietCumRap = useSelector((state) => state.PhimReducer.chiTietCumRap);

  useEffect(() => {
    dispatch(layThongTinHeThongCumRapAction());
  }, []);
  console.log({ chiTietCumRap });

  return (
    <div className="navs">
      <div className="container my-5">
        <div className="row">
          <div className="col-1">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <ThongTinRap />
            </div>
          </div>
          <div className="col-11">
            <div class="tab-content" id="v-pills-tabContent">
              {chiTietCumRap?.map((danhSachRap, index) => {
                let classActive = index === 0 ? "active" : "";
                return (
                  <div
                    key={index}
                    className={`tab-pane fade show ${classActive}`} //active
                    id={`${danhSachRap.maHeThongRap}`}
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="row">
                      <div className="col-4">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {danhSachRap.lstCumRap?.map((thongTinRap, index) => {
                            let classActive = index === 0 ? "active" : "";
                            return (
                              <a
                                key={index}
                                className={`nav-link ${classActive}`}
                                id={`${danhSachRap.maHeThongRap}`}
                                data-toggle="pill"
                                href={`#${thongTinRap.maCumRap}`}
                                role="tab"
                                aria-controls="v-pills-messages"
                                aria-selected="false"
                              >
                                <h5>{thongTinRap.tenCumRap}</h5>
                                <span>{thongTinRap.diaChi}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="tab-content" id="v-pills-tabContent">
                          {danhSachRap.lstCumRap?.map((thongTinRap, index) => {
                            let classActive = index === 0 ? "active" : "";
                            return (
                              <div
                                key={index}
                                className={`tab-pane fade show ${classActive}`}
                                id={thongTinRap.maCumRap}
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                              >
                                {thongTinRap.danhSachPhim?.map(
                                  (phim, index) => {
                                    return (
                                      <div key={index}>
                                        <h5> {phim.tenPhim}</h5>
                                        <div className="row">
                                          {phim.lstLichChieuTheoPhim
                                            ?.slice(0, 8)
                                            .map((lichChieu, index) => {
                                              return (
                                                <a href="#" className="col-3">
                                                  {lichChieu.ngayChieuGioChieu}
                                                </a>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
