import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PropType {
  id: string;
  title: string;
  imgSrc: string;
}
const cardStyle: React.CSSProperties = {
  width: "100%",
  height: "5rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
  textAlign: "start",
  fontSize: "1.1rem",
  cursor: "pointer",
};

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "5rem",
  padding: "0 1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  flex: 1,
};

export default function LandscapeCard({ id, title, imgSrc }: PropType) {
  const [playing, setPlaying] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
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
      <img src={imgSrc} style={{ height: "100%" }} />
      <div style={containerStyle}>
        <p>{title}</p>
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
            onClick={() => {
              setPlaying(!playing);
            }}
          ></Button>
        ) : null}
      </div>
    </div>
  );
}
