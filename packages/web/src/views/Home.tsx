const Home = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full   lg:w-1/2 2xl:w-1/3 ">
                <h1 className="m-8 text-2xl font-semibold border-b border-gray-300 py-4">My safe</h1>
                <div>
                    1
                </div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className='flex-1 bg-yellow-400'>2</div>

        </div>
    );
};

export default Home;