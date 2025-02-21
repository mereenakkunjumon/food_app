import {LOGO_URL} from "../utils/constants";

const Header=()=>{
    return(
        <div className="inline-flex items-center px-13 bg-lime-200 w-full">
        <div>
            <img src={LOGO_URL} alt="logo" className="h-20 w-25"></img>
        </div>
        <div className="w-full ">
            <ul className="flex w-full justify-evenly">
                <li className="px-10">Home</li>
                <li className="px-10">contact</li>
                <li className="px-10">about us</li>
                <li className="px-10">cart</li>
            </ul>
        </div>
        </div>
    )
}
export default Header;