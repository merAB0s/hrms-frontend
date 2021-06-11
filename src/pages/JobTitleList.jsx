// import React, { useState, useEffect } from "react";
// import { Table, Button,Header,Icon } from "semantic-ui-react";
// import JobTitleService from "../services/jobTitleService";

// export default function JobPositionList() {
//   const [jobTitles, setJobTitle] = useState([]);
//   const colors = ["red",]
//   useEffect(() => {
//     let jobTitleService = new JobTitleService();
//     jobTitleService
//       .getJobTitle()
//       .then((result) => setJobTitle(result.data.data));
//   }, []);

//   return (
//     <div>
//      <Header as="h3" icon textAlign='center'>
//       <Icon name="list alternate outline" />
//         <Header.Content >İş Pozisyonu Listesi</Header.Content>
//       </Header>
//       {colors.map((color) => (
//       <Table  color={color} key={color}>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Pozisyon</Table.HeaderCell>
//             <Table.HeaderCell>Hakkında</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body>
//           {jobTitles.map((position) => (
//             <Table.Row key={position.id}>
//               <Table.Cell>{position.jobTitle}</Table.Cell>
//               <Table.Cell>
//                 <Button>Görüntüle</Button>
//               </Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//       ))}
//     </div>
//   );
// }