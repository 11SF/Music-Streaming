import React from "react";
import { Col, Divider, Row } from "antd";
import LandscapeCard from "../../shared/PlaylistCard/LandscapeCard";

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
export default function TopRecommendList() {
  return (
    <div style={{ height: "auto", padding: "1rem 0" }}>
      <h1 style={{ fontSize: "2rem" }}>Good evening</h1>
      <Row gutter={[16, 10]} style={{ marginTop: "1rem" }}>
        {list.map((item, index) => (
          <Col md={{ span: 12 }} xl={{ span: 8 }} key={index}>
            <LandscapeCard
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              key={index}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
