import React from "react";
import { Menu } from "antd";

interface MenuItemType {
  icon: any;
  lebel: string | null;
  handleFunction: Function | null;
  type: string;
}

const menuStyles: React.CSSProperties = {
  overflowY: "scroll",
  textAlign: "start",
  width: "100%",
  flex: 1,
};

let listItem: MenuItemType[] = [
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
  {
    icon: null,
    lebel: "Playlist",
    handleFunction: null,
    type: "",
  },
];
export default function PlaylistList() {
  return (
    <div style={menuStyles}>
      <Menu
        theme="light"
        mode="vertical"
        //   defaultSelectedKeys={["1"]}
        items={listItem.map((item, index) => ({
          key: String(index + 1),
          label: item.lebel,
        }))}
      />
    </div>
  );
}
