import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function Layout() {
  return (  

        <div className="App">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Assignment name</th>
            <th>Page link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Function to compute the product of value1 and value2</td>
            <td><Link to="/assignment1" target="_blank">Link</Link></td>
            </tr>
        </tbody>
        </Table>
        </div>
  );
}

export default Layout;