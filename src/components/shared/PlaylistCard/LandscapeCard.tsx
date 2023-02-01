import { Avatar, Button, Card, Layout } from "antd";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import React from "react";

interface PropType {
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

export default function LandscapeCard({ title, imgSrc }: PropType) {
  return (
    <div style={cardStyle}>
      <img src={imgSrc} style={{ height: "100%" }} />
      <div style={containerStyle}>
        <p>{title}</p>
        <Button
          shape="circle"
          icon={<CaretRightOutlined />}
          size="large"
          type="primary"
          color="1DB954"
        ></Button>
      </div>
    </div>
  );
}
