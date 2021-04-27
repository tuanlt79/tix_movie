import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LightLity from "lity";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { layDanhSachPhimAction } from "../../Action/PhimAction";

export default function DanhSachPhim() {
  const dispatch = useDispatch();
  const mangPhim = useSelector((state) => state.PhimReducer.mangPhim);
  console.log(mangPhim);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  let renderFilm = () => {
    return mangPhim.map((item, index) => {
      return (
        <div className=" my-3 col-lg-3  col-sm-12 col-md-6 " key={index}>
          <div href="#" className="card" style={{ width: "250px" }}>
            <div className="silder__img">
              <a href="#" className="img__overlay">
                <img
                  className="card-img-top"
                  src={item.hinhAnh}
                  style={{
                    width: "250px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </a>
              <p className="point">
                <FontAwesomeIcon icon={faStar} />
                {item.danhGia} <span>/10</span>
              </p>
            </div>

            <a data-lity href={item.trailer} className="iconHover">
              <FontAwesomeIcon icon={faPlay} style={{ fontSize: "30px" }} />
            </a>

            <div className="card-body">
              <div className="card__info text-left">
                <h4 className="card-title " style={{ fontSize: "18px" }}>
                  {item.tenPhim}
                </h4>
              </div>
              <div className="showHover">
                <a href="#">MUA VÉ</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="silder container my-5 text-center">
      <h1>Phim Đang Chiếu</h1>
      <div className="row mt-5">{renderFilm()}</div>
    </section>
  );
}
