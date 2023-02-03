import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React, { useState } from "react";
const { Paragraph } = Typography;
import { useNavigate } from "react-router-dom";
interface PropType {
  id: string
  title: string;
  imgSrc: string;
}
const cardStyle: React.CSSProperties = {
  width: "100%",
  //   height: "18vw",
  // minWidth: "180px",
  // minHeight: "275px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  textAlign: "start",
  fontSize: "1.1rem",
  position: "static",
  color: "#000",
  cursor: "pointer",
};

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  padding: "1rem 0 0 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: "1rem",
  flex: 1,
  overflow: "hidden",
};

export default function SqareCard({ id, title, imgSrc }: PropType) {
  const [playing, setPlaying] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [rows, setRows] = useState(2);
  const navigate = useNavigate();
  return (
    <div
      style={cardStyle}
      onMouseOver={() => {
        setCardHover(true);
      }}
      onMouseLeave={() => {
        setCardHover(false);
      }}
      onClick={() => {
        if (cardHover) {
          if (btnHover) {
            setPlaying(!playing);
          } else {
            navigate(`/playlist/${id}`);
          }
        }
      }}
    >
      <div style={{ width: "auto", height: "auto", position: "relative" }}>
        <img
          src={imgSrc}
          style={{ width: "100%", position: "relative", borderRadius: "10px" }}
        />
        {cardHover || playing ? (
          <Button
            shape="circle"
            icon={playing ? <PauseOutlined /> : <CaretRightOutlined />}
            size="large"
            type="primary"
            color="1DB954"
            onMouseOver={() => {
              setBtnHover(true);
            }}
            onMouseLeave={() => {
              setBtnHover(false);
            }}
            style={{ position: "absolute", right: 10, bottom: 10 }}
          ></Button>
        ) : null}
      </div>

      <div style={containerStyle}>
        <h1>{title}</h1>
        <Paragraph ellipsis={{ rows }}>
          Lorem ipsum dolor sit amet consectetur.
        </Paragraph>
      </div>
    </div>
  );
}
