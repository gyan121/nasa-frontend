import { ApodContainer } from "models/store/apod/container";
import { AppState } from "models/store/app-state";
import { Selector, createSelector } from "reselect";

export const selectApod: Selector<AppState, ApodContainer> = ({ apod }) => apod;

export const selectApodData = createSelector(
  selectApod,
  ({ data, isLoading }) => ({ data, isLoading })
);
