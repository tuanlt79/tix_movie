import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhimAction } from "../../Action/PhimAction";
import LightLity from "lity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layChiTietPhimAction(id));
  }, []);

  return (
    <section className="detail">
      <div className="bgr__main">
        <div className="detail__bgr">
          <img src={chiTietPhim.hinhAnh} alt="" />
        </div>
        <div className="container">
          <div className="content__center">
            <div className="row">
              <div className="col-8  ">
                <div className="img__film">
                  <img
                    src={chiTietPhim.hinhAnh}
                    alt=""
                    style={{ width: 240, objectFit: "cover", height: 380 }}
                  />
                  <a data-lity href={chiTietPhim.trailer} className="iconHover">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                </div>
                <div className="detail__content">
                  <h1>{chiTietPhim.tenPhim}</h1>
                  <p>
                    <span className="content__c16">C16</span>2D/Digital
                  </p>
                  <button>Mua Vé</button>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
      sdkjfal;jlfk
    </section>
  );
}
