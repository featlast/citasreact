const Error = ({children}) => {
    return (
        <div className={'uppercase bg-red-800 text-white font-bold text-center rounded-md p-2 mb-3 '}>
            <p>{children}</p>
        </div>
    );
};

export default Error;
