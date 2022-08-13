const Attribute = (props) => {
    return (
        <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 underline decoration-indigo-500 underline-offset-8 decoration-4 pt-6 pb-6 flex flex-row">
            <h1 className=" text-white text-xl flex flex-row justify-evenly items-center">{props.first}</h1>
            <h1 className="pl-4 pr-4 text-white text-xl flex flex-row justify-evenly items-center">-</h1>
            <h1 className=" text-white text-xl flex flex-row justify-evenly items-center">{props.second}</h1>
        </div>
    );
}

export default Attribute;