import {
  CaretDownOutlined,
  CaretUpOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const navbarStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const avatarBtn: React.CSSProperties = {
  position: "relative",
  padding: "0",
  minWidth: "7rem",
  height: "auto",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#000",
  color: "#fff",
  border: 0,
};

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">Account</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Set up your Family plan</a>,
    key: "1",
  },
  {
    label: <a href="https://www.aliyun.com">Profile</a>,
    key: "2",
  },
  {
    label: <a href="https://www.aliyun.com">Private session</a>,
    key: "3",
  },
  {
    label: <a href="https://www.aliyun.com">Setting</a>,
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: "Log out",
    key: "5",
  },
];

export default function Navbar() {
  let navigate = useNavigate();
  const [onClicked, setClicked] = useState(false);

  return (
    <div style={navbarStyle}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button
          icon={<LeftOutlined />}
          shape="circle"
          onClick={() => {
            navigate(-1);
          }}
        ></Button>
        <Button
          icon={<RightOutlined />}
          shape="circle"
          onClick={() => {
            navigate(+1);
          }}
        ></Button>
      </div>
      <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
        <Button
          type="default"
          shape="round"
          size="large"
          style={avatarBtn}
          onClick={() => setClicked(!onClicked)}
        >
          <Avatar
            style={{ backgroundColor: "#fde3cf", color: "#f56a00", border: 0 }}
          >
            N
          </Avatar>
          <Text style={{ padding: "0 1rem", color: "#fff" }}>nsfolk</Text>
          {onClicked ? (
            <CaretUpOutlined style={{ marginRight: "0.5rem" }} />
          ) : (
            <CaretDownOutlined style={{ marginRight: "0.5rem" }} />
          )}
        </Button>
      </Dropdown>
    </div>
  );
}
