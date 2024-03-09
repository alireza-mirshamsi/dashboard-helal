import { Menu } from "antd"
import { FaHome, FaChartBar  } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineLocalActivity  } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TiChartBarOutline } from "react-icons/ti";


const MenuList = () => {
    return (
        <Menu className="relative h-[90vh] flex-col" mode="inline">
            <Menu.Item key="home" icon={<FaHome size={20} />}>خانه</Menu.Item>
            <Menu.Item key="dashboard" icon={<AiFillAppstore size={20} />}>داشبورد</Menu.Item>
            <Menu.Item key="activity" icon={<FaChartBar size={20} />}>فعالیت</Menu.Item>
            <Menu.SubMenu key="subtasks" icon={<TiChartBarOutline size={20} />} title="پیشرفت کار">
                <Menu.Item className="font-Dana" key='task-1'>کار 1</Menu.Item>
                <Menu.Item className="font-Dana" key='task-2'>کار 2</Menu.Item>
                <Menu.Item className="font-Dana" key='task-3'>کار 3</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="home" icon={<MdOutlinePayment size={20} />}>پرداخت</Menu.Item>
            <Menu.Item key="home" icon={<IoSettingsOutline size={20} />}>تنظیمات</Menu.Item>
        </Menu>
    )
}

export default MenuList