import moment from "moment";
import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdverisementList() {
  const [jobAdvertisement, setjobAdvertisement] = useState([]);
  const colors = ["red"];

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementList()
      .then((result) => setjobAdvertisement(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3" icon textAlign="center">
        <Icon name="list alternate outline" />
        <Header.Content>İş İlanı Bilgi</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Şehir</Table.HeaderCell>
              <Table.HeaderCell>Maaş</Table.HeaderCell>
              <Table.HeaderCell>Toplam Kontenjan</Table.HeaderCell>
              <Table.HeaderCell>İlan Verilme Tarihi</Table.HeaderCell>
              <Table.HeaderCell>İlan Bitiş Tarihi</Table.HeaderCell>
              {/* <Table.HeaderCell>Is Open</Table.HeaderCell> */}
              <Table.HeaderCell>Hakkında</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobAdvertisement.map((jobAdvertisements) => (
              <Table.Row key={jobAdvertisements.id}>
                <Table.Cell>{jobAdvertisements.jobTitle.title}</Table.Cell>
                <Table.Cell>
                  {jobAdvertisements.employer.companyName}
                </Table.Cell>
                <Table.Cell>{jobAdvertisements.city.cityName}</Table.Cell>
                <Table.Cell>
                  {jobAdvertisements.salaryMin}TL -{" "}
                  {jobAdvertisements.salaryMax}TL
                </Table.Cell>
                {/* <Table.Cell>{jobAdvertisements.maxSalary}</Table.Cell>
        <Table.Cell>{jobAdvertisements.minSalary}</Table.Cell> */}
                <Table.Cell>{jobAdvertisements.quota}</Table.Cell>
                <Table.Cell>{moment(jobAdvertisements.createdDate).format('Do MMMM YYYY') }</Table.Cell>
                <Table.Cell>{jobAdvertisements.createdDate}</Table.Cell>
                {/* <Table.Cell>{jobAdvertisements.applicationDeadline}</Table.Cell> */}
                <Table.Cell>
                  <Button>Görüntüle</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
