import { RoverData } from "models/api/rover";

export interface ApodContainer {
  data: {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
  };
  isLoading: boolean;
}

export interface RoverContainer {
  data: {
    images: RoverData[];
  };
  isLoading: boolean;
}
