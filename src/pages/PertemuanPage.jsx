import { useState } from "react";
import Navbar from "../components/Navbar";

export default function PertemuanPage() {
    const [data, setData] = useState([
        {
            id: 1,
            ke: "1",
        },
        {
            id: 2,
            ke: "2",
        },
        {
            id: 3,
            ke: "3",
        },
        {
            id: 4,
            ke: "4",
        },
        {
            id: 5,
            ke: "5",
        },
        {
            id: 6,
            ke: "6",
        },
        {
            id: 7,
            ke: "7",
        },
        {
            id: 8,
            ke: "8",
        },
        {
            id: 9,
            ke: "9",
        },
        {
            id: 10,
            ke: "10",
        },
        {
            id: 11,
            ke: "11",
        },
        {
            id: 12,
            ke: "12",
        },
        {
            id: 13,
            ke: "13",
        },
        {
            id: 14,
            ke: "14",
        },
        {
            id: 15,
            ke: "15",
        },
        {
            id: 16,
            ke: "16",
        },
    ]);

    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-slate-900 relative">
            <Navbar />
            <div className="w-full p-4">
                <div className="flex flex-col p-4 justify-center items-start w-full text-white bg-indigo-900 rounded-lg">
                    <p className="font-bold text-2xl">Pemrograman Web TI5A</p>
                    <p className="text-lg">Pak Budi</p>
                    <div className="flex w-full justify-between items-center">
                        <p className="text-lg">Ruang Lab 3</p>
                        <p className="text-lg">Jumat, 8.00 - 10.30</p>
                    </div>
                    <div className="flex w-full justify-between items-start">
                        <div className="flex flex-col">
                            <p className="text-lg">3 SKS</p>
                            <p className="text-lg">Semester 5</p>
                        </div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className="btn btn-md ml-auto btn-primary mt-1 place-self-end text-white"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_5")
                                    .showModal()
                            }
                        >
                            Edit
                        </button>
                        <dialog
                            id="my_modal_5"
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">
                                    Press ESC key or click the button below to
                                    close
                                </p>
                                <div className="modal-action ">
                                    <form
                                        method="dialog"
                                        className="w-full flex gap-2"
                                    >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-primary flex-1">
                                            Simpan
                                        </button>
                                        <button className="btn btn-secondary flex-1">
                                            Close
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-4 justify-center items-start gap-2 w-full text-white">
                <p className="text-lg font-bold">Daftar Pertemuan</p>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-2 btn btn-block justify-start bg-indigo-900 text-white"
                    >
                        <div className="text-left text-lg">
                            Pertemuan {item.ke}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
