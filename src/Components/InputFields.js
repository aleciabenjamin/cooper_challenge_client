import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

const InputFields = (props) => {
  return (
    <>
      <Input
        placeholder='Distance'
        id='distance'
        onChange={props.inputChangeHandler} />
        
      <Dropdown
        defaultValue='female'
        selection
        onChange={(e, { value }) => props.inputGenderChangeHandler(value)}
        options={[{ text: 'Male', value: 'male'}, { text: 'Female', value: 'female'}]}
      />
      <Input
        placeholder='Age'
        id='age'
        onChange={props.inputChangeHandler} />
    </>
  )
}

export default InputFields;