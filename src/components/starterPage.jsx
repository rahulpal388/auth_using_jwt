


export function StarterPage() {




    return <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800 p-5 h-[34.6rem] flex flex-col justify-center  items-center">
        <div>
            <h1 className="text-5xl">User Authentication System Demo</h1>
        </div>
        <div className="mt-5 text-2xl mb-3">
            <div>
                <p>
                    1. This system authenticate user by using JSON Web Token (JWT).
                </p>
            </div>
            <div>
                <p>
                    2. It Store the token in the LocalStorage of WebBrower.
                </p>
            </div>
            {/* <div>
                <p>
                    3. After 5Min your Token will expire.
                </p>
            </div> */}
        </div>
    </div>
}

