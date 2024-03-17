import React from 'react'
import { Menu } from 'antd'
import { FaListUl } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MenuList = () => {
    const navigate = useNavigate()
    return (
        <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['dashboard']}
                onClick={({key}) => {
                    navigate(key)
                }}
                items={[
                    {
                    key: 'dashboard',
                    icon: <RxDashboard size={20} />,
                    label: 'داشبورد',
                    },
                    {
                    key: 'activity',
                    icon: <IoCloudUploadOutline size={20} />,
                    label: 'سامانه پاسخگویی اضطراری',
                    children: [
                        {
                        key: 'information',
                        icon: <CiSettings size={20}/>,
                        label: 'اطلاعت پایه',
                        },
                        {
                        key: 'guard',
                        icon: <FaListUl size={20}/>,
                        label: 'ثبت کشیک',
                        },
                        {
                        key: 'manageguard',
                        icon: <MdManageAccounts size={20}/>,
                        label: 'مدیریت کشیک',
                        },
                        {
                        key: 'activity',
                        icon: <CgDanger size={20}/>,
                        label: 'فعالیت اضطراری',
                        }
                    ]
                    }
                ]}
                />
    )
}

export default MenuList