import "../assets/css/style.css";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';

function Home() {

  return (
    <div id="Konten">
      <h1>Daftar Data</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Data</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Data Produk</td>
            <td><Link to="/DataProduk" className="btn btn-primary">Link</Link></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Data Address Mahasiswa</td>
            <td><Link to="/DataAwrjs" className="btn btn-primary">Link</Link></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
