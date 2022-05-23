import React from 'react';
import useForm from '../hooks/form.js';
import { useContext, useState } from 'react';
import { SettingsContext } from '../context/settings';
import {
  Button,
  FormGroup,
  InputGroup,
  Card,
  Elevation,
  RadioGroup,
  Radio,
  Alert,
} from '@blueprintjs/core';

const SettingsForm = () => {
  const settings = useContext(SettingsContext);

  const { handleChange, handleSubmit } = useForm(updateSettings);

  const [selectedSortRadioBtn, setSelectedSortRadioBtn] = useState();
  const [selectedCompleteRadioBtn, setSelectedCompleteRadioBtn] = useState();
  let [showAlert, setShowAlert] = useState(false);

  function updateSettings(userInput) {
    //update submitted values, or use old value if non provided
    settings.setCompleted(
      userInput['Blueprint3.RadioGroup-0'] || settings.setCompleted
    );
    settings.setSortBy(userInput['Blueprint3.RadioGroup-1'] || settings.sortBy);
    settings.setNumItemsPerPage(
      userInput['itemsPerPage'] || settings.setNumItemsPerPage
    );
    setShowAlert(true);
  }

  return (
    <div className='flex-container'>
      <form onSubmit={handleSubmit}>
        <div className='bp3-callout bp3-intent-success form-caption'>
          <h4 className='bp3-heading'>App Settings</h4>
        </div>

        <Card interactive={false} elevation={Elevation.TWO}>
          <FormGroup minimal={true}>
            <label htmlFor='itemsPerPages'>Number Items Per Page</label>
            <InputGroup
              type='number'
              id='itemsPerPage'
              name='itemsPerPage'
              min='1'
              max='20'
              onChange={handleChange}
              data-testid='settings-itemsPerPage'
            />
            <br />

            <RadioGroup
              label='Show Completed Items'
              onChange={handleChange}
              selectedValue={selectedCompleteRadioBtn}
            >
              <Radio
                label='Yes'
                onClick={(e) => setSelectedCompleteRadioBtn(e.target.value)}
                value='true'
                data-testid='settings-showCompleted'
              />
              <Radio
                label='No'
                onClick={(e) => setSelectedCompleteRadioBtn(e.target.value)}
                value='false'
              />
            </RadioGroup>
            <br />

            <RadioGroup
              label='Sort By'
              onChange={handleChange}
              selectedValue={selectedSortRadioBtn}
            >
              <Radio
                label='Difficulty: High to Low'
                onClick={(e) => setSelectedSortRadioBtn(e.target.value)}
                value='difficultyHighToLow'
                data-testid='settings-sortBy'
              />
              <Radio
                label='Difficulty: Low to High'
                onClick={(e) => setSelectedSortRadioBtn(e.target.value)}
                value='difficultyLowToHigh'
              />
              <Radio
                label='Assignee'
                onClick={(e) => setSelectedSortRadioBtn(e.target.value)}
                value='assignee'
              />
            </RadioGroup>

            <br />
            <Button
              className='submit-btn'
              type='submit'
              intent='success'
              data-testid='settings-submit'
            >
              Confirm Changes
            </Button>
          </FormGroup>
        </Card>
      </form>
      <Alert
        confirmButtonText='X'
        isOpen={showAlert}
        loading={false}
        onClose={() => {
          setShowAlert(false);
        }}
      >
        <p>
          Settings have been applied! If settings are not showing, please
          refresh the page.
        </p>
      </Alert>
    </div>
  );
};

export default SettingsForm;
