import {
  CaretRightOutlined,
  ClockCircleOutlined,
  HeartFilled,
  HeartOutlined,
  PauseOutlined,
} from "@ant-design/icons";
import { Table, Typography, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Text, Title, Paragraph } = Typography;
export default function SongList() {
  const [rowSelected, setRowSelected] = useState(-999);
  const [playingId, setPlayingId] = useState("");
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const tempData = [
    {
      key: "1",
      id: "song#1",
      title: {
        name: "Song name #1",
        artist: "artist 1, artist 2",
      },
      album: "Album #1",
      date_added: "10 days ago",
      liked: false,
      duration: "3:15",
    },
    {
      key: "2",
      id: "song#2",
      title: {
        name: "Song name #2",
        artist: "artist 1, artist 2",
      },
      album: "Album #2",
      date_added: "10 days ago",
      liked: true,
      duration: "3:15",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      width: 60,
      render: (data: any, record: any) => (
        <div style={{ width: "1rem" }}>
          {playingId === record.id ? (
            <PauseOutlined
              onClick={() => {
                setPlayingId("");
              }}
            />
          ) : rowSelected === record.key - 1 ? (
            <CaretRightOutlined
              onClick={() => {
                setPlayingId(record.id);
              }}
            />
          ) : (
            <p>{data}</p>
          )}
        </div>
      ),
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
      width: 800,
      render: (data: any, record: any) => (
        <div
          style={{ padding: 0, display: "flex", gap: "1rem", height: "auto" }}
        >
          <img
            style={{ height: "50px" }}
            src="https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17"
          />
          <div>
            <p style={playingId === record.id ? { color: "green" } : {}}>
              {data.name}
            </p>
            <p>{data.artist}</p>
          </div>
        </div>
      ),
    },
    {
      title: "ALBUM",
      dataIndex: "album",
      key: "album",
      width: 800,
    },
    {
      title: "DATE ADDED",
      dataIndex: "date_added",
      key: "date_added",
      width: 200,
    },
    {
      title: "",
      dataIndex: "liked",
      key: "liked",
      width: 100,
      render: (liked: any, record: any) => (
        <div>
          {liked ? (
            <HeartFilled
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => (record.liked = false)}
            />
          ) : (
            <HeartOutlined
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => (record.liked = true)}
            />
          )}
        </div>
      ),
    },
    {
      title: <ClockCircleOutlined />,
      dataIndex: "duration",
      key: "duration",
      width: 200,
    },
  ];

  const [dataSource, setDataSource] = useState(tempData);
  return (
    <div
      style={{
        height: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
        // backgroundColor: colorBgContainer,
      }}
    >
      <section
        style={{
          backgroundColor: colorBgContainer,
          display: "flex",
          justifyContent: "start",
          padding: "3rem 2rem 2rem 2rem",
          height: "20rem",
        }}
      >
        <img
          style={{}}
          src="https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17"
        />
        <div
          style={{
            // backgroundColor: "blue",
            flex: "1",
            paddingLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              //   backgroundColor: "red",
            }}
          >
            <Text style={{ position: "absolute" }} strong>
              PUBLIC PLAYLIST
            </Text>
            <Title>Playlist Name</Title>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Paragraph>
              <a>Artist List</a>, <a>Lorem, ipsum dolor</a>,{" "}
              <a>Lorem, ipsum dolor</a>. and more
            </Paragraph>
            <Paragraph>
              Made for <a>nsfolk</a> 50 songs, 3 hr 3 min
            </Paragraph>
          </div>
        </div>
      </section>
      {/* <Divider /> */}
      <section
        style={{
          // backgroundColor: colorBgContainer,
          padding: "3rem 2rem 2rem 2rem",
          height: "20rem",
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          size="large"
          pagination={false}
          onRow={(record, rowIndex) => {
            return {
              onMouseEnter: (event) => {
                setRowSelected(rowIndex ?? -999);
              }, // mouse enter row
              onMouseLeave: (event) => {
                setRowSelected(-999);
              }, // mouse leave row
              onClick: (event) => {
                // navigate("/")
              },
              onDoubleClick: (event) => {
                setPlayingId(record.id);
              },
            };
          }}
        />
        ;
      </section>
    </div>
  );
}
