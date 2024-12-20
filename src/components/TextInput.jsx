export default function TextInput({ label, style, type="text", placeholder }) {
    return (
        <label className={`form-control w-full max-w-xs ${style}`}>
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                className="input input-bordered w-full max-w-xs"
            />
        </label>
    );
}
