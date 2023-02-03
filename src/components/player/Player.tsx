import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  PlayCircleFilled,
  SwapOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  RetweetOutlined,
  SoundOutlined,
  ArrowsAltOutlined,
  UnorderedListOutlined,
  DesktopOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Button, Progress, Slider, Typography, theme } from "antd";

export default function Player() {
  // const [rows, setRows] = useState(1);
  const [value, setValue] = useState(0);

  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <div
      style={{
        // backgroundColor: "red",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 0.7rem 0.7rem 0.7rem",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "start",
          gap: "1rem",
          //   backgroundColor: "blue",
          flex: "0.8",
          //   width: "10rem",
        }}
      >
        <img
          style={{
            height: "100%",
          }}
          src="https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17"
        />
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            // backgroundColor: "pink",
            // flex: 1,
            // maxWidth: "9rem",
          }}
        >
          <Typography.Link strong>Lorem ipsum dolor.</Typography.Link>
          <Typography.Text>Lorem, ipsum dolor.</Typography.Text>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "pink",
          }}
        >
          <HeartOutlined />
        </div>
      </div>
      <div
        style={{
          flex: "1.4",
          height: "100%",
          padding: "0 1rem",
          //   backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button
            shape="circle"
            type="ghost"
            size="middle"
            icon={<SwapOutlined />}
          />
          <Button
            shape="circle"
            type="ghost"
            size="middle"
            icon={<StepBackwardFilled />}
          />
          <Button
            shape="circle"
            type="ghost"
            size="large"
            icon={
              <PlayCircleFilled
                style={{ fontSize: "150%", color: colorPrimary }}
              />
            }
          />
          <Button
            shape="circle"
            type="ghost"
            size="middle"
            icon={<StepForwardFilled />}
          />
          <Button
            shape="circle"
            type="ghost"
            size="middle"
            icon={<RetweetOutlined />}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography.Text>0.00</Typography.Text>
          <Slider
            style={{ width: "70%" }}
            onChange={setValue}
            value={value}
            tooltip={{ open: false }}
          />
          <Typography.Text>3.28</Typography.Text>
        </div>
      </div>
      <div
        style={{
          flex: "0.8",
          height: "100%",
          //   backgroundColor: "blue",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "0.1rem",
          color: "black",
        }}
      >
        <Button shape="circle" type="text" size="large">
          <AudioOutlined />
        </Button>
        <Button shape="circle" type="text" size="large">
          <UnorderedListOutlined />
        </Button>
        <Button shape="circle" type="text" size="large">
          <DesktopOutlined />
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            minWidth: "5rem",
          }}
        >
          <Button shape="circle" type="text" size="large">
            <SoundOutlined />
          </Button>
          <Slider
            style={{ width: "100%" }}
            onChange={setValue}
            value={value}
            tooltip={{ open: false }}
          />
        </div>
        <Button shape="circle" type="text" size="large" color="black">
          <ArrowsAltOutlined
            style={{
              fontSize: "110%",
            }}
          />
        </Button>
      </div>
    </div>
  );
}
