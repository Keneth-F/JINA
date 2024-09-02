export function createTextConfirmationModal({ title, message, confirmText = "Confirm", cancelText = "Cancel", requiredText = "ABSOLUTELY SURE", onConfirm }) {
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

  const inputField = document.createElement('input');
  inputField.className = 'input input-bordered input-error w-full max-w-xs';
  inputField.placeholder = `Type "${requiredText}" to confirm`;
  modalBox.appendChild(inputField);

  const modalAction = document.createElement('div');
  modalAction.className = 'modal-action';
  modalBox.appendChild(modalAction);

  const confirmForm = document.createElement('form');
  confirmForm.method = 'dialog';

  const confirmButton = document.createElement('button');
  confirmButton.className = 'btn btn-error';
  confirmButton.textContent = "confirm";
  confirmButton.type = 'submit'; // Ensures the form submission closes the modal
  confirmButton.disabled = true; // Initially disabled until correct text is entered
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
    cancelButton,
    inputField
  };
}



