import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { DefaultData } from "../../types";
import { ApolloError } from "@apollo/client";
import FormDialog from "../FormDialog";

interface ICustomSelectProps<
  DataType extends DefaultData | undefined | null,
  DataTypeKey extends string
> {
  type: DataTypeKey;
  handleOnGetData: () => void;
  data?: DataType;
  error?: Error | ApolloError;
  isMultiple: boolean;
}
const CustomSelect = <
  DataType extends DefaultData | undefined | null,
  DataTypeKey extends string
>({
  handleOnGetData,
  type,
  data,
  error,
  isMultiple,
}: ICustomSelectProps<DataType, DataTypeKey>) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    handleOnGetData();
  }, []);

  const menuOptions = useMemo<string[]>(() => {
    let mappedData: string[] = [];
    if (data) {
      mappedData = data.data.map(({ name, id }) => name + id);
      return mappedData;
    }

    return [];
  }, [data]);

  // const filteredValues = menuOptions.filter((option) => option === inputValue);

  const [values, setValues] = useState<string[]>([]);

  const handleOnSetValues = (value: string) => {
    setValues((prev) => [...prev, value]);
  };

  const handleSetInputValue = (value: string) => {
    if (!isMultiple) setInputValue(value);
  };

  if (error) return <pre>{error.message}</pre>;

  if (menuOptions.length)
    return (
      <div>
        <Autocomplete
          multiple={isMultiple}
          value={isMultiple ? values : inputValue}
          onChange={(_, newValue) => {
            if (!newValue) return;
            if (isMultiple && Array.isArray(newValue))
              return setValues(newValue);
            else if (!isMultiple && typeof newValue === "string") {
              return newValue;
            }
          }}
          getOptionLabel={(label) => {
            return label;
          }}
          freeSolo={true}
          onInputChange={(_event, value) => setInputValue(value)}
          inputValue={inputValue}
          options={menuOptions}
          sx={{ marginBottom: "20px" }}
          renderInput={(params) => {
            return (
              <div>
                <TextField {...params} label={type.toLowerCase()} />
                <FormDialog<DataTypeKey>
                  menuOptions={menuOptions}
                  onSetValues={handleOnSetValues}
                  onSetInputValue={handleSetInputValue}
                  formDialogLabel={type}
                  isMultiple={isMultiple}
                />
              </div>
            );
          }}
        />
      </div>
    );
};

export default CustomSelect;
