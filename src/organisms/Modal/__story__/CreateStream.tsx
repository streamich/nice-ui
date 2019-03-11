import * as React from 'react';
import Modal from '..';
import FormCreateStream from '../../FormCreateStream';

class CreateStream extends React.Component<{}, {}> {
  render() {
    return (
      <Modal title="Create stream" onCloseClick={() => {}} onEsc={() => {}} onOutsideClick={() => {}}>
        <FormCreateStream fullscreen name="" onChangeName={() => {}} />
      </Modal>
    );
  }
}

export default CreateStream;
