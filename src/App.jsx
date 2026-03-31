import React from "react";

function App() {
  const anggota = [
    { nama: "Ilham Jordan", nim: "253140707111080", role: "Anggota", warna: "secondary" },
    { nama: "Rayhan Kurnia", nim: "253140707111069", role: "Ketua", warna: "primary" },
    { nama: "Pandu Aji", nim: "253140707111065", role: "Anggota", warna: "success" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Kelompok</h1>

      {anggota.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{item.nama}</h3>
          <p>NIM: {item.nim}</p>
          <p>Role: {item.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;