const Consultation = () => {
    return (
        <div>
            <div className="my-5 mx-auto">
                <div className=" flex justify-center">
                    <p className=" text-[#fb9400] font-bold text-3xl mb-10">
                        Đăn
                        <span className="sm:border-b-2 border-[#fb9400] py-2">
                            g ký nhận tư
                        </span>{" "}
                        vấn
                    </p>
                </div>
                <div className="grid lg:gap-x-20 gap-y-4 grid-cols-2 md:mx-16">
                    <div className="relative mx-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    d="M11 11C13.0251 11 14.6667 9.3584 14.6667 7.33335C14.6667 5.30831 13.0251 3.66669 11 3.66669C8.97497 3.66669 7.33334 5.30831 7.33334 7.33335C7.33334 9.3584 8.97497 11 11 11Z"
                                    fill="#808080"
                                />
                                <path
                                    d="M11 12.8333C8.55249 12.8333 3.66666 14.0616 3.66666 16.5V18.3333H18.3333V16.5C18.3333 14.0616 13.4475 12.8333 11 12.8333Z"
                                    fill="#808080"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="input"
                            className="text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  bg-white text-gray-700 border border-collapse border-[#fb9400]  py-3 px-8 leading-tight focus:outline-none focus:bg-white dark:focus:border-blue-500"
                            placeholder="Họ và Tên"
                        />
                    </div>

                    <div className="relative mx-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    d="M16.675 12.8167C15.65 12.8167 14.6583 12.65 13.7333 12.35C13.4417 12.25 13.1167 12.325 12.8917 12.55L11.5833 14.1917C9.225 13.0667 7.01667 10.9417 5.84167 8.5L7.46667 7.11667C7.69167 6.88333 7.75833 6.55833 7.66667 6.26667C7.35833 5.34167 7.2 4.35 7.2 3.325C7.2 2.875 6.825 2.5 6.375 2.5H3.49167C3.04167 2.5 2.5 2.7 2.5 3.325C2.5 11.0667 8.94167 17.5 16.675 17.5C17.2667 17.5 17.5 16.975 17.5 16.5167V13.6417C17.5 13.1917 17.125 12.8167 16.675 12.8167Z"
                                    fill="#808080"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="input"
                            className="text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  bg-white text-gray-700 border border-collapse border-[#fb9400]  py-3 px-8 leading-tight focus:outline-none focus:bg-white dark:focus:border-blue-500"
                            placeholder="Nhap so dien thoai"
                        />
                    </div>

                    <div className="relative mx-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 6L9 9.75L3 6V4.5L9 8.25L15 4.5V6Z"
                                    fill="#808080"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="input"
                            className="text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  bg-white text-gray-700 border border-collapse border-[#fb9400]  py-3 px-8 leading-tight focus:outline-none focus:bg-white dark:focus:border-blue-500"
                            placeholder="Email"
                        />
                    </div>

                    <div className="relative mx-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    d="M15.4688 14.6953H2.53125C2.22012 14.6953 1.96875 14.9467 1.96875 15.2578V15.8906C1.96875 15.968 2.03203 16.0312 2.10938 16.0312H15.8906C15.968 16.0312 16.0312 15.968 16.0312 15.8906V15.2578C16.0312 14.9467 15.7799 14.6953 15.4688 14.6953ZM4.52988 13.2188C4.56504 13.2188 4.6002 13.2152 4.63535 13.21L7.59199 12.6914C7.62715 12.6844 7.66055 12.6686 7.68516 12.6422L15.1365 5.19082C15.1528 5.17456 15.1657 5.15524 15.1746 5.13398C15.1834 5.11271 15.1879 5.08992 15.1879 5.06689C15.1879 5.04387 15.1834 5.02108 15.1746 4.99981C15.1657 4.97855 15.1528 4.95923 15.1365 4.94297L12.215 2.01973C12.1816 1.98633 12.1377 1.96875 12.0902 1.96875C12.0428 1.96875 11.9988 1.98633 11.9654 2.01973L4.51406 9.47109C4.4877 9.49746 4.47187 9.5291 4.46484 9.56426L3.94629 12.5209C3.92919 12.6151 3.9353 12.712 3.96409 12.8033C3.99288 12.8945 4.04349 12.9774 4.11152 13.0447C4.22754 13.1572 4.37344 13.2188 4.52988 13.2188Z"
                                    fill="#808080"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="input"
                            className="text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  bg-white text-gray-700 border border-collapse border-[#fb9400]  py-3 px-8 leading-tight focus:outline-none focus:bg-white dark:focus:border-blue-500"
                            placeholder="Nội dung tư vấn"
                        />
                    </div>
                </div>
            </div>
            <nav className="justify-normal text-center">
                <button
                    type="button"
                    className="text-white bg-[#fb9400] hover:bg-yellow-500 font-bold rounded-lg text-bold sm:text-sm px-3 py-2 m-5"
                >
                    Gửi thông tin
                </button>
            </nav>
        </div>
    );
};
export default Consultation;
