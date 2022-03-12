import React from "react";

const PostMahasiswa = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Mahasiswa" />
            </div>
            <div className="konten-artikel">
                <div className="nim">{props.NIM}</div>
                    <p className="nama">{props.nama}</p>
                    <p className="alamat">{props.alamat}</p>
                    <p className="hp">{props.hp}</p>
                    <p className="angkatan">{props.angkatan}</p>
                    <p className="status">{props.status}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    )
}

export default PostMahasiswa;