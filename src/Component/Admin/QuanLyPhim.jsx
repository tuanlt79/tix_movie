import moment from "moment";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../../Action/PhimAction";

export default function QuanLyPhim() {
  const dispatch = useDispatch();
  const { mangPhim } = useSelector((state) => state.PhimReducer);
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const danhSachPhim = () => {
    return mangPhim?.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.maPhim}</th>
          <td>{item.tenPhim}</td>
          <td>
            <img width="20px" src={item.hinhAnh} alt="" />
          </td>
          <td>{moment(item.ngayKhoiChieu).format("ddd-mm-yyyy hh:mm A")}</td>
          <td>
            <button className="btn__taoLichChieu">Tạo Lịch Chiếu</button>
            <button className="btn__edit">Sửa</button>
            <button className="btn__del">Xóa</button>
          </td>
        </tr>
      );
    });
  };
  //   console.log(mangPhim);
  return (
    <Fragment>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã Phim</th>
            <th scope="col">Tên Phim</th>
            <th scope="col">Hinh Ảnh</th>
            <th scope="col">Ngày Khởi Chiếu</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{danhSachPhim()}</tbody>
      </table>
    </Fragment>
  );
}
