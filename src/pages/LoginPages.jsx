import TextInput from "../components/TextInput";

export default function LoginPages() {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
            <div className="flex flex-col  bg-slate-800 p-6 rounded-lg justify-center items-center gap-2">
                <header className="text-4xl font-bold">Login</header>
                <form>
                    <TextInput
                        label="Email"
                        style={"w-72"}
                        placeholder={"Masukkan Email"}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder={"Masukkan Password"}
                    />
                    <button className="btn btn-primary btn-block btn-md mt-4">
                        Login
                    </button>
                </form>
                <p>
                    Belum punya akun?{" "}
                    <a href="#" className="text-primary font">
                        Daftar
                    </a>
                </p>
            </div>
        </div>
    );
}
