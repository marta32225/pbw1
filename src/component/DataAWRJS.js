import "../assets/css/style.css";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';

function DataAWRJS() {
  const [mahasiswa, setMhs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // memanggil API untuk mengambil data produk
    fetch("http://localhost:8000/dbaw")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setMhs(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);
  
  const handleClick = () => {
    navigate('/FormIAW'); // Mengarahkan ke halaman baru
  };
  
  const deleteMhs = async (kid) => {
    fetch("http://localhost:8000/dbaw/" + kid, {
      method: "DELETE",
    }).then(() => {
      console.log('produk deleted.')
      window.location.reload();
    });
  };

  return (
    <div id="Konten">
      <h1>Data Mahasiswa</h1>
      <Button
        style={{ width: "220px" }}
        variant="primary"
        className="m-1"
        onClick={handleClick}
      >
        Tambah Data
      </Button>
      <Button
        style={{ width: "220px" }}
        variant="primary"
        className="m-1"
        as={Link}
        to={'/'}
      >
        Kembali
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Address</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs, i) => (
            <tr key={mhs.nim}>
              <td>{i+1}</td>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.kelas}</td>
              <td><Link to={mhs.address} className="btn btn-primary">Link</Link></td>
              <td colSpan="2">
                <Button
                  style={{ width: "100px" }}
                  variant="primary"
                  className="m-1"
                  as={Link}
                  to={'/FormEAW/'+mhs.id}
                >
                  Edit
                </Button>
                <Button
                  style={{ width: "100px" }}
                  variant="primary"
                  className="m-1"
                  onClick={() => deleteMhs(mhs.id)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataAWRJS;
