import { Shadow } from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const RestaurantMenu = () => {
    const { resId } = useParams();
    const Data = useRestaurantMenu(resId);
    const [showItems, setShowItems] = useState(null);
    const [curRes, setCurRes] = useState({});

    if (Data == null) {
        return (
            <div>
                <Shadow />
            </div>
        );
    }

    const { name, id, cuisines, costForTwoMessage } = Data?.cards[2]?.card?.card?.info;
    const bar = Data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const handleAccordion = (categoryId, items) => {
        console.log("categoryId,items : ",categoryId,items)
        console.log(showItems)
         // Updating showItems state
         if (showItems === categoryId) {
            setShowItems(null); // Collapse if the same category is clicked again
        } else {
            setShowItems(categoryId); // Expand the new category
        }

        setCurRes((prevState) => {
            console.log("prevState",prevState)
            const newCurRes = { ...prevState };
            console.log("prevState , newCurRes",prevState,newCurRes)
            newCurRes[categoryId] = items;
            return newCurRes;
        });
    };

    return (
        <div>
            {bar.map((e, index) => {
                if (e?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                    const categoryId = e?.card?.card?.title;
                    const items = e?.card?.card?.itemCards;

                    return (
                        <div key={index}>
                            <div
                                className="flex cursor-pointer justify-between text-center my-3 mx-auto w-8/12 border-b-8"
                                onClick={() => handleAccordion(categoryId, items)}
                            >
                                <h3 className="flex font-bold text-lg">{categoryId} ({items?.length})</h3>
                                <p>{showItems===categoryId ? "🔼" : "🔽"}</p>
                            </div>
                            {showItems===categoryId && (
                                <div className="text-center">
                                    {curRes[categoryId]?.map((i, idx) => (
                                        <div key={idx} className="flex text-left justify-between mx-auto w-8/12 border-b-2 p-2">
                                            <div className="p-2 text-left w-8/12">
                                                <h4 className="font-bold">{i?.card?.info?.name}</h4>
                                                <h4 className="font-bold">
                                                    ₹{i?.card?.info?.price / 100 || i?.card?.info?.defaultPrice / 100}
                                                </h4>
                                                <p className="text-green-600">
                                                    {i?.card?.info?.ratings?.aggregatedRating?.rating ? (
                                                        <p>
                                                            ⭐{i?.card?.info?.ratings?.aggregatedRating?.rating}
                                                            <span className="text-gray-600">
                                                                ({i?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                                                            </span>
                                                        </p>
                                                    ) : (
                                                        <p></p>
                                                    )}
                                                </p>
                                                <p>{i?.card?.info?.description}</p>
                                            </div>
                                            <div>
                                                <p className="">
                                                    {i?.card?.info?.imageId ? (
                                                        <div>
                                                            <button className="bg-green-600 text-white absolute rounded-lg w-16 h-8 my-24 mx-6">
                                                                Add
                                                            </button>
                                                            <img className="w-28 h-28" src={LOGO_URL + i?.card?.info?.imageId} alt="" />
                                                        </div>
                                                    ) : (
                                                        <button className="bg-green-600 text-white rounded-lg w-16 h-8 my-6 mx-6">
                                                            Add
                                                        </button>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};
