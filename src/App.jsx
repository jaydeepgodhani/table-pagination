import {useEffect, useState} from 'react'
import './App.css';
import Table from "./Table.jsx";
import {URL} from "./constants/general.js";

function App() {

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // Set below stat variable using radio button / text field for more customization
  const [pagination, setPagination] = useState(true);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    if (data === null) {
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
    console.log("here", e.target.checked);
    if(e.target.checked) {
      setPagination(true);
    } else {
      setPagination(false);
    }
  }

  return (
      <>
        <div className={'centerDiv'}>
          <h2>{'SaaS Labs Assignment By Jaydeep'}</h2>
          {loading && <p>{'let this load for a while'}</p>}
          {data && data.length > 0 && <>
            <div className={'flexDiv'}>
              <div>{'pagination'}<input type={'checkbox'} onChange={onChecked} checked={pagination}/></div>
              {pagination && <div>{'show items'}</div>}
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
