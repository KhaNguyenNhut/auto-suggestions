import { Button } from '@mui/material';
import React, { useState } from 'react';
import SettingModal from './components/SettingModal';

function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-4">
      <div className='flex justify-center'>
        <Button variant="contained" onClick={() => toggle()}>
          Open Setting
        </Button>
      </div>
      <SettingModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default Setting;
