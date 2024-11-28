import './App.css';

const Row = ({entry}) => {
  return (<>
    <tr>
      <td>{entry['s.no']}</td>
      <td>{entry['percentage.funded']}</td>
      <td>{entry['amt.pledged']}</td>
    </tr>
  </>)
}

export default Row;