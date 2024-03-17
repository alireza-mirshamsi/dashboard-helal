import React, { useState } from "react"
import { Outlet } from "react-router-dom";
import { Button, Layout, Dropdown, Drawer, Space } from "antd"
import { CiUser } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline, IoCalendarOutline, IoChevronDown  } from "react-icons/io5";
import logo from "../../public/images/helal.png"
import { HiOutlineBars3BottomRight, HiOutlineBars3BottomLeft  } from "react-icons/hi2";
import MenuList from "./MenuList";

const {Header, Content, Sider} = Layout

const items = [
  {
    label: <a href="#">پروفایل کاربری</a>,
    icon: <CiUser size={17}/>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: 'خروج',
    icon: <IoLogOutOutline size={17} />,
    key: '2',
  },
];

const MainLayout = () => {
    const [collapsed, setcollapsed] = useState(false)
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    }; 
    return (
        <Layout>
          <Sider className="hidden lg:block" trigger={null} collapsible collapsed={collapsed}>
            <div className="flex justify-around items-center">
              <div className="w-[180px] py-2 lg-logo">
                <img src={logo} alt="" />
              </div>
              <Button
                className="flex items-center justify-center text-gray-100 text-lg w-[40px] h-[40px] rounded-md"
                type="text"
                icon={collapsed ? <HiOutlineBars3BottomRight size={25} /> : <HiOutlineBars3BottomLeft size={25} />}
                onClick={() => setcollapsed(!collapsed)}
              />
            </div>
            <MenuList />
          </Sider>
          <Layout>
            <Header className="bg-white p-0 z-50 flex justify-between items-center">
              <Button className="flex lg:hidden items-center justify-center mr-4 text-slate-700 text-lg w-[40px] h-[40px] rounded-md" type="link" icon={<HiOutlineBars3BottomRight size={25} />} onClick={showDrawer} />
              <Drawer placement="right" onClose={onClose} open={open}>
                <MenuList />
              </Drawer>
              <div><h2 className="hidden lg:block font-bold lg:pr-4 text-base text-red-500">سامانه مدیریت اطلاعات سازمان جوانان جمعیت هلال احمر </h2></div>
              <div className="flex gap-x-5 items-center pl-6">
                <div className="relative cursor-pointer">
                  <div className="absolute bottom-auto top-0 right-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-red-600">1</div>
                  <div><IoIosNotificationsOutline size={25} /></div>
                </div>
                <div className="cursor-pointer">
                  <Dropdown menu={{items}} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}><span className="flex items-center"> علیرضا میرشمسی <IoChevronDown className="pr-2" size={20} /> </span></a>
                  </Dropdown>
                </div>
                <div className="cursor-pointer"><AiOutlineMessage size={25}/></div>
                <div className="cursor-pointer"> <IoCalendarOutline size={25} /></div>
                <div className="cursor-pointer"><IoLogOutOutline size={25} /></div>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: "white",
                borderRadius: 15,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
    </Layout>
    )
}

export default MainLayout

