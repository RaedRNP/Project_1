function Button(props) {
    return (
        <>
            <button className="bg-transparent border-solid border-2 border-black text-black rounded-lg py-1 px-5 transition hover:bg-black hover:text-white">
                {props.title}
            </button>
        </>
    )
}

export default Button