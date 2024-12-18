export default function Select({ styles }) {
	return (
		<label className={`form-control max-w-xs ${styles}`}>
			<select className="select select-bordered">
				<option disabled selected>
					Urutkan
				</option>
				<option>Matkul</option>
				<option>Dosen</option>
			</select>
		</label>
	);
}
