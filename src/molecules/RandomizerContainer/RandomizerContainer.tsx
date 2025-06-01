import { Box, Paper } from "@mui/material";
import React, { FC, PropsWithChildren, ReactNode } from "react";

export const RandomizerContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center" margin={5}>
      <Paper
        elevation={24}
        sx={{
          backgroundColor: "#ffffff",
          height: "100%",
          width: "50%",
          padding: 5,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};
