import { LOGO_URL } from "../utils/constants";

const Restaurent = () => {
    return (
        <div className="border-2 border-black bg-gray-200 rounded-lg shadow-lg p-2 max-w-sm m-1">
            <img src={LOGO_URL} alt="logo" className="w-full h-25 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-3">Fort</h2>
            <h2 className="text-lg font-semibold">⭐ Rating: 4</h2>
            <h3 className="text-gray-700">🍽️ Cuisines: Biryani, Chicken Curry</h3>
        </div>
    );
};

export default Restaurent;
