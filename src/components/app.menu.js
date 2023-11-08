
import React from 'react';
import { Menu } from 'antd';
import avataUser from '../Vector/account_circle.svg'
import logomenu from '../Vector/logoMenuMobile.svg'
// import { useEffect } from 'react';



export function HeaderMenu() {
    // const childrenMenu = []
    // useEffect(() => {

    // })
    const itemsMenu = [
        {
            label: 'TRANG CHỦ',
            key: "1",
            onClick: () => {

                window.location.href = '#';
            },
        },
        {
            label: "CHƯƠNG TRÌNH ĐÀO TẠO ANH NGỮ",
            // key: "2",
            // onClick: () => {

            //   window.location.href = '#';
            // },
            children: [
                {
                    label: "Luyện thi TOEIC",
                    key: "2",
                    onClick: () => {

                        window.location.href = '#';
                    },
                },
                {
                    label: "Luyện thi IELTS",
                    key: "3",
                    onClick: () => {

                        window.location.href = '#';
                    },
                },
                {
                    label: "Luyện thi APTIS",
                    // key: "4",
                    // onClick: () => {

                    //   window.location.href = '#';
                    // },
                    children: [
                        {
                            label: "Luyên thi APTIS B1",
                            key: "4",
                            conclick: () => {

                            }
                        },

                        {
                            label: "Luyện thi APTIS B2",
                            key: "5",
                            onclick: () => {

                            }
                        },

                    ]
                },

                {
                    label: "Luyện thi VSTEP",
                    children: [
                        {
                            label: "Luyện thi VSTEP B1",
                            key: "6",
                            onclick: () => {

                            }
                        },
                        {
                            label: "Luyện thi VSTEP B2",
                            key: "7",
                            onclick: () => {

                            }
                        }
                    ]
                }
            ],
        },
        {
            label: "LỊCH THI",
            key: "8",
            onClick: () => {

                window.location.href = '#';
            },
        },
        {
            label: "LỊCH ÔN TẬP",
            key: "9",
            onClick: () => {

                window.location.href = '#';
            },
        },
        {
            label: "TIN TỨC",
            key: "10",
            onClick: () => {

                window.location.href = '#';
            },
        },
        {
            label: "THI THỬ",
            // key: "8",
            children: [
                {
                    label: "Thi thư TOEIC",
                    key: "11",
                    onClick: () => {

                        window.location.href = '/toeic';
                    }
                },
                {
                    label: "Thi thư VSTEP",
                    key: "12",
                    onClick: () => {

                        window.location.href = '/vstep';
                    }
                }
            ],
        },
        {
            label: "ĐĂNG KÝ TƯ VẤN",
            key: "13",
            onClick: () => {

                window.location.href = '#';
            },
        },
    ]

    const itemsUser = [
        {
            label: <img
                src={avataUser}
                className='h-8 w-8 my-auto'
                alt="" />,
            children: [
                {
                    label: "My Profile",
                    key: '14',
                    conclick: () => {
                        window.location.href = '#';
                    }
                },
                {
                    label: "Edit Profile",
                    key: '15',
                    onclick: () => {
                        window.location.href = '#'
                    }
                },
                {
                    label: "Inbox",
                    key: "16",
                    onclick: () => {
                        window.location.href = "#"
                    }
                },
                {
                    label: "Help",
                    key: "17",
                    onclick: () => {
                        window.location.href = "#"
                    }
                },
                {
                    label: "Sign Out",
                    key: "18",
                    onclick: () => {
                        window.location.href = "#"
                    }
                }

            ]
        }
    ]
    const itemsMobile = [
        {
            label:
                <img
                    src={logomenu}
                    className='h-6 w-6'
                    alt="" />,
            key: "",
            children: itemsMenu
        },
    ]
    return (
        <nav className="shadow-md">
            {/* <nav class="mx-auto block border shadow-md backdrop-blur-2xl backdrop-saturate-200"> */}
            <div className="container justify-between mx-auto flex items-center text-gray-900 my-1">
                <a
                    href="#"
                    class="block cursor-pointer leading-normal antialiased"
                >
                    <svg className="w-48 my-1" viewBox="0 0 211 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4998 26.3062V20.2805L27.7132 15.0322L33.9164 18.1423L16.4998 26.3062Z" fill="#FB9400" />
                        <path d="M27.6201 0L50.917 11.0347L40.5895 15.961L27.6201 9.85245L10.3275 18.1285V34.8777L27.6201 43.3508L45.393 34.8777V28.3751L29.0611 36.06L19.6943 31.7249L55 14.9757V39.6069L27.6201 52.6121L0 39.6069V13.2023L27.6201 0Z" fill="#FB9400" />
                        <path d="M69.52 12.72H86.24V15.8H72.88V24.52H85.28V27.52H72.88V36.92H86.64V40H69.52V12.72ZM103.667 22.88C102.707 22.6133 101.96 22.4533 101.427 22.4C100.893 22.32 100.347 22.28 99.7866 22.28C98.6666 22.28 97.7066 22.48 96.9066 22.88C96.1066 23.28 95.4399 23.84 94.9066 24.56C94.3999 25.2533 94.0266 26.0667 93.7866 27C93.5466 27.9067 93.4266 28.88 93.4266 29.92C93.4266 30.8533 93.5199 31.7867 93.7066 32.72C93.9199 33.6533 94.2399 34.4933 94.6666 35.24C95.0932 35.9867 95.6132 36.5867 96.2266 37.04C96.8399 37.4933 97.5732 37.72 98.4266 37.72C99.0132 37.72 99.6132 37.6133 100.227 37.4C100.867 37.1867 101.453 36.9467 101.987 36.68C102.52 36.3867 103.08 36.0267 103.667 35.6V22.88ZM103.707 38.4C103.093 38.8267 102.493 39.1867 101.907 39.48C101.347 39.7467 100.72 39.9867 100.027 40.2C99.3599 40.4133 98.7066 40.52 98.0666 40.52C95.5599 40.52 93.5866 39.64 92.1466 37.88C90.7332 36.0933 90.0266 33.4933 90.0266 30.08C90.0266 28.0533 90.3466 26.36 90.9866 25C91.6532 23.64 92.4799 22.56 93.4666 21.76C94.4532 20.9333 95.5066 20.3467 96.6266 20C97.7732 19.6533 98.8266 19.48 99.7866 19.48C100.267 19.48 100.773 19.52 101.307 19.6C101.84 19.6533 102.627 19.8133 103.667 20.08V10.04L106.867 9.68V36.36C106.867 36.7333 106.867 37.1333 106.867 37.56C106.893 37.96 106.92 38.36 106.947 38.76C107 39.16 107.053 39.5733 107.107 40L104.027 40.32L103.707 38.4ZM124.709 37.8H124.629C124.389 37.9867 124.042 38.24 123.589 38.56C123.136 38.8533 122.616 39.1467 122.029 39.44C121.442 39.7333 120.789 39.9867 120.069 40.2C119.376 40.4133 118.669 40.52 117.949 40.52C116.962 40.52 116.122 40.3867 115.429 40.12C114.736 39.88 114.176 39.4667 113.749 38.88C113.322 38.2933 113.016 37.52 112.829 36.56C112.642 35.6 112.549 34.4 112.549 32.96V19.88H115.749V32.48C115.749 33.28 115.762 34 115.789 34.64C115.816 35.28 115.909 35.8267 116.069 36.28C116.229 36.7333 116.482 37.0933 116.829 37.36C117.202 37.6 117.722 37.72 118.389 37.72C119.082 37.72 119.802 37.5733 120.549 37.28C121.296 36.9867 121.976 36.6533 122.589 36.28C123.309 35.8533 124.016 35.3733 124.709 34.84V19.88H127.909V37.4C127.936 38.36 128.002 39.2267 128.109 40L124.949 40.32L124.709 37.8ZM148.324 16.48C147.684 16.32 147.017 16.1733 146.324 16.04C145.71 15.9067 145.004 15.8 144.204 15.72C143.43 15.6133 142.617 15.56 141.764 15.56C139.79 15.56 138.377 15.8667 137.524 16.48C136.67 17.0667 136.244 17.9867 136.244 19.24C136.27 20.2267 136.63 21.0667 137.324 21.76C138.017 22.4267 138.884 23.0533 139.924 23.64C140.964 24.2 142.097 24.76 143.324 25.32C144.577 25.8533 145.724 26.48 146.764 27.2C147.804 27.8933 148.67 28.72 149.364 29.68C150.084 30.6133 150.444 31.76 150.444 33.12C150.444 34.6933 150.097 35.96 149.404 36.92C148.737 37.88 147.884 38.6267 146.844 39.16C145.804 39.6933 144.657 40.0533 143.404 40.24C142.177 40.4267 141.004 40.52 139.884 40.52C138.817 40.52 137.844 40.4533 136.964 40.32C136.084 40.1867 135.324 40.04 134.684 39.88C133.937 39.6933 133.257 39.48 132.644 39.24L133.444 36C134.057 36.2667 134.71 36.4933 135.404 36.68C136.017 36.84 136.697 36.9867 137.444 37.12C138.217 37.2533 139.03 37.32 139.884 37.32C140.924 37.32 141.87 37.2533 142.724 37.12C143.604 36.9867 144.364 36.7733 145.004 36.48C145.644 36.1867 146.137 35.8 146.484 35.32C146.857 34.84 147.044 34.2533 147.044 33.56C147.017 32.52 146.67 31.68 146.004 31.04C145.364 30.3733 144.497 29.7467 143.404 29.16C142.337 28.5467 141.177 27.96 139.924 27.4C138.697 26.84 137.564 26.2 136.524 25.48C135.484 24.76 134.604 23.9067 133.884 22.92C133.19 21.9333 132.844 20.7067 132.844 19.24C132.844 18.3867 132.99 17.5467 133.284 16.72C133.577 15.8933 134.07 15.16 134.764 14.52C135.484 13.88 136.404 13.36 137.524 12.96C138.67 12.56 140.084 12.36 141.764 12.36C142.724 12.36 143.63 12.4133 144.484 12.52C145.364 12.6 146.124 12.6933 146.764 12.8C147.51 12.9333 148.217 13.08 148.884 13.24L148.324 16.48ZM158.873 13.88V19.88H164.673V22.48H158.873V33.16C158.873 34.04 158.886 34.7733 158.913 35.36C158.966 35.9467 159.059 36.4133 159.193 36.76C159.326 37.1067 159.513 37.36 159.753 37.52C159.993 37.6533 160.299 37.72 160.673 37.72C161.686 37.6933 162.859 37.32 164.193 36.6L165.153 39.04C164.273 39.6267 163.446 40.0133 162.673 40.2C161.926 40.4133 161.179 40.52 160.433 40.52C158.673 40.52 157.433 40.0267 156.713 39.04C156.019 38.0267 155.673 36.36 155.673 34.04V22.48H151.993V19.88H155.673V14.28L158.873 13.88ZM179.963 30.76C179.429 30.7867 178.923 30.8133 178.443 30.84C177.963 30.8667 177.483 30.9067 177.003 30.96C176.549 30.9867 176.136 31.0267 175.763 31.08C173.843 31.32 172.483 31.7467 171.683 32.36C170.883 32.9467 170.483 33.8 170.483 34.92C170.483 35.8533 170.763 36.56 171.323 37.04C171.909 37.4933 172.669 37.72 173.603 37.72C174.883 37.72 176.016 37.5067 177.003 37.08C178.016 36.6267 179.003 36.04 179.963 35.32V30.76ZM179.923 38.12C178.669 38.84 177.496 39.4267 176.403 39.88C175.336 40.3067 174.176 40.52 172.923 40.52C171.136 40.52 169.709 40.0933 168.643 39.24C167.603 38.36 167.083 36.92 167.083 34.92C167.083 33.88 167.349 32.9733 167.883 32.2C168.416 31.4267 169.109 30.7867 169.963 30.28C170.843 29.7467 171.829 29.3333 172.923 29.04C174.016 28.7467 175.136 28.56 176.283 28.48C176.763 28.4267 177.389 28.3867 178.163 28.36C178.936 28.3067 179.536 28.2667 179.963 28.24C179.963 27.3067 179.936 26.48 179.883 25.76C179.829 25.0133 179.669 24.3867 179.403 23.88C179.136 23.3467 178.736 22.9467 178.203 22.68C177.696 22.4133 176.963 22.28 176.003 22.28C175.229 22.28 174.483 22.3333 173.763 22.44C173.043 22.52 172.403 22.6133 171.843 22.72C171.176 22.8533 170.563 23 170.003 23.16L169.363 20.4C170.029 20.24 170.749 20.0933 171.523 19.96C172.189 19.8267 172.963 19.72 173.843 19.64C174.723 19.5333 175.669 19.48 176.683 19.48C178.043 19.48 179.136 19.68 179.963 20.08C180.816 20.48 181.469 21.0267 181.923 21.72C182.403 22.3867 182.723 23.16 182.883 24.04C183.069 24.8933 183.163 25.8 183.163 26.76V36.36C183.163 36.7333 183.163 37.1333 183.163 37.56C183.189 37.96 183.216 38.36 183.243 38.76C183.296 39.16 183.349 39.5733 183.403 40L180.323 40.32L179.923 38.12ZM188.842 23.12C188.842 22.5067 188.775 21.5467 188.642 20.24L191.602 19.84L191.922 22.76H191.962C192.442 22.1467 192.909 21.6133 193.362 21.16C193.815 20.7067 194.282 20.32 194.762 20C195.269 19.6533 195.749 19.48 196.202 19.48C196.815 19.4533 197.669 19.52 198.762 19.68L198.042 22.76C197.162 22.6 196.549 22.5333 196.202 22.56C195.749 22.56 195.269 22.7733 194.762 23.2C194.255 23.6267 193.815 24.08 193.442 24.56C192.962 25.1467 192.495 25.8133 192.042 26.56V40H188.842V23.12Z" fill="black" />
                    </svg>
                </a>
                <div className='lg:block hidden'>
                    <Menu
                        className="text-xs items-center font-bold border-none "
                        mode="horizontal"
                        items={itemsMenu}
                    ></Menu>
                </div>

                <div className='flex items-center'>
                    <Menu
                        className="border-none"
                        // className="lg:hidden mt-4"
                        mode="horizontal"
                        items={itemsUser}

                    ></Menu>
                    <div className='lg:hidden block'>
                        <Menu
                            className="font-[500] items-center border-none"
                            mode="horizontal"
                            items={itemsMobile}
                        ></Menu>
                    </div>
                </div>
            </div>
        </nav>
    )
}