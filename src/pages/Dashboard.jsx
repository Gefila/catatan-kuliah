import { useState } from "react";

export default function Dashboard() {
    const [data, setData] = useState([
        {
            id: 1,
            matkul: "Pemrograman Web",
            dosen: "Pak Budi",
        },
        {
            id: 2,
            matkul: "Pemrograman Mobile",
            dosen: "Pak Budi",
        },
        {
            id: 3,
            matkul: "Pemrograman Desktop",
            dosen: "Pak Budi",
        },
    ]);

    return (
        <div className="flex items-start justify-center h-screen bg-slate-900">
            <div className="flex flex-col bg-slate-800 p-6 rounded-lg justify-center items-center gap-2 min-w-96">
                <header className="text-2xl font-bold">Daftar Matkul</header>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-2 btn btn-block justify-start"
                    >
                        <div className="text-left">{item.matkul}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
