import post1 from "../Images/post1.jpg";
import post2 from "../Images/post2.jpg";
import post3 from "../Images/post3.jpg";
import post4 from "../Images/post4.jpg";
import post5 from "../Images/post5.jpg";
import post6 from "../Images/post6.jpg";
import post7 from "../Images/post7.jpg";
import post8 from "../Images/post8.jpg";
import post9 from "../Images/post9.jpg";



export default function Posts() {
    return(
        <>
            <div class="grid grid-cols-3 gap-8 px-6 py-6 mx-2 w-full lg:mx-56 lg:w-2/3">
                <div className="">
                    <img src={post1} alt="post1" />
                </div>
                <div className="">
                    <img src={post2} alt="post2" />
                </div>
                <div className="">
                    <img src={post3} alt="post3" />
                </div>
                <div className="">
                    <img src={post4} alt="post4" />
                </div>
                <div className="">
                    <img src={post5} alt="post5" />
                </div>
                <div className="">
                    <img src={post6} alt="post6" />
                </div>
                <div className="">
                    <img src={post7} alt="post7" />
                </div>
                <div className="">
                    <img src={post8} alt="post8" />
                </div>
                <div className="">
                    <img src={post9} alt="post9" />
                </div>
            </div>
        </>
    );
}