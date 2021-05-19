const Login = () => {
    return (
        <div className="absolute w-screen h-screen flex">
            <div className="m-auto border-2 border-gray-200 rounded-lg p-5 mt-[250px]">
                <div className="text-lg">login</div>
                <input
                    className="border border-gray-200  bg-none"
                    type="text"
                    id="email_or_username"
                />
                <br />
                <input type="text" id="password" />
            </div>
        </div>
    )
}

export default Login
