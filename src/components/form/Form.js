import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { options } from '../../utils/constants';

const CustomForm = ({ info, setInfo, handleFormSubmit }) => {
  const handleInputChange = (e) => {
    //console.log('input');
    //const name = e.target.name;
    //const value = e.target.value;
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleOptionsChange = (e, values) => {
    const { name, value } = values;
    setInfo({ ...info, [name]: value.toUpperCase() });
  };
  //console.log(info);
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <a
              href="https://github.com/sofiadurkan1"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>{"<Sofia's/> "}</code>
            </a>
            <span className="design header">design</span>
          </div>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={info.username}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              value={info.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <Form.Dropdown
              options={options}
              onChange={handleOptionsChange}
              placeholder="Gender"
              name="gender"
              fluid
              selection
              value={info.gender.toLowerCase()}
              required
            />
            <Button color="teal" fluid size="large">
              {info.id ? 'Update' : 'Add'}
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default CustomForm;