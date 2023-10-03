import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from "react";
import { Button } from "@mui/base";
const CartItem = () => {
    return (
        <div className="p-5 ml-5  mr-5 mt-2 shadow-lg border rounded-md">
            <div className="flex item-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img
                        className="w-full h-full object-cover object-top"
                        src="img/secondBanner.jpg"
                    />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                    <p className="opacity-70">Size: L,White</p>
                    <p className="opacity-70 mt-2"> Seller: Abhay Tiwari</p>

                    <div className="flex space-x-5 items-center  text-gray-900 pt-6">
                        <p className="font-semibold ">199</p>
                        <p className="opacity-50 line-through">211</p>
                        <p className="text-green-600 font-semibold">%5 Off</p>
                    </div>
                </div>
               
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex item-center space-x-2">
                      <IconButton>
                        <RemoveCircleOutlineIcon/>
                      </IconButton>
                      <span className="py-1 px-7 border rounded-sm">3</span>
                      <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddIcon/>
                      </IconButton>
                    </div>
                    <div>
                        <Button sx={{blur:"RGB(145 85 253)"}}>Remove</Button>
                    </div>
                </div>
        </div>
    );
};

export default CartItem;
