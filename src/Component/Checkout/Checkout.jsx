import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinPhongVeAction } from "../../Action/PhimAction";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhongVeAction(id));
  }, []);
  console.log({ thongTinPhongVe });
  let renderGhe = () => {
    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
      return (
        <Fragment key={index}>
          <button>{ghe.stt}</button>
          {(index + 1) % 12 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <section className="checkout">
      <div className="container-fluid">
        <div className="row">
          <div className="seat__map">
            <div className="col-lg-9">
              <div className="step__checkout">
                <span> CHỌN GHẾ & THANH TOÁN</span>
              </div>
              <div className="seat__checkout">
                <div className="screen">
                  <img
                    src="https://tix.vn/app/assets/img/icons/screen.png"
                    alt=""
                  />
                </div>
                <div className="listseat">{renderGhe()}</div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
