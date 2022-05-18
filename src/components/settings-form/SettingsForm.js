import React from 'react';

import { Form, Button } from 'react-bootstrap';

export default function SettingsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    let settings = {
      hideCompletedItems: e.target.hideCompletedItems.checked,
      items: e.target.numberOfItems.value,
      sort: e.target.sort.checked,
    };

    // console.log(settings);
    localStorage.setItem('settings', JSON.stringify(settings));
  };

  return (
    <Form onSubmit={handleSubmit} className='settings-form'>
      <h2>Customized settings</h2>
      <Form.Group className='mb-3'>
        <Form.Label>Number of items per page</Form.Label>
        <Form.Control
          name='numberOfItems'
          type='number'
          placeholder='Number of items'
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Sort from easy to hard</Form.Label>
        <Form.Check type='checkbox' name='sort' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Hide completed items</Form.Label>
        <Form.Check type='checkbox' name='hideCompletedItems' />
      </Form.Group>

      <Button variant='primary' type='submit' text='Save'>
        Apply
      </Button>
    </Form>
  );
}
