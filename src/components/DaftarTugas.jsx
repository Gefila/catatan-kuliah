import { useState } from "react";

export default function DaftarTugas() {
	const [data, setData] = useState([
		{
			id: 1,
			matkul: "Pemrograman Web",
			deadline: "18/12/2024",
		},
		{
			id: 2,
			matkul: "Pemrograman Mobile",
			deadline: "18/12/2024",
		},
	]);

	return (
		<div className="flex flex-col gap-2 justify-start items-start w-full text-white">
			<p>Daftar Tugas</p>
			{data.map((item) => (
				<div
					key={item.id}
					className="flex flex-col gap-2 btn btn-block items-start bg-indigo-900 text-white h-auto"
				>
					<div className="text-left">{item.matkul}</div>
					<div className="text-right">{item.deadline}</div>
				</div>
			))}
		</div>
	);
}
