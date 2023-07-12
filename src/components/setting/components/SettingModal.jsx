import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useBlockSettingStore } from '../../../store/useBlockSettingStore';
import { SEARCH_SETTING } from '../../../constant';
import { useTriggerLengthStore } from '../../../store/useTriggerLengthStore';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

function SettingModal(props) {
  const { isOpen, toggle } = props;
  const [blockSettings, updateBlocksSetting] = useBlockSettingStore((state) => [
    state.blockSettings,
    state.updateBlocksSetting,
  ]);
  const [triggerLength, onChangeTriggerLength] = useTriggerLengthStore(
    (state) => [state.triggerLength, state.onChangeTriggerLength]
  );
  const { Suggestions, Collections, Products } = blockSettings;
  return (
    <Modal
      open={isOpen}
      onClose={toggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p className="text-center mb-3 text-xl font-bold">Search Setting</p>
        <h2 className="font-bold mb-2">Turn on/off blocks</h2>
        <div className="flex flex-col">
          <FormControlLabel
            control={
              <Checkbox
                checked={Suggestions.show}
                onChange={(e) =>
                  updateBlocksSetting(
                    SEARCH_SETTING.SUGGESTION,
                    e.target.checked
                  )
                }
              />
            }
            label={SEARCH_SETTING.SUGGESTION}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Collections.show}
                onChange={(e) =>
                  updateBlocksSetting(
                    SEARCH_SETTING.COLLECTION,
                    e.target.checked
                  )
                }
              />
            }
            label={SEARCH_SETTING.COLLECTION}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Products.show}
                onChange={(e) =>
                  updateBlocksSetting(SEARCH_SETTING.PRODUCT, e.target.checked)
                }
              />
            }
            label={SEARCH_SETTING.PRODUCT}
          />
        </div>
        <h2 className="font-bold mb-2">Keyword Length</h2>
        <div>
          <TextField
            label="Length"
            variant="standard"
            type='number'
            value={triggerLength}
            onChange={(e) => onChangeTriggerLength(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={() => toggle()} variant="outlined">
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default SettingModal;
