import { Stack, TextField } from "@mui/material";
import React, { FC } from "react";

interface Props {
  days: number;
  handleDayChange: (e: number) => void;
}

export const DaysField: FC<Props> = ({ days, handleDayChange }) => {
  return (
    <Stack width="100%" paddingBottom={2}>
      <TextField
        variant="outlined"
        onChange={(e) => handleDayChange(+e.target.value)}
        value={days}
      />
    </Stack>
  );
};
