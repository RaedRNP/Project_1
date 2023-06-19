function Button(props) {
    return (
        <>
            <button className="text-base tracking-wider font-medium bg-transparent border-solid border-2 border-white text-white rounded-lg py-2 px-14 transition hover:bg-white hover:text-[#203A43]">
                {props.title}
            </button>
        </>
    )
}

export default Button