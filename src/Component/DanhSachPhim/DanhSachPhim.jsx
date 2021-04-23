import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export default function DanhSachPhim() {
  return (
    <section className="silder container my-5 text-center">
      <h1>Phim Đang Chiếu</h1>
      <div className="row">
        <div className="col-3">
          <div href="#" className="card" style={{ width: "250px" }}>
            <img
              className="card-img-top"
              src="http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png"
              alt
            />
            <a href="#" className="iconHover">
              <FontAwesomeIcon icon={faPlay} style={{ fontSize: "30px" }} />
            </a>

            <div className="card-body">
              <div className="card__info">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
              <div className="showHover">
                <a href="#" className="btn btn-danger">
                  Mua Vé
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "250px" }}>
            <img
              className="card-img-top"
              src="http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png"
              alt
            />
            <a href="#" className="iconHover">
              <FontAwesomeIcon icon={faPlay} style={{ fontSize: "30px" }} />
            </a>

            <div className="card-body">
              <div className="card__info">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
              <div className="showHover">
                <a href="#" className="btn btn-danger">
                  Mua Vé
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
