import { Image } from "antd";
import part1 from "../image/ImagePart1.png";
import part2 from "../image/ImagePart2.png";
import part3 from "../image/ImagePart3.png";
import part4 from "../image/ImagePart4.png";
import part5 from "../image/ImagePart5.png";
import part6 from "../image/ImagePart6.png";
import part7 from "../image/ImagePart7.png";
import banner from "../image/bannerToeic.png";
import luuYThi from "../image/toeic_luu_y.png";
import Competitions from "../components/app.competition";
import Consultation from "../components/app.consultation";
import AppFooter from "../components/app.footer";
import MyForm from "../components/input";
// import { HeaderMenu } from "../components/app.menu";
// import Speed from "../components/app.speedDial";
// import { AppMenu } from "../components/menu";

function Toeic() {

    // const navigate = useNavigate();
    const handleSubmit = () => {
        window.location.href = '/beforeExam';
    };
    return (
        <div className="w-full">
            {/* <AppMenu /> */}
            {/* <HeaderMenu /> */}
            {/* <Speed /> */}
            <div className="mx-2">
                <div className="absolute mx-14 py-5">
                    <svg width="300" height="300" viewBox="0 0 384 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="191.982" cy="192.704" r="74.6232" stroke="#FB9400" stroke-opacity="0.5" />
                        <circle cx="192.445" cy="193.168" r="122.387" stroke="#FB9400" stroke-opacity="0.5" />
                        <circle cx="191.982" cy="192.704" r="159.021" stroke="#FB9400" stroke-opacity="0.5" />
                        <circle cx="191.982" cy="192.704" r="191.482" stroke="#FB9400" stroke-opacity="0.5" />
                    </svg>
                </div>

                <div className="max-w-screen-lg mx-auto">
                    <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-5 justify-around my-10">
                        <div className="col-span-1 text-left justify-center my-auto sm:pt-32">
                            <h2 className="text-slate-950 font-semibold sm:text-3xl ">
                                {" "}
                                Thi thử TOEIC Online Miễn Phí
                            </h2>
                            <p className="text-left my-5 sm:text-lg">
                                EduStar cung cấp miễn phí phần mềm thi trên máy tính.
                                mô phỏng phần mềm thi chính thức của Bộ, hỗ trợ thí sinh
                                nắm vững các chức năng của phần mềm & ôn luyện các bộ đề
                                thi bám sát định dạng, giúp thí sinh tự tin bước vào các kỳ thi chính thức
                            </p>

                            <button
                                className="my-auto flex bg-[#fb9400] font-bold text-white border-[#fca01c] px-3 py-1 rounded-md shadow-lg hover:bg-yellow-500"
                                onClick={handleSubmit}
                            >
                                Thi thử miễn phí{" "}
                                <svg className="my-auto ml-2" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.847063V1.75991C1 1.82198 1.02612 1.8804 1.06896 1.91692L5.16088 5.37477L1.06896 8.83262C1.02612 8.86914 1 8.92756 1 8.98963V9.90248C1 9.98159 1.07732 10.0278 1.13271 9.98159L6.21207 5.69C6.39598 5.53421 6.39598 5.21533 6.21207 5.06075L1.13271 0.769167C1.07732 0.721699 1 0.76795 1 0.847063Z" fill="white" stroke="white" stroke-width="1.25" />
                                </svg>

                            </button>
                        </div>
                        <div className="col-span-1">
                            <Image src={banner} fill alt="" />
                        </div>
                    </div>
                    <div className="my-10">
                        <div className=" my-5 text-center mx-auto max-w-screen-lg">
                            <span className="font-bold text-center border-b-2 border-[#fb9400] text-xl py-1">Hiểu về bài thi TOEIC</span>
                        </div>
                        <div className="max-w-screen-md">
                            <div className="my-5">
                                <p className="text-sm">Một bài kiểm tra Toeic(Listening & Reading) thực tế sẽ có 200 câu hỏi trắc nghiệm và được chia làm 7 phần.</p>
                                <p className="text-sm">Trong đó phần nghe (Listening) là từ Path 1 đến Path 4, phần đọc (Reading)sẽ từ Path 5 đến Path 7.</p>
                            </div>
                            <div className="my-5">
                                <p className="text-sm">Hầu hết mọi người học Toeic đều muốn thi thử TOEIC Online trước khi tham gia chính thức kỳ thi TOEIC. Một là để làm quen với một bài thi Toeic, thứ 2 là để đánh giá trình độ Toeic của mình đến đâu</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-bold text-xl">Listening</p>
                    <div className="grid tablet:grid-cols-4 mobile:grid-cols-1 gap-5 justify-around py-2">
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 sm:h-full hover:shadow-lg">
                            <Image src={part1} fill alt="" priority />
                            <p className="font-bold">Path 1</p>
                            <p className="font-bold">Mô tả tranh</p>
                            <p className="text-sm text-[#667085]">Thí sinh sẽ nghe 1 lần duy nhất 4 câu mô tả tranh.Sau đó chọn 1 đáp án mô tả đúnh nhất.</p>
                        </div>
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 hover:shadow-lg">
                            <Image src={part2} fill alt="" priority />
                            <p className="font-bold">Path 2</p>
                            <p className="font-bold">Hỏi-Đáp</p>
                            <p className="text-sm text-[#667085]">Thí sinh nghe 1 lần duy nhất 3 câu hồi đáp cho 1 câu hỏi hoặc 1 câu nói. Sau đó chọn câu hồi đáp phù hợp nhất.</p>
                        </div>
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 hover:shadow-lg">
                            <Image src={part3} fill alt="" priority />
                            <p className="font-bold">Path 3</p>
                            <p className="font-bold">Đoạn hội thoại</p>
                            <p className="text-sm text-[#667085]">Thí sinh nghe 1 lần duy nhất các đoạn hội thoại giữa 2 hoặc 3 người. Mỗi đoạn hội thoại sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
                        </div>
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 hover:shadow-lg">
                            <Image src={part4} fill alt="" priority />
                            <p className="font-bold">Path 4</p>
                            <p className="font-bold">Bài nói ngắn</p>
                            <p className="text-sm text-[#667085]">Thí sinh sẽ nghe một lần duy nhất các bài nói ngắn. Mỗi bài sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
                        </div>
                    </div>
                    <p className="font-bold text-xl">Reading</p>
                    <div className="grid tablet:grid-cols-4 mobile:grid-cols-1 gap-5 justify-around py-2">
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 sm:h-full hover:shadow-lg">
                            <Image src={part5} fill alt="" priority />
                            <p className="font-bold">Path 5</p>
                            <p className="font-bold">Hoàn thành câu</p>
                            <p className="text-sm text-[#667085]">Chọn đáp án đúng nhất trong 4 đáp án để hoàn thành câu.</p>
                        </div>
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 hover:shadow-lg">
                            <Image src={part6} fill alt="" priority />
                            <p className="font-bold">Path 6</p>
                            <p className="font-bold">Hoàn thành đoạn văn</p>
                            <p className="text-sm text-[#667085]">Chọn đáp án đũng nhất trong 4 đáp án(từ, cụm hoặc câu) để hoàn thành đoạn văn. Mỗi đoạn văn sẽ có 4 câu hỏi.</p>
                        </div>
                        <div className="shadow-lg border-solid border rounded-md border-[#fb9400] p-3 col-span-1 hover:shadow-lg">
                            <Image src={part7} fill alt="" priority />
                            <p className="font-bold">Path 7</p>
                            <p className="font-bold">Đọc hiểu</p>
                            <p className="text-sm text-[#667085]">Thí sinh sẽ đọc các bài đọc hiểu sau đó chọn đáp án đúng nhất cho các câu hỏi. Mỗi bài đọc sẽ bao gồm 2-5 câu hỏi.</p>
                        </div>
                    </div>
                    <div className=" my-5 text-center mx-auto max-w-screen-lg">
                        <span className="font-bold text-center border-b-2 border-[#fb9400] text-xl py-1">Mô phỏng bài thi TOEIC</span>
                    </div>
                    <div className=" grid tablet:grid-cols-2 mobile:grid-cols-1 gap-5 justify-around py-2">
                        <div className="p-3 rounded-lg col-span-1 bg-gradient-to-r from-[#04183b] via-[#00508d] to-[#04183b] md:px-10">
                            <p className="font-bold uppercase text-white">mini test</p>
                            <div className="grid tablet:grid-cols-3 mobile:grid-cols-1 gap-5 justify-around py-2">
                                <p className="text-sm text-white col-span-2">Làm bài mini test với số lượng câu hỏi và thời gian giảm một nửa so với bài thi thật</p>
                                <button className="text-white bg-[#fb9400] my-3 p-2 rounded-md font-bold float-right hover:bg-yellow-500">Luyện tập</button>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg col-span-1 bg-gradient-to-r from-[#04183b] via-[#00508d] to-[#04183b] md:px-10">
                            <p className="font-bold uppercase text-white">full test</p>
                            <div className="grid tablet:grid-cols-3 mobile:grid-cols-1 gap-5 justify-around py-2 float-left">
                                <p className="text-sm text-white col-span-2">Làm bài full test với số lượng câu hỏi và thời gian giống bài thi thật</p>
                                <button className="text-white col-span-1 bg-[#fb9400] my-3 p-2 rounded-md font-bold float-right hover:bg-yellow-500">Luyện tập</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" my-5 text-center mx-auto max-w-screen-lg">
                            <span className="font-bold text-center border-b-2 border-[#fb9400] text-xl py-1">Lợi ích khi thi thử TOEIC</span>
                            <div className="p-3 grid tablet:grid-cols-3 mobile:grid-cols-1 gap-5 justify-around py-10 " relative data-carousel="slide">
                                <div className="col-span-1 bg-[#29bdcf] text-white p-5 rounded-lg shadow-md shadow-[#b8b8b8]" data-carousel-item>
                                    <div className="flex py-5 gap-5">
                                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="48" height="48" rx="10" fill="white" />
                                            <path d="M11.4333 28.8083C11.1941 28.8083 11 28.6229 11 28.3945V13.7414C11 13.057 11.5833 12.5 12.3 12.5H35.7C36.4167 12.5 37 13.057 37 13.7414V17.8063C37 18.0347 36.8059 18.2201 36.5667 18.2201C36.3275 18.2201 36.1333 18.0347 36.1333 17.8063V13.7414C36.1333 13.5138 35.9383 13.3276 35.7 13.3276H12.3C12.0617 13.3276 11.8667 13.5138 11.8667 13.7414V28.3945C11.8667 28.6229 11.6725 28.8083 11.4333 28.8083Z" fill="#7F56D9" stroke="#FB9400" stroke-width="0.6" />
                                            <path d="M24 36.5H19.2333C18.9941 36.5 18.8 36.3146 18.8 36.0862C18.8 35.8578 18.9941 35.6724 19.2333 35.6724H20.1C20.8167 35.6724 21.4 35.1154 21.4 34.431V32.362C21.4 32.1336 21.5941 31.9482 21.8333 31.9482C22.0725 31.9482 22.2667 32.1336 22.2667 32.362V34.431C22.2667 34.8969 22.1046 35.3264 21.8325 35.6724H24C24.2392 35.6724 24.4333 35.8578 24.4333 36.0862C24.4333 36.3146 24.2392 36.5 24 36.5Z" fill="#7F56D9" stroke="#FB9400" stroke-width="0.6" />
                                            <path d="M25.0111 32.3621H12.3C11.5833 32.3621 11 31.8051 11 31.1207V28.6379C11 28.4095 11.1941 28.2241 11.4333 28.2241H25.0111C25.2503 28.2241 25.4444 28.4095 25.4444 28.6379C25.4444 28.8663 25.2503 29.0517 25.0111 29.0517H11.8667V31.1207C11.8667 31.3483 12.0617 31.5345 12.3 31.5345H25.0111C25.2503 31.5345 25.4444 31.7198 25.4444 31.9483C25.4444 32.1767 25.2503 32.3621 25.0111 32.3621Z" fill="#7F56D9" stroke="#FB9400" stroke-width="0.6" />
                                            <path d="M28.7667 18.2929H33.1C33.3392 18.2929 33.5333 18.1075 33.5333 17.8791C33.5333 17.6507 33.3392 17.4653 33.1 17.4653H28.7667C28.5275 17.4653 28.3333 17.6507 28.3333 17.8791C28.3333 18.1075 28.5275 18.2929 28.7667 18.2929Z" fill="#7F56D9" stroke="#FB9400" stroke-width="0.6" />
                                            <path d="M30.5 34.8447H31.3667C31.6059 34.8447 31.8 34.6593 31.8 34.4309C31.8 34.2025 31.6059 34.0171 31.3667 34.0171H30.5C30.2608 34.0171 30.0667 34.2025 30.0667 34.4309C30.0667 34.6593 30.2608 34.8447 30.5 34.8447Z" fill="#7F56D9" stroke="#FB9400" stroke-width="0.6" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0333 36.5002H34.8333C36.0285 36.5002 37 35.5725 37 34.4312V17.8795C37 16.7383 36.0285 15.8105 34.8333 15.8105H27.0333C25.8382 15.8105 24.8667 16.7383 24.8667 17.8795V34.4312C24.8667 35.5725 25.8382 36.5002 27.0333 36.5002ZM25.7333 17.8795C25.7333 17.1951 26.3166 16.6381 27.0333 16.6381H34.8333C35.5501 16.6381 36.1333 17.1951 36.1333 17.8795V34.4312C36.1333 35.1157 35.5501 35.6726 34.8333 35.6726H27.0333C26.3166 35.6726 25.7333 35.1157 25.7333 34.4312V17.8795Z" fill="#7F56D9" />
                                            <path d="M34.8333 36.2002H27.0333V36.8002H34.8333V36.2002ZM36.7 34.4312C36.7 35.3939 35.876 36.2002 34.8333 36.2002V36.8002C36.181 36.8002 37.3 35.7511 37.3 34.4312H36.7ZM36.7 17.8795V34.4312H37.3V17.8795H36.7ZM34.8333 16.1105C35.876 16.1105 36.7 16.9169 36.7 17.8795H37.3C37.3 16.5597 36.181 15.5105 34.8333 15.5105V16.1105ZM27.0333 16.1105H34.8333V15.5105H27.0333V16.1105ZM25.1667 17.8795C25.1667 16.9169 25.9907 16.1105 27.0333 16.1105V15.5105C25.6857 15.5105 24.5667 16.5597 24.5667 17.8795H25.1667ZM25.1667 34.4312V17.8795H24.5667V34.4312H25.1667ZM27.0333 36.2002C25.9907 36.2002 25.1667 35.3939 25.1667 34.4312H24.5667C24.5667 35.7511 25.6857 36.8002 27.0333 36.8002V36.2002ZM27.0333 16.3381C26.1641 16.3381 25.4333 17.0165 25.4333 17.8795H26.0333C26.0333 17.3737 26.4691 16.9381 27.0333 16.9381V16.3381ZM34.8333 16.3381H27.0333V16.9381H34.8333V16.3381ZM36.4333 17.8795C36.4333 17.0165 35.7026 16.3381 34.8333 16.3381V16.9381C35.3976 16.9381 35.8333 17.3737 35.8333 17.8795H36.4333ZM36.4333 34.4312V17.8795H35.8333V34.4312H36.4333ZM34.8333 35.9726C35.7026 35.9726 36.4333 35.2942 36.4333 34.4312H35.8333C35.8333 34.9371 35.3976 35.3726 34.8333 35.3726V35.9726ZM27.0333 35.9726H34.8333V35.3726H27.0333V35.9726ZM25.4333 34.4312C25.4333 35.2942 26.1641 35.9726 27.0333 35.9726V35.3726C26.4691 35.3726 26.0333 34.9371 26.0333 34.4312H25.4333ZM25.4333 17.8795V34.4312H26.0333V17.8795H25.4333Z" fill="#FB9400" />
                                        </svg>

                                        <p className="py-3">Ngân hàng đề thi</p>
                                    </div>

                                    <p className="text-left">Ngân hàng đề thi đa dạng với nhiều chủ đề khác nhau sẽ giúp bạn chuần bị tốt nhất cho kỳ thi của mình</p>
                                </div>
                                <div className="col-span-1 bg-white border p-5 rounded-lg shadow-xl" data-carousel-item>
                                    <div className="flex py-5 gap-5">
                                        <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="46" height="48" rx="10" fill="#E0EAFF" />
                                            <path d="M32 15H14C13.7238 15 13.5 15.2239 13.5 15.5V26.5H32.5V15.5C32.5 15.2239 32.2761 15 32 15Z" stroke="#4883FF" />
                                            <path d="M34.5 26.6176C34.7761 26.6176 35 26.3938 35 26.1176V15C34.9983 13.62 33.88 12.5017 32.5 12.5H13.5C12.12 12.5017 11.0017 13.62 11 15V29C11.0017 30.38 12.12 31.4983 13.5 31.5H19V33.7325L17.7225 34.5825C17.583 34.6756 17.4995 34.8323 17.5 35V35.5C17.5 36.0523 17.9477 36.5 18.5 36.5H27.5C28.0523 36.5 28.5 36.0523 28.5 35.5V35C28.5 34.8329 28.4165 34.6768 28.2775 34.584L27 33.7325V31.5882C27 31.3121 26.7761 31.0882 26.5 31.0882C26.2239 31.0882 26 31.3121 26 31.5882V34C26 34.1671 26.0835 34.3232 26.2225 34.416L27.5 35.2675V35.5H18.5V35.2675L19.7775 34.4175C19.917 34.3244 20.0005 34.1677 20 34V31.5H32.5C33.88 31.4983 34.9983 30.38 35 29V26.5C35 26.2239 34.7761 26 34.5 26H11.8824C11.6062 26 11.3824 26.2239 11.3824 26.5C11.3824 26.7761 11.6062 27 11.8824 27H34V29C34 29.8284 33.3284 30.5 32.5 30.5H13.5C12.6716 30.5 12 29.8284 12 29V15C12 14.1716 12.6716 13.5 13.5 13.5H32.5C33.3284 13.5 34 14.1716 34 15V26.1176C34 26.3938 34.2239 26.6176 34.5 26.6176Z" fill="#4883FF" stroke="#4883FF" stroke-width="0.4" />
                                            <path d="M20.8535 16.8524C20.6583 16.6573 20.3417 16.6573 20.1465 16.8524L17.1465 19.8524C16.9513 20.0477 16.9513 20.3642 17.1465 20.5594L20.1465 23.5594C20.3427 23.7489 20.6545 23.7462 20.8474 23.5534C21.0403 23.3605 21.043 23.0486 20.8535 22.8524L18.207 20.2059L20.8535 17.5594C21.0487 17.3642 21.0487 17.0477 20.8535 16.8524Z" fill="#4883FF" />
                                            <path d="M25.1465 23.5594C25.3418 23.7546 25.6583 23.7546 25.8535 23.5594L28.8535 20.5594C29.0487 20.3641 29.0487 20.0476 28.8535 19.8524L25.8535 16.8524C25.728 16.7224 25.5421 16.6703 25.3673 16.716C25.1924 16.7618 25.0559 16.8983 25.0102 17.0731C24.9644 17.2479 25.0165 17.4338 25.1465 17.5594L27.793 20.2059L25.1465 22.8524C24.9513 23.0476 24.9513 23.3641 25.1465 23.5594Z" fill="#4883FF" />
                                        </svg>
                                        <p className="py-3">Mô phỏng bài thi thật</p>
                                    </div>
                                    <p className="text-left">Các bài thi thử có cấu trúc như bài thi thật sẽ giúp bạn vượt qua kỳ thi một cách thành công</p>
                                </div>
                                <div className="col-span-1 bg-white border p-5 rounded-lg shadow-xl" data-carousel-item>
                                    <div className="flex py-5 gap-5">
                                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="47.7143" height="48" rx="10" fill="#FCE7F6" />
                                            <path d="M11.625 12.5C11.2798 12.5 11 12.7612 11 13.0834V35.4683C11 35.7543 11.1187 36.0274 11.3278 36.2225C11.5188 36.4008 11.7704 36.5 12.0317 36.5H36.0892C36.4344 36.5 36.7143 36.2388 36.7143 35.9166C36.7143 35.5944 36.4344 35.3333 36.0892 35.3333H14.2501C13.1455 35.3333 12.2501 34.4378 12.2501 33.3333V13.0834C12.2501 12.7612 11.9702 12.5 11.625 12.5Z" fill="#C11574" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6254 27.6477C15.4943 27.6356 14.5045 28.3548 14.2397 29.3813C13.975 30.4077 14.5057 31.4686 15.5187 31.9382C16.5318 32.4079 17.7582 32.1615 18.4745 31.3444C19.1908 30.5273 19.2068 29.3566 18.513 28.5227L21.4382 24.5208C21.692 24.6012 21.9577 24.6445 22.2257 24.6491C22.9107 24.6551 23.5657 24.3876 24.0259 23.9141L26.626 25.6409C26.5861 25.8095 26.5651 25.9815 26.5635 26.1542C26.5635 27.3914 27.6381 28.3944 28.9637 28.3944C30.2893 28.3944 31.3639 27.3914 31.3639 26.1542C31.362 25.6474 31.172 25.1567 30.8263 24.7658L33.614 20.7872C34.749 21.1212 35.9737 20.6197 36.4788 19.614C36.984 18.6083 36.6137 17.4089 35.6126 16.8082C34.6116 16.2076 33.2888 16.3911 32.5182 17.2376C31.7476 18.084 31.7672 19.3321 32.564 20.1572L29.7888 24.0774C29.5131 23.9798 29.2211 23.9284 28.9262 23.9257C28.2709 23.9254 27.6436 24.1739 27.1886 24.6141L24.5759 22.9107C24.5889 22.7592 24.5889 22.6071 24.5759 22.4556C24.6268 21.4434 23.9432 20.5253 22.9089 20.2168C21.8746 19.9084 20.7473 20.2864 20.1599 21.1387C19.5724 21.9909 19.6711 23.1051 20.4006 23.8557L17.5129 27.811C17.2313 27.7031 16.9298 27.6477 16.6254 27.6477ZM34.3141 17.602C34.9493 17.602 35.4642 18.0826 35.4642 18.6754C35.4642 19.2682 34.9493 19.7488 34.3141 19.7488C33.6789 19.7488 33.164 19.2682 33.164 18.6754C33.164 18.0826 33.6789 17.602 34.3141 17.602ZM30.0763 26.1543C30.0763 25.5614 29.5614 25.0808 28.9262 25.0808C28.291 25.0808 27.7761 25.5614 27.7761 26.1543C27.7761 26.7471 28.291 27.2277 28.9262 27.2277C29.5614 27.2277 30.0763 26.7471 30.0763 26.1543ZM22.2257 21.3356C22.8609 21.3356 23.3758 21.8161 23.3758 22.409C23.3758 23.0018 22.8609 23.4824 22.2257 23.4824C21.5905 23.4824 21.0756 23.0018 21.0756 22.409C21.0756 21.8161 21.5905 21.3356 22.2257 21.3356ZM15.5606 30.293C15.7371 30.697 16.1579 30.9611 16.6254 30.9612C17.2509 30.9613 17.7618 30.4948 17.7754 29.9111C17.7856 29.475 17.5119 29.0765 17.0831 28.903C16.6542 28.7294 16.1555 28.8154 15.8214 29.1205C15.4873 29.4256 15.3842 29.889 15.5606 30.293Z" fill="#C11574" />
                                        </svg>

                                        <p className="py-3">Thống kê kết quả chi tiết</p>
                                    </div>
                                    <p className="text-left">Sau khi hoàn thành mỗi bài luyện tập, bạn có thể xem thống kê chi tiết kết quả bài làm của mình</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-3">
                        <div className=" my-5 text-center mx-auto max-w-screen-lg">
                            <span className="font-bold text-center border-b-2 border-[#fb9400] text-xl py-1">Lưu ý khi làm đề thi thử TOEIC online</span>
                        </div>
                        <div className="mobile:my-5 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 justify-center">
                            <div className="col-span-1 text-left tablet:ml-[10%] mobile:ml-2">
                                <p className="my-3 text-sm">Để việc ôn luyện đề thi thử Toeic online được hiệu quả tốt nhất có thể, học viên nên lưu ý những vấn đề sau đây:</p>
                                <ul className="">
                                    <li className="px-2 my-1 text-sm list-disc">Học viên nghiêm túc và làm bài thi giống như khi ̣thi thật, không sử dụng tài liệu trong qúa trình làm bài.</li>
                                    <li className="px-2 my-1 text-sm list-disc">Làm bài thi nên sử dụng máy tính để bàn hoặc laptop để đạt hiệu qủa tốt nhất.</li>
                                    <li className="px-2 my-1 text-sm list-disc">Luyện nghe loa ngoài để làm quen dần với âm thanh và cải thiện trình độ nghe Toeic của mình.</li>
                                    <li className="px-2 my-1 text-sm list-disc">Làm đúng thời gian quy định.</li>
                                    <li className="px-2 my-1 text-sm list-disc">Tập trung làm hết bài thi không bỏ dở giữa chừng.</li>
                                    <li className="px-2 my-1 text-sm list-disc">Sau khi thi kiểm tra lỗi sai, phân tích lỗi sai và tìm ra giải pháp cho câu hỏi.</li>
                                </ul>
                            </div>
                            <div className="col-span-1">
                                <Image src={luuYThi} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Consultation />
            <Competitions />
            {/* <MyForm /> */}
            <AppFooter />
        </div>
    )
}

export default Toeic;