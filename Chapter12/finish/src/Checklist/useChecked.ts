import { useState, useEffect } from "react";
import { IdValue } from "./types";
import { getNewCheckedIds } from "./getNewCheckedIds";

type Params = {
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
};
export function useChecked({ checkedIds, onCheckedIdsChange }: Params) {
  const [resolvedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(
    checkedIds || []
  );

  const handleCheckChange = (checkedId: IdValue) => () => {
    const newCheckedIds = getNewCheckedIds(resolvedCheckedIds, checkedId);
    if (onCheckedIdsChange) {
      onCheckedIdsChange(newCheckedIds);
    } else {
      setResolvedCheckedIds(newCheckedIds);
    }
  };

  useEffect(() => {
    const isControlled = checkedIds !== undefined;
    if (isControlled) {
      setResolvedCheckedIds(checkedIds);
    }
  }, [checkedIds]);

  return { resolvedCheckedIds, handleCheckChange };
}
