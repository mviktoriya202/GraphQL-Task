import { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface IFormDialogProps<DataTypeKey extends string> {
  onSetValues: (value: string) => void;
  formDialogLabel: DataTypeKey;
  menuOptions: string[];
  isMultiple: boolean;
  onSetInputValue: (value: string) => void;
}

const FormDialog = <DataTypeKey extends string>({
  formDialogLabel,
  onSetValues,
  menuOptions,
  onSetInputValue,
}: IFormDialogProps<DataTypeKey>) => {
  const [open, setOpen] = useState<boolean>(false);

  const [newItem, setNewItem] = useState<string>("");

  const addRelOrPos = (value: string) => {
    onSetValues(value);
    onSetInputValue(newItem);
    menuOptions.push(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewItem("");
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRelOrPos(newItem);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add {formDialogLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>{`Add New ${formDialogLabel}`}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name={formDialogLabel}
            label={`New ${formDialogLabel}`}
            type="text"
            fullWidth
            variant="standard"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
