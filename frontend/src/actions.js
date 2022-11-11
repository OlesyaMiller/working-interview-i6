const BASE_URL = "http://localhost:3000";

export const fetchTransactions = () => {
    const fetchData = async () => {
        const data = await axios(`${BASE_URL}/transactions`);
        setTransactions(data.data);
      }
      fetchData()
}