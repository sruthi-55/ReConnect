import React from "react";
import { Menu, Header } from "semantic-ui-react";
import Calendar from "react-calendar";

export default function ActivityFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 25 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All posts" />
        <Menu.Item content="I'm following" />
        <Menu.Item content="Created by me" />
      </Menu>
      {/* <Header icon="calendar" attached color="teal" content="Select date" />
      <Calendar /> */}
    </>
  );
}
