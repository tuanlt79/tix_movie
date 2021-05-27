import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { taoLichChieuAction } from "../../Action/PhimAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function TaoLichChieu() {
  const { accessToken } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const defaultValues = {
    maPhim: "",
    ngayChieuGioChieu: new Date(),
    maRap: "",
    giaVe: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(taoLichChieuAction(data, accessToken));
  };
  return (
    <div className="d-inline-block">
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn__taoLichChieu"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Tạo Lịch Chiếu
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Nhập Thông Tin Tạo Lịch Chiếu
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <span>Nhập Mã Phim</span>
                      <input
                        type="text"
                        {...register("maPhim")}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <span>Giá vé</span>
                      <input
                        type="text"
                        {...register("giaVe")}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <span>Mã Rạp</span>
                      <input
                        type="text"
                        {...register("maRap")}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <span className="mr-2">Ngày Chiếu</span>
                      <Controller
                        control={control}
                        name="ngayChieuGioChieu"
                        render={({ field }) => (
                          <DatePicker
                            className="input"
                            placeholderText="Select date"
                            onChange={(e) => field.onChange(e)}
                            selected={field.value}
                          />
                        )}
                      />
                      {/* <Controller
                        name="ngayChieuGioChieu"
                        control={control}
                        defaultValue={null}
                        render={({ field }) => (
                          <DatePicker
                            onChange={(e) => field.onChange(e)}
                            selected={field.value}
                            // selected={
                            //   field.value
                            //     ? moment(field.value).format("DD/MM/YYYY")
                            //     : null
                            // }
                            placeholderText="Vui lòng chọn ngày"
                            dateFormat="dd/MM/yyyy"
                            isClearable
                          />
                        )}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button type="submit" className="btn btn-success">
                  Tạo Lịch Chiếu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
