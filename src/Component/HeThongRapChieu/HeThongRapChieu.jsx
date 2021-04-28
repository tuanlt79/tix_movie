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
  const thongTinCumRap = () => {
    return chiTietCumRap?.map((danhSachRap, index) => {
      return (
        <a
          key={index}
          className="nav-link "
          id="v-pills-home-tab"
          data-toggle="pill"
          href={`#${danhSachRap.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          <img src={danhSachRap.logo} width="50px" />
        </a>
      );
    });
  };
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
              <div
                class="tab-pane fade show active"
                id="tab__1"
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
                      {chiTietCumRap?.map((danhSachRap, index) => {
                        return (
                          <Fragment key={index}>
                            {danhSachRap.lstCumRap?.map(
                              (thongTinRap, index) => {
                                return (
                                  <a
                                    key={index}
                                    className="nav-link"
                                    id={`${danhSachRap.maHeThongRap}`}
                                    data-toggle="pill"
                                    href="#tab__2"
                                    role="tab"
                                    aria-controls="v-pills-messages"
                                    aria-selected="false"
                                  >
                                    <h3>{thongTinRap.tenCumRap}</h3>
                                    <span>{thongTinRap.diaChi}</span>
                                  </a>
                                );
                              }
                            )}
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="tab-content" id="v-pills-tabContent">
                      {chiTietCumRap?.map((danhSachRap, index) => {
                        return (
                          <div
                            key={index}
                            className="tab-pane fade"
                            id="tab__2"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                          >
                            1.1
                          </div>
                        );
                      })}
                      <div
                        className="tab-pane fade"
                        id="tab__3"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        1.2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
