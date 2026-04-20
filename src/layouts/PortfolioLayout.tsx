import { Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const navItems: MenuProps["items"] = [
  { key: "/", label: <Link to="/">Home</Link> },
  { key: "/projects", label: <Link to="/projects">Projects</Link> },
  { key: "/about", label: <Link to="/about">About</Link> },
  { key: "/contact", label: <Link to="/contact">Contact</Link> },
];

export function PortfolioLayout() {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="app-header">
        <Typography.Title level={4} style={{ color: "#fff", margin: 0 }}>
          Sona Portfolio
        </Typography.Title>
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[location.pathname]}
          items={navItems}
          style={{ flex: 1, minWidth: 320, justifyContent: "flex-end" }}
        />
      </Header>
      <Content className="page-content">
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Portfolio Starter with React, TypeScript, Vite and Ant Design
      </Footer>
    </Layout>
  );
}
