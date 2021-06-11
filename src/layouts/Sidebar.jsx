import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu className="sidebarMenu" vertical secondary>
        {/* <Menu.Item name="Job Positions">
          <Icon fitted name="search" size="large"/>
          İş Pozisyonu
        </Menu.Item> */}
        <Menu.Item name="Employees">
        <Icon fitted name="building outline" size="large"/>
          İş Verenler
        </Menu.Item>
        <Menu.Item name="Employers">
        <Icon fitted name="briefcase" size="large" />
          Çalışanlar
        </Menu.Item>
      </Menu>
    </div>
  );
}