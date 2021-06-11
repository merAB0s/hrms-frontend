import React from "react";
import { Grid } from "semantic-ui-react";
// import EmployeeList from "../pages/EmployeeList";
// import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
// import JobTitleList from "../pages/JobTitleList";
import CandidateList from "../pages/CandidateList";

export default function Section() {
  return (
    <div>
      <Grid columns={4} celled="internally" divided="vertically" >
        {/* <Grid.Row>
          <Grid.Column width={16}>
            <EmployeeList />
          </Grid.Column>
        </Grid.Row> */}
        {/* <Grid.Row>
          <Grid.Column width={16}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row> */}
        {/* <Grid.Row>
          <Grid.Column width={16}>
            <JobTitleList />
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row>
          <Grid.Column width={16}>
            <JobAdvertisementList/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <CandidateList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}