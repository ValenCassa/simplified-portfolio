import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useGeoLocation = () => {
  const { data: location, error } = useSWR("https://ipapi.co/json/", fetcher);

  return {
    location,
    isLoading: !error && !location,
    isError: error,
  };
};
