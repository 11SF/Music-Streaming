import { Row, Col } from "antd";
import React from "react";
import LandscapeCard from "../../shared/PlaylistCard/LandscapeCard";
import SqareCard from "../../shared/PlaylistCard/SqareCard";

interface ListType {
  id: string;
  title: string;
  imgSrc: string;
}

let list: ListType[] = [
  {
    id: "1",
    title: "Playlist 1",
    imgSrc:
      "https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17",
  },
  {
    id: "2",
    title: "Playlist 2",
    imgSrc:
      "https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17",
  },
  {
    id: "3",
    title: "Playlist 3",
    imgSrc:
      "https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17",
  },
  {
    id: "4",
    title: "Playlist 4",
    imgSrc:
      "https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17",
  },
  {
    id: "5",
    title: "Playlist 5",
    imgSrc:
      "https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17",
  },
  {
    id: "6",
    title: "Playlist 6",
    imgSrc:
      "https://mosaic.scdn.co/300/ab67616d00001e0216f90eca8734936f3f8ef7dcab67616d00001e026413fc7cd84907d255024c01ab67616d00001e0287fddb58aaf8d3e730cb9065ab67616d00001e0294787449b7e0638df44c9c17",
  },

];

export default function ChartsList() {
  return (
    <div style={{ height: "auto", padding: "1rem 0" }}>
      <a style={{ fontSize: "1.5rem" }}>Good evening</a>
      <Row gutter={[24, 16]} style={{ marginTop: "1rem" }}>
        {list.map((item, index) => (
          <Col md={{ span: 6 }} xl={{ span: 4 }}>
            <SqareCard title={item.title} imgSrc={item.imgSrc} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
