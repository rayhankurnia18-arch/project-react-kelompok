import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = [
    { nama: "Panduji", nim: "25314070711001", role: "Ketua Kelompok", warna: "primary" },
    { nama: "Rayhan Kurnia", nim: "25314070711002", role: "Anggota", warna: "secondary" },
    { nama: "Jordan", nim: "25314070711003", role: "Anggota", warna: "secondary" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #74ebd5, #9face6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>

      <div style={{
        background: "white",
        borderRadius: "20px",
        padding: "30px",
        width: "100%",
        maxWidth: "800px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          🎓 Profil Mahasiswa
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>

          {data.map((item, index) => (
            <div key={index} style={{
              padding: "20px",
              borderRadius: "15px",
              background: "#f8f9fa",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >

              <h4 style={{ color: "#007bff" }}>{item.nama}</h4>
              <p><b>NIM:</b> {item.nim}</p>

              <span className={`badge bg-${item.warna}`}>
                {item.role}
              </span>

            </div>
          ))}

        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button className="btn btn-primary px-4 py-2 rounded-pill">
            🚀 Selesai
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;