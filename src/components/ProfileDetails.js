import ViratDP from "../Images/virat-dp.jpg";
import Verified from "../Images/verified logo.png";

export default function ProfileDetails() {
    return(
        <div>
            <div className="px-6 py-6 w-full mx-5 lg:mx-56">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-initial h-36 px-2 py-2 lg:px-24 py-4 h-64 w-1/4">
                        <img src={ViratDP} alt="profile pic" className="rounded-full"/>
                    </div>
                    <div className="flex-initial">
                        {/* Username and buttons */}
                        <div className="flex">
                            <div>
                                <h3 className="text-2xl font-light">virat.kohli</h3>
                            </div>
                            <div className="h-8 w-8">
                                <img src={Verified} alt="verified logo" />
                            </div>
                            <div className="ml-6">
                                <button className="bg-transparent text-sm hover:bg-gray-500 text-black font-medium hover:text-white py-1 px-2.5 border border-gray-300 hover:border-transparent rounded">
                                    Follow
                                </button>
                            </div>
                            <div className="ml-2">
                                <button className="bg-transparent text-sm hover:bg-gray-500 text-black font-medium hover:text-white py-1 px-2.5 border border-gray-300 hover:border-transparent rounded">
                                    Message
                                </button>
                            </div>
                            <div className="h-8 w-8 ml-4">
                                <h1 className="font-black">.  .  .</h1>
                            </div>
                        </div>

                        {/* Posts and follow details */}
                        <div className="flex mt-6">
                            <div className="flex">
                                <h2 className="font-medium text-sm">1,475</h2>
                                <h2 className="ml-1 text-sm">posts</h2>
                            </div>
                            <div className="ml-8 flex">
                                <h2 className="font-medium text-sm">266M</h2>
                                <h2 className="ml-1 text-sm">followers</h2>
                            </div>
                            <div className="ml-8 flex">
                                <h2 className="font-medium text-sm">263</h2>
                                <h2 className="ml-1 text-sm">following</h2>
                            </div>
                        </div>

                        {/* Display name */}
                        <div className="flex flex-col mt-6">
                            <div className="flex">
                                <h2 className="font-medium text-sm">Virat Kohli</h2>
                            </div>
                            <div className="flex mt-1">
                                <h2 className="text-sm">Carpediem!</h2>
                            </div>
                            <div className="flex">
                                <a href="https://l.instagram.com/?u=http%3A%2F%2Fone8.com%2F&e=ATNILmrqPSaNtb2QNaIHKRp_-VsZxnRTUekBcpyjuX2_vL74qRTxKAUEKT8HPqu10jXDJ5sFYu4XPIcM&s=1" className="text-blue-800 hover:underline cursor-pointer">one8.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-200 mt-10 w-full lg:w-2/3"></div>
            </div>
        </div>
    );
}