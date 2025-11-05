import "../assets/css/style.css";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';

function DataProduk() {
  const [produks, setProduk] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // memanggil API untuk mengambil data produk
    fetch("http://localhost:8000/produk")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setProduk(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  const handleClick = () => {
    navigate('/FormIP'); // Mengarahkan ke halaman baru
  };

  const deleteProduk = async (kid) => {
    fetch("http://localhost:8000/produk/" + kid, {
      method: "DELETE",
    }).then(() => {
      console.log('produk deleted.')
      window.location.reload();
    });
  };


  return (
    <div id="Konten">
      <h1>Data Produk</h1>
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
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Tipe Produk</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {produks.map((produk, i) => (
            <tr key={produk.id}>
              <td>{i+1}</td>
              <td>{produk.nama_produk}</td>
              <td>{produk.tipe_produk}</td>
              <td>{produk.harga}</td>
              <td>{produk.stok}</td>
              <td colSpan="2">
                <Button
                  style={{ width: "100px" }}
                  variant="primary"
                  className="m-1"
                  as={Link}
                  to={'/FormEP/'+produk.id}
                >
                  Edit
                </Button>
                <Button
                  style={{ width: "100px" }}
                  variant="primary"
                  className="m-1"
                  onClick={() => deleteProduk(produk.id)}
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

export default DataProduk;
