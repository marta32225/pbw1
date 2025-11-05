import { Button, Form, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/style.css";

function FormEAW() {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [nim, setNIM] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [address, setAddress] = useState("");

  const fullPath = window.location.pathname;
  const pathSegments = fullPath.split('/');
  
  // fungsi untuk menambah data produk melalui API ketika tombol "Add" di klik
  const simpanWAMhs = () => {
    const newMhs = {id,nim,nama,kelas,address}

    fetch('http://localhost:8000/dbaw/'+newMhs.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMhs)
        }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state produk menjadi empty string 
            console.log('mahasiswa updated.')
            navigate('/DataAwrjs')
        });
  }
  
  useEffect(() => {
    // memanggil API untuk mengambil data produk
    fetch("http://localhost:8000/dbaw/"+pathSegments[2])
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // ketika Rest API sukses, simpan data dari response ke dalam state lokal
        setID(data.id);
        setNIM(data.nim);
        setNama(data.nama);
        setKelas(data.kelas);
        setAddress(data.address);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <div id="formIP">
      <h2>Form untuk edit web address mahasiswa</h2>
      <Form>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Control
            style={{ width: "210px" }}
            className="text-start"
            type="hidden"
            name="id"
            readOnly
            value={id}
            onChange={e => setID(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>NIM</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            className="text-start"
            type="text"
            placeholder="Enter NIM"
            name="nim"
            readOnly
            value={nim}
            onChange={e => setNIM(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Nama Mahasiswa</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            className="text-start"
            type="text"
            placeholder="Enter Nama Mahasiswa"
            name="nama"
            value={nama}
            onChange={e => setNama(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Kelas</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Tipe Produk"
            name="kelas"
            value={kelas}
            onChange={e => setKelas(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "120px" }}>Web Address</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Harga"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button
            style={{ width: "160px" }}
            variant="primary"
            className="m-1"
            onClick={simpanWAMhs}
          >
            Simpan
          </Button>
          <Button
            style={{ width: "160px" }}
            variant="primary"
            className="m-1"
            as={Link}
            to={'/DataAwrjs'}
          >
            Kembali
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormEAW;
