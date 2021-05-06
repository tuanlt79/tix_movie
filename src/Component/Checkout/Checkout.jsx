import React, { useEffect } from "react";
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
  return (
    <section className="checkout">
      <div></div>
    </section>
  );
}
