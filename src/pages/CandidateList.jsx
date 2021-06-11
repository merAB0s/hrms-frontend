import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function CandidateList() {
  const [candidate, setCandidate] = useState([]);
  const colors = ["red",]
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidate()
      .then((result) => setCandidate(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3" icon textAlign="center">
        <Icon name="list alternate outline" />
        <Header.Content>İş Arayanlar Listesi</Header.Content>
      </Header>
      {colors.map((color) => (
      <Table  color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Hakkında</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidate.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.birthDate}</Table.Cell>
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