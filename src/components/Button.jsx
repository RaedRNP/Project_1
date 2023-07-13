function Button(props) {
    return (
        <>
            <button className="text-base tracking-wider font-medium bg-transparent border-solid border-2 border-purple-950 text-purple-950 rounded-lg py-2 px-14 transition hover:border-purple-900 hover:bg-purple-900 hover:text-[#fff]">
                {props}
            </button>
        </>
    )
}

export default Button