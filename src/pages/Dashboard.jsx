import { useState } from "react";
import SearchInput from "../components/SearchInput";
import Select from "../components/Select";

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
		<div className="flex flex-col items-start justify-start h-screen bg-slate-900">
			<div className="flex flex-row p-4 justify-center items-end gap-2 w-full text-white">
				<SearchInput styles={"w-0 grow-[1.9]"} />
				<Select styles={"w-0 grow-[1]"} />
			</div>
			<div className="flex flex-col p-4 justify-center items-start gap-2 w-full text-white">
				<p>Daftar Matkul</p>
				{data.map((item) => (
					<div
						key={item.id}
						className="flex items-center gap-2 btn btn-block justify-start bg-indigo-900 text-white"
					>
						<div className="text-left">{item.matkul}</div>
					</div>
				))}
			</div>
		</div>
	);
}
