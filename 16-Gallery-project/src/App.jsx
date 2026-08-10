import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Loader from './components/Loader';
import Pagination from './components/Pagination';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=30`,
      );
      setUserData(response.data);
      setLoading(false);
    };
    getData();
  }, [page]);

  const handlePage = (type) => {
    if (type === 'next') setPage((p) => p + 1);
    if (type === 'prev') setPage((p) => Math.max(1, p - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen overflow-auto w-full p-4 text-white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap gap-4 p-2">
            {userData.map((ele) => (
              <div key={ele.id}>
                <Cards ele={ele} />
              </div>
            ))}
          </div>
          <div>
            <Pagination page={page} handlePage={handlePage} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
