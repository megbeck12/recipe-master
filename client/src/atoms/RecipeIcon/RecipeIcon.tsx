import { Icon } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
}

export const RecipeIcon: FC<Props> = ({ icon }) => {
  return <Icon sx={{ paddingRight: 1 }}>{icon}</Icon>;
};
