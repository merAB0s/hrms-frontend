import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import EmployeeService from "../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const colors = ["red"];
  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3" icon textAlign="center">
        <Icon name="list alternate outline" />
        <Header.Content>İşçiler Listesi</Header.Content>
      </Header>
      {colors.map((color) => (
        <Table  color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Adı</Table.HeaderCell>
              <Table.HeaderCell>Soyadı</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>Hakkında</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employees.map((employee) => (
              <Table.Row key={employee.id}>
                <Table.Cell>{employee.firstName}</Table.Cell>
                <Table.Cell>{employee.lastName}</Table.Cell>
                <Table.Cell>{employee.email}</Table.Cell>
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