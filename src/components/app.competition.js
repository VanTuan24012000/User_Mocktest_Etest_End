import { Image } from "antd";
import iiVietNam from "../image/iiVietNam.png";
import dhHaNoi from "../image/dhHaNoi.png";
import hneu from "../image/hnue.png";
import dhVinh from "../image/dhVinh.png";
import bachKhoa from "../image/bachKhoa.png";
import neu from "../image/neu.png";






const Competitions = () => {
    // const path = "/public";
    return (
        <div>
            <div className=" my-10 justify-around mx-auto max-w-screen-lg">
                <p className=" text-[#fb9400] font-bold text-3xl mb-10 text-center">
                    Các đơn vị tổ
                    <span className=" sm:border-b-2 border-[#fb9400]"> chức thi và c</span>
                    ấp chứng chỉ
                </p>
                <div className="flex flex-row justify-around mx-auto w-full">
                    <div className="w-full overflow-hidden relative mx-2 h-[100px]">
                        <Image src={iiVietNam} fill alt="" priority />
                    </div>

                    <div className="w-full overflow-hidden relative mx-2 h-[100px]">
                        <Image src={dhHaNoi} fill alt="" priority />
                    </div>

                    <div className="w-full overflow-hidden relative mx-2 h-[100px]">
                        <Image src={hneu} fill alt="" priority />
                    </div>

                    <div className="w-full overflow-hidden relative mx-2 h-[100px]">
                        <Image src={dhVinh} fill alt="" priority />
                    </div>

                    <div className="w-full overflow-hidden relative mx-2 h-[100px]">
                        <Image src={bachKhoa} fill alt="" priority />
                    </div>

                    <div className="w-full overflow-hidden relative mx-2 h-[100px]">
                        <Image src={neu} fill alt="" priority />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Competitions;
