import { Table, Icon } from 'semantic-ui-react';
import { useFetch, deleteHandler } from '../../utils/functions';

const Contacts = ({ editHandler }) => {
  const { contactList, isLoading } = useFetch();
  console.log(contactList);
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size={'large'} className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p>Loading...</p>
              </Table.Cell>
            </Table.Row>
          ) : contactList?.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p className="nothing-found">Nothing Found</p>
              </Table.Cell>
            </Table.Row>
          ) : (
            contactList?.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell textAlign="center">
                  {item.username.toUpperCase()}
                </Table.Cell>
                <Table.Cell textAlign="center">{item.phoneNumber}</Table.Cell>
                <Table.Cell textAlign="center">{item.gender}</Table.Cell>
                <Table.Cell
                  textAlign="center"
                  className="delete"
                  onClick={() => deleteHandler(item.id)}
                >
                  <Icon name="delete" />
                </Table.Cell>
                <Table.Cell
                  textAlign="center"
                  className="edit"
                  onClick={() =>
                    editHandler(
                      item.id,
                      item.username,
                      item.phoneNumber,
                      item.gender
                    )
                  }
                >
                  <Icon name="edit" />
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Contacts;