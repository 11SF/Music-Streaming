import { Layout, theme } from "antd";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import MainList from "../components/slider/mainList";
import PlaylistList from "../components/slider/playlistList";
import Home from "./ContentPage/Home";
import SongList from "./ContentPage/SongList";
import Search from "./ContentPage/Search";
import Player from "../components/player/Player";
const { Header, Footer, Sider, Content } = Layout;

function MainView() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    backgroundColor: colorBgContainer,
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
    backgroundColor: colorBgContainer,
    height: "100%",
    maxHeight: "92px",
    padding: "0",
    // position: "absolute",
    // bottom: "0",
    // width: "100%",
  };

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
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlist/:playlistId" element={<SongList />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Content>
        </Layout>
        {/* <Sider style={siderStyle}>Sider</Sider> */}
      </Layout>
      <Footer style={footerStyle}>
        <Player />
      </Footer>
    </Layout>
  );
}

export default MainView;
