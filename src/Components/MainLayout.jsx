import { useState } from "react"
import { Outlet } from "react-router-dom";
import { Button, Layout, Menu, Dropdown, Space } from "antd"
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSettings, CiUser } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCloudUploadOutline, IoLogOutOutline, IoCalendarOutline, IoChevronDown  } from "react-icons/io5";
import logo from "../../public/images/logo-big.png"
import logoSm from "../../public/images/logo-sm.png"
import { LuChevronFirst, LuChevronLast  } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout

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
    const navigate = useNavigate()
    return (
        <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={logo} className="lg-logo" alt="" />
          <img src={logoSm} className="sm-logo" alt="" />
        </div>
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
                  key: 'activity',
                  icon: <CiSettings size={20}/>,
                  label: 'ثبت کشیک',
                },
                {
                  key: 'activity',
                  icon: <CiSettings size={20}/>,
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
      </Sider>
      <Layout>
        <Header className="bg-white p-0 flex justify-between items-center">
          <Button
            className="flex items-center justify-center mr-3 bg-gray-200 text-lg w-[40px] h-[40px] rounded-md"
            type="text"
            icon={collapsed ? <LuChevronFirst /> : <LuChevronLast />}
            onClick={() => setcollapsed(!collapsed)}
          />
          <div><h2 className="font-bold text-base text-red-500">سامانه یکپارچه مدیریت اطلاعات سازمان امداد و نجات (RAROMIS)</h2></div>
          <div className="flex gap-x-5 items-center pl-6">
            <div className="relative cursor-pointer">
              <div className="absolute bottom-auto top-0 right-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-red-600">1</div>
              <div><IoIosNotificationsOutline size={25} /></div>
            </div>
            <div className="cursor-pointer">
              <Dropdown menu={{items}} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}><span className="flex items-center"> علیرضا میرشمسی <IoChevronDown size={18} /> </span></a>
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

