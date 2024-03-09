import React from "react";
import logo from '../../../public/images/logo-big.png';
import { Link, NavLink } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapLeft  } from "react-icons/ai";


const Login = () => {
    return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="w-auto" src={logo} alt="هلال احمر" />
            {/* <span className="text-xs">سازمان امداد و نجات هلال احمر</span> */}
            <p className="text-base"> سامانه یکپارچه مدیریت اطلاعات سازمان امداد و نجات (RAROMIS) </p>
        </div>

        <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ورود به سامانه</h2>
            <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">نام کاربری:</label>
                <div class="mt-2 flex">
                    <FaUserShield className="mt-2 ml-2" />
                    <input id="username" name="username" type="text" required class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">رمز عبور:</label>
                <div class="text-sm">
                    <a href="#" class="text-red-600 hover:text-red-500">رمز عبور را فراموش کرده‌ام</a>
                </div>
                </div>
                <div class="mt-2 flex">
                    <BsFillShieldLockFill className="mt-2 ml-2"/>
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <Link to={"/dashboard"}>
                <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                    ورود
                    <AiOutlineSwapLeft className="text-lg mr-2"/>
                </button>
                </Link>
            </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
            کلیه حقوق مادی و معنوی این سامانه، متعلق به سازمان امدادونجات جمعیت هلال احمر جمهوری اسلامی ایران می باشد. 
            <a href="#" class="mr-3 text-red-600 hover:text-red-500">هلال احمر</a>
            </p>
        </div>
    </div>
    )
}

export default Login