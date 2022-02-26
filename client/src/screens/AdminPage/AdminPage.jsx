import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import LogoImage from '../../images/logo.png';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './index.css'
import { FiUsers, FiShoppingBag } from 'react-icons/fi'
import { IoNewspaperOutline } from 'react-icons/io5'
import { RiContactsBookLine } from 'react-icons/ri'
import EditableTable from '../../components/Table/Table';
import UserMenu from './UserMenu';
import ProductsMenu from './ProductsMenu';
import NewsMenu from './NewsMenu';
import ContactMenu from './ContactMenu';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminPage = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [page, setPage] = useState("1")
    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
        // this.setState({ collapsed });
    };
    const onSelectMenu = (page) => {
        setPage(page.key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <img src={LogoImage} alt="img-logo" className='logo' />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={onSelectMenu}>
                    <Menu.Item key="1" icon={<FiUsers />}>
                        User
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FiShoppingBag />}>
                        Products
                    </Menu.Item>


                    <Menu.Item key="3" icon={<IoNewspaperOutline />}>
                        News
                    </Menu.Item>
                    <Menu.Item key="4" icon={<RiContactsBookLine />}>
                        Contact
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '16px' }}>

                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, height: "100%" }}>
                        {page === "1" && <UserMenu />}
                        {page === "2" && <ProductsMenu />}
                        {page === "3" && <NewsMenu />}
                        {page === "4" && <ContactMenu />}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
