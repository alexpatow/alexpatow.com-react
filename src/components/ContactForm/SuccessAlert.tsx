import * as React from 'react';
import SweetAlert from 'sweetalert2-react';

interface IProps {
  show: boolean;
  handleClose: () => void;
}
export function SuccessAlert({ show, handleClose }: IProps) {
  return (
    <SweetAlert
      show={show}
      type="success"
      confirmButtonText="Ok"
      title="Message Sent!"
      onConfirm={() => {
        handleClose();
      }}
      onEscapeKey={() => handleClose()}
      onOutsideClick={() => handleClose()}
    />
  );
}
