import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/css/style.css";

function FormIAW() {
  const navigate = useNavigate();
  const [nim, setNIM] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [address, setAddress] = useState("");

  // fungsi untuk menambah data produk melalui API ketika tombol "Add" di klik
  const addMhs = () => {
    const newMhs = {nim,nama,kelas,address}

    fetch('http://localhost:8000/dbaw', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMhs)
        }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state produk menjadi empty string 
            console.log('new mahasiswa added.')
            navigate('/DataAwrjs')
        });
  }
  return (
    <div id="formIP">
      <h2>Form untuk input alamat address website</h2>
      <Form>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "90px" }}>NIM</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            className="text-start"
            type="text"
            placeholder="Enter NIM"
            name="nim"
            value={nim}
            onChange={(e)=>setNIM(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "90px" }}>Nama</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Nama"
            name="nama"
            value={nama}
            onChange={(e)=>setNama(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "90px" }}>Kelas</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Kelas"
            name="kelas"
            value={kelas}
            onChange={(e)=>setKelas(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex" controlId="formBasicText">
          <Form.Label style={{ width: "90px" }}>Address</Form.Label>
          <Form.Control
            style={{ width: "210px" }}
            type="text"
            placeholder="Enter Alamat Website"
            name="address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button
            style={{ width: "160px" }}
            variant="primary"
            className="m-1"
            onClick={addMhs}
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

export default FormIAW;
