import pencil from "../../../public/pencil.png";


export default function SideBanner() {
    return (
        <div className="hidden lg:block w-1/4">
            {/* <div className="fixed left-85 top-40 w-60 h-80 bg-pink-100 shadow-lg rounded-lg p-10 flex flex-col items-center justify-between">

                    <div className="text-lg font-semibold">L Side Banner</div>
                    <div>
                        <img src={pencil.src} alt="" width={130} />
                    </div>
                    <p className="mt-2 text-gray-600">이 자리에 광고할 사람 구함ㅋ</p>
            </div> */}

            <div className="fixed right-85 top-40 w-60 h-80 bg-pink-100 shadow-lg rounded-lg p-10 flex flex-col items-center justify-between">

                    <div className="text-lg font-semibold">R Side Banner</div>
                    <div>
                        <img src={pencil.src} alt="" width={130} />
                    </div>
                    <p className="mt-2 text-gray-600">이 자리에도 광고할 사람 구함ㅋ</p>
            </div>
        </div>
    );
}