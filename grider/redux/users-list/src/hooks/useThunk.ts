import { AsyncThunk } from "@reduxjs/toolkit";
import { ResError } from "../models/error";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../store";
import { User } from "../models/user";

export const useThunk = (thunk: AsyncThunk<any, any, any>): [runThunk: (arg?: User) => void, isLoading: boolean, error: ResError | null] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ResError | null>(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback((arg?: User) => {
    setIsLoading(true);
    dispatch(thunk(arg))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);
  return [runThunk, isLoading, error];
}