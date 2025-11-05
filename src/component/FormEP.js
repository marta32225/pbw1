import { Button, Form, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/style.css";

function FormEP() {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [nama_produk, setNP] = useState("");
  const [tipe_produk, setTP] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");

  const fullPath = window.location.pathname;
  const pathSegments = fullPath.split('/');

  // fungsi untuk menambah data produk melalui API ketika tombol "Add" di klik
  const simpanProduk = () => {
    const newProduk = {id,nama_produk,tipe_produk,harga,stok}

    fetch('http://localhost:8000/produk/'+newProduk.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduk)
        }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state produk menjadi empty string 
            console.log('produk updated.')
            navigate('/DataProduk')
        });
  }

  useEffect(() => {
    // memanggil API untuk mengambil data produk
    fetch("http://localhost:8000/produk/"+pathSegments[2])
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setID(data.id);
        setNP(data.nama_produk);
        setTP(data.tipe_produk);
        setHarga(data.harga);
        setStok(data.stok);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <div id="formIP">
      <h2>Form untuk edit produk</h2>
      <Form>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>ID</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            className="text-start"
            type="text"
            placeholder="Enter ID"
            name="id"
            readOnly
            value={id}
            onChange={e => setID(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Nama Produk</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            className="text-start"
            type="text"
            placeholder="Enter Nama Produk"
            name="nama_produk"
            value={nama_produk}
            onChange={e => setNP(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Tipe Produk</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Tipe Produk"
            name="tipe_produk"
            value={tipe_produk}
            onChange={e => setTP(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Harga</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Harga"
            name="harga"
            value={harga}
            onChange={e => setHarga(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Stok</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Stok"
            name="stok"
            value={stok}
            onChange={e => setStok(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button
            style={{ width: "160px" }}
            variant="primary"
            className="m-1"
            onClick={simpanProduk}
          >
            Simpan
          </Button>
          <Button
            style={{ width: "160px" }}
            variant="primary"
            className="m-1"
            as={Link}
            to={'/DataProduk'}
          >
            Kembali
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormEP;
