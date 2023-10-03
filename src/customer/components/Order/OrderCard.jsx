import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
    const navigate = useNavigate();
    const handleNaviagate = () => {
        navigate(`/account/order/${5}`)
    }
    return (
        <div onClick={handleNaviagate} className="p-5 shadow-md shadow-black hover:shadow-2xl">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer mt-3">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://media.istockphoto.com/id/1152823479/photo/confident-trendy-boy-with-skateboard.webp?b=1&s=170667a&w=0&k=20&c=BN7mrOFp0Z-V130kLwPB2G0qCjvo_0F0zXcbTJONGBI="
                            alt=""
                        />
                        <div className="ml-5 spce-y-2">
                            <p className="">Men Slim Mid Shirt</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p className="flex cursor-pointer mt-3">1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true && (
                        <div>  <p className="flex cursor-pointer mt-3">
                            {" "}
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 mr-2 text-sm"
                            />{" "}
                            <span>Deliverd On March 03</span>

                        </p>
                            <p> your Item Has Been Delivred</p>
                        </div>
                    )}
                    {false && (
                        <p className="flex cursor-pointer mt-3">
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 mr-2 text-sm"
                            />{" "}
                            <span>Expected On March 03</span>
                        </p>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
