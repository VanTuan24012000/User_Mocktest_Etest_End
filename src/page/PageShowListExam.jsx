import { Image, Table } from "antd";
// import { Image, Space, Table } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import imageBanner from "../image/toeic_luu_y.png";
import Column from "antd/es/table/Column";
function PageShowListExam(props) {
  const location = useLocation();
  const data = location.state;
  console.log("Danh sach cac du lieu la : ", data.length);
  return (
    <div className="mx-auto w-[1400px]">
      {data?.length > 0 && (
        <>
          <Image
            src={imageBanner}
            width={1400}
            height={"80vh"}
            preview={false}
            className=" object-cover h-[80vh]"
          />
          <h2 className="text-center font-semibold text-2xl my-5 text-amber-500">
            Danh sách các bài thi
          </h2>
          <Table dataSource={data} className="text-center">
            <Column
              title={<div className="text-center">Tên bài thi</div>}
              dataIndex="name"
              key="name"
              className="text-center"
            />
            <Column
              title={<div className="text-center">Dạng bài thi</div>}
              dataIndex="type"
              key="type"
              className="text-center"
            />
            <Column
              title={<div className="text-center">Thời gian thi</div>}
              dataIndex="timeExam"
              key="timeExam"
              className="text-center"
            />

            <Column
              title={<div className="text-center">Action</div>}
              key="action"
              render={(_, record) => (
                <Link
                  to={`/exam/${record.id}`}
                  className="flex justify-center font-normal text-orange-500"
                >
                  Thi thử
                </Link>
              )}
            />
          </Table>
        </>
      )}
      {data.length === 0 && (
        <>
          <h2 className="text-orange-500 text-2xl font-medium text-center">
            Không có bài thi nào phù hợp{" "}
            <br />

            Hãy <Link>mua khóa học </Link> để được hưởng các ưu đãi đặc biệt
          </h2>
        </>
      )}
    </div>
  );
}

export default PageShowListExam;
