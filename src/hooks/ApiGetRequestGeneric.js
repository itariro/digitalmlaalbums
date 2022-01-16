import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiGetRequestGeneric(requestUrl) {
  const [data, setData] = useState([]);
  const [url] = useState(requestUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    connectionError: false,
    message: "",
  });

  useEffect(() => {
    async function fetchData() {
      setIsError({ connectionError: false, message: "" });
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setIsError({ connectionError: true, message: error });
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
}
