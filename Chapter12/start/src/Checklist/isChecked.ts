import { IdValue } from "./types";

export function isChecked(checkedIds: IdValue[], idValue: IdValue) {
  return checkedIds.includes(idValue);
}
