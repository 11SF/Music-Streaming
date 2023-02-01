import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  SearchOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

interface MenuItemType {
  icon: any;
  lebel: string;
  type: string;
}

let listItem: MenuItemType[] = [
  {
    icon: HomeOutlined,
    lebel: "Home",
    type: "",
  },
  {
    icon: SearchOutlined,
    lebel: "Search",
    type: "",
  },
  {
    icon: DatabaseOutlined,
    lebel: "Your Library",
    type: "",
  },
  {
    icon: DatabaseOutlined,
    lebel: "",
    type: "divider",
  },
  {
    icon: DatabaseOutlined,
    lebel: "Create Playlist",
    type: "",
  },
  {
    icon: DatabaseOutlined,
    lebel: "Liked songs",
    type: "",
  },
];

const menuStyles: React.CSSProperties = {
  padding: "2rem 0",
  textAlign: "start"
};

export default function MainList() {
  // const [listItem, setListItem] = useState(menuItem);

  // useEffect(() => {
  //   setListItem(menuItem)
  //   setListItem([
  //     ...listItem,
  //     {
  //       icon: null,
  //       lebel: "ผู้ถูกเลือกให้ผิดหวัง",
  //       handleFunction: null,
  //       type: "",
  //     },
  //   ]);
  // }, []);
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={listItem.map((item, index) => ({
        key: String(index + 1),
        icon: React.createElement(item.icon),
        label: item.lebel,
        type: item.type,
      }))}
      style={menuStyles}
    />
  );
}
