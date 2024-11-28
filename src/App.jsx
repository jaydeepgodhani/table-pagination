import {useEffect, useState} from 'react'
import './App.css';
import Table from "./Table.jsx";
import {URL} from "./constants/general.js";

function App() {

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [pagination, setPagination] = useState(true);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    if (data === null) {
      setLoading(true);
      fetch(URL)
          .then(response => response.json())
          .then(data => {
            setData(data);
          })
          .catch(err => {
            console.log(err);
            setError(err)
          })
          .finally(() => {
            setLoading(false);
          })
    }
  }, []);

  const onChecked = (e) => {
    if(e.target.checked) {
      setPagination(true);
    } else {
      setPagination(false);
    }
  }

  const onSelect = (e) => {
    setPerPage(e.target.value);
  }

  return (
      <>
        <div className={'centerDiv'}>
          <h2>{'SaaS Labs Assignment By Jaydeep'}</h2>
          {loading && <p>{'Let this load for a while...'}</p>}
          {data && data.length > 0 && <>
            <div className={'flexDiv'}>
              <div>{'pagination'}<input type={'checkbox'} onChange={onChecked} checked={pagination}/></div>
              {pagination && <div><select onChange={onSelect}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>{' items per page'}</div>}
              {!pagination && <div>{'showing all items'}</div>}
            </div>
            <Table className={'fullWidth'} data={data} pagination={pagination} perPage={perPage} />
          </>}
          {error && <p>{error}</p>}
        </div>
      </>
  )
}

export default App;
