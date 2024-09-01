export function createConfirmationModal({ title, message }) {
  const modal = document.createElement('dialog');
  modal.className = 'modal';

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-box';
  modal.appendChild(modalBox);

  const modalTitle = document.createElement('h3');
  modalTitle.className = 'text-lg font-bold';
  modalTitle.textContent = title;
  modalBox.appendChild(modalTitle);

  const modalMessage = document.createElement('p');
  modalMessage.className = 'py-4';
  modalMessage.textContent = message;
  modalBox.appendChild(modalMessage);

  const modalAction = document.createElement('div');
  modalAction.className = 'modal-action';
  modalBox.appendChild(modalAction);

  const confirmForm = document.createElement('form');
  confirmForm.method = 'dialog';

  const confirmButton = document.createElement('button');
  confirmButton.className = 'btn btn-primary';
  confirmButton.textContent = "confirm";
  confirmButton.type = 'submit'; // Ensures the form submission closes the modal
  confirmForm.appendChild(confirmButton);
  modalAction.appendChild(confirmForm);

  const cancelForm = document.createElement('form');
  cancelForm.method = 'dialog';

  const cancelButton = document.createElement('button');
  cancelButton.className = 'btn';
  cancelButton.textContent = "cancel";
  cancelButton.type = 'submit'; // Ensures the form submission closes the modal
  cancelForm.appendChild(cancelButton);
  modalAction.appendChild(cancelForm);
  return {
    modal,
    confirmButton,
    cancelButton
  };
}



