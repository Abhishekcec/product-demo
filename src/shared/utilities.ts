import { SortDirection } from "@mui/material";
import _ from "lodash";

export const sortArray = <T>(items: T[], sortBy: string, sortDirection: SortDirection): T[] => {
  return _.orderBy(items, sortBy.toString(), [sortDirection]);
};