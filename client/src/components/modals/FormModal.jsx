export default function FormModal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div
                tabIndex="-1"
                className="fixed flex inset-0 items-center mx-auto z-50 p-4 overflow-x-hidden overflow-y-auto"
            >
                <div className="flex flex-col relative w-full max-w-2xl m-auto bg-[#f7f7f7] dark:bg-[#1c1c1c] text-black dark:text-white rounded-lg shadow">
                    <div className="p-4 space-y-6">{children}</div>
                </div>
            </div>

            <div
                className="bg-black/75 h-full w-full fixed z-40"
                onClick={onClose}
            ></div>
        </>
    )
}