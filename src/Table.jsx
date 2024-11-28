import {useState} from "react";
import Row from "./Row.jsx";
import Pagination from "./Pagination.jsx";
import './App.css';

const Table = ({data, pagination, perPage=5}) => {

  const [currentPage, setCurrentPage] = useState(1);

  // Early return in case of invalid input
  if(!Array.isArray(data) || Number.isNaN(pagination) || Number.isNaN(perPage)) {
    return <>{'Invalid Input !!'}</>
  }

  let pageCount = 0;
  if (pagination) {
    pageCount = Math.ceil(data.length / perPage);
  }

  return (<div className={'centerDiv'}>

    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage funded</th>
          <th>Amount pledged</th>
        </tr>
      </thead>
      <tbody>
      {pagination &&
          data.slice((currentPage - 1) * perPage, currentPage * perPage).map((entry, index) =>
              <Row key={index} entry={entry}/>)}
      {!pagination &&
          data.map((entry, index) =>
              <Row key={index} entry={entry}/>)}
      </tbody>
    </table>
    {pagination && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount}/>}
  </div>);
}

export default Table;