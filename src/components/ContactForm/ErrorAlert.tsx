import * as React from 'react';
import SweetAlert from 'sweetalert2-react';

interface IProps {
  show: boolean;
  handleClose: () => void;
}
export function ErrorAlert({ show, handleClose }: IProps) {
  return (
    <SweetAlert
      show={show}
      type="error"
      confirmButtonText="Ok"
      title="Error sending message, please send an email to alexpatow@alexpatow.com"
      onConfirm={() => {
        handleClose();
      }}
      onEscapeKey={() => handleClose()}
      onOutsideClick={() => handleClose()}
    />
  );
}
