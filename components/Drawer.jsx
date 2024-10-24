export default function Drawer(props) {
    let drawerOpen = props.drawerOpen;
    let setDrawerOpen = props.setDrawerOpen;

    return (
        <>
            {
                drawerOpen ? (
                    <div className="z-10 top-0 left-0 m-0 p-0 bg-[#1e213a] absolute w-full h-screen">
                        <div className="w-full px-5 py-2 flex flex-col gap-2 text-white">
                            <button
                                className="self-end mt-4 mb-3"
                                onClick={ () => setDrawerOpen(false) }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </button>

                            <button className="w-3/4 border-2 py-1 pl-4 text-left">
                                Arequipa
                            </button>

                            <button className="w-3/4 border-2 py-1 pl-4 text-left">
                                Santa Cruz
                            </button>

                            <button className="w-3/4 border-2 py-1 pl-4 text-left">
                                Salt Lake
                            </button>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}
