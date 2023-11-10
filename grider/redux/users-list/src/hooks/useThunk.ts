import { AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResError } from "../models/error";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../store";

export const useThunk = (thunk: AsyncThunk<any, void, any>): [runThunk: (arg?: PayloadAction) => void, isLoading: boolean, error: ResError | null] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ResError | null>(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback((arg?: PayloadAction) => {
    setIsLoading(true);
    dispatch(thunk())
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);
  return [runThunk, isLoading, error];
}