import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField, TextareaAutosize, Button, Container } from "@mui/material";

interface FormData {
  textInput: string;
  textArea: string;
}

const TextFields = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const handleOnSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Controller
          name="textInput"
          control={control}
          defaultValue=""
          rules={{ required: true, validate: {} }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={!error ? "Login" : "Input validation error"}
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
            />
          )}
        />
        <Controller
          name="textArea"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextareaAutosize
              {...field}
              minRows={3}
              style={{ width: "100%", marginTop: 10 }}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default TextFields;
