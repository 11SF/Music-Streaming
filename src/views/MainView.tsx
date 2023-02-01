import { Layout, Space } from "antd";
import MainList from "../components/slider/mainList";
import PlaylistList from "../components/slider/playlistList";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./ContentPage/Home";
const { Header, Footer, Sider, Content } = Layout;

const mainStyle: React.CSSProperties = {
  height: "100vh",
  minHeight: "400px",
  minWidth: "800px",
  position: "relative",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  width: "30rem",
  height: "100%",
};
const siderStyle2: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  height: "100%",
};

const siderContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  height: "100%",
  width: "100%",
};

const contentStyle: React.CSSProperties = {
  // padding: "1.5rem"
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
  height: "13rem"
};

function MainView() {
  return (
    <Layout style={mainStyle}>
      <Layout>
        <Sider style={siderStyle} theme={"light"} width={"15rem"}>
          <div style={siderContainer}>
            <MainList />
            <PlaylistList />
          </div>
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
        </Layout>
        {/* <Sider style={siderStyle}>Sider</Sider> */}
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default MainView;
