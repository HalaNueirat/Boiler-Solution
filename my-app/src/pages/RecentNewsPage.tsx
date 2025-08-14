import React from "react";
import RecentNews from "../components/RecentNews/RecentNews";
import {RECENT_NEWS} from "../constants/main.constants";

const RecentNewsPage: React.FC = () => {
  return <RecentNews items={RECENT_NEWS} />;
};

export default RecentNewsPage;
