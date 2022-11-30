import { isChecked } from "./isChecked";
import { IdValue } from "./types";

export function getNewCheckedIds(
  currentCheckedIds: IdValue[],
  checkedId: IdValue
) {
  if (isChecked(currentCheckedIds, checkedId)) {
    return currentCheckedIds.filter(
      (itemCheckedid) => itemCheckedid !== checkedId
    );
  } else {
    return currentCheckedIds.concat(checkedId);
  }
}
