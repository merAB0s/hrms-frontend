import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);
  const colors = ["red"];

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3" icon textAlign="center">
        <Icon name="list alternate outline" />
        <Header.Content>İş Verenler Listesi</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
              <Table.HeaderCell>Website Adresi</Table.HeaderCell>
              <Table.HeaderCell>Hakkında</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((employer) => (
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>{employer.webAddress}</Table.Cell>
                
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
