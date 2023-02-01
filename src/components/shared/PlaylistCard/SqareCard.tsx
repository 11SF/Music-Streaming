import { Button } from "antd";
import React from "react";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";

interface PropType {
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

export default function SqareCard({ title, imgSrc }: PropType) {
  return (
    <div style={cardStyle}>
      <div style={{ width: "auto", height: "auto", position: "relative" }}>
        <img
          src={imgSrc}
          style={{ width: "100%", position: "relative", borderRadius: "10px" }}
        />
        <Button
          shape="circle"
          icon={<CaretRightOutlined />}
          size="large"
          type="primary"
          color="1DB954"
          style={{ position: "absolute", right: 10, bottom: 10 }}
        ></Button>
      </div>

      <div style={containerStyle}>
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
}
