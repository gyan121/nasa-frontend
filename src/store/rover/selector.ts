import { ApodContainer, RoverContainer } from "models/store/apod/container";
import { AppState } from "models/store/app-state";
import { Selector, createSelector } from "reselect";

export const selectRover: Selector<AppState, RoverContainer> = ({ rover }) =>
  rover;

export const selectRoverData = createSelector(
  selectRover,
  ({ data: { images }, isLoading }) => ({ images, isLoading })
);
