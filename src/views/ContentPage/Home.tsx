import React from "react";
import TopRecommendList from "../../components/views/Home/TopRecommendList";
import ChartsList from "../../components/views/Home/ChartsList";

export default function Home() {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1960px",
        }}
      >
        <TopRecommendList />
        <ChartsList />
        <ChartsList />
        <ChartsList />
        <ChartsList />
        <ChartsList />
        <ChartsList />
        <ChartsList />
      </div>
    </div>
  );
}
