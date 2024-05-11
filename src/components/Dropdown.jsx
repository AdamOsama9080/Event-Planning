import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';



const DropdownList = ({}) => {
        return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
};

export default DropdownList;
