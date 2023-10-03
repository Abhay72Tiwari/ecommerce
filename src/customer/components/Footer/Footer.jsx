import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div>
            <Grid
                className="bg-black text-white text-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">
                        Company
                    </Typography>
                    <div>
                        <button className="pb-5" variant="h6">
                            About
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Blog
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Press
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Jobs
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Partners
                        </button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">
                        Marketing
                    </Typography>
                    <div>
                        <button className="pb-5" variant="h6">
                            Analytics
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Commerce
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Insights
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Support
                        </button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">
                        Documentation
                    </Typography>
                    <div>
                        <button className="pb-5" variant="h6">
                            Guides
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            API Status
                        </button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">
                        Legal
                    </Typography>
                    <div>
                        <button className="pb-5" variant="h6">
                            Claim
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Privacy
                        </button>
                    </div>
                    <div>
                        <button className="pb-5" variant="h6">
                            Terms
                        </button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 MY company. All rights reserved
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Contact me{'  '}
                        <Link href="https://www.linkedin.com/in/abhay-tiwari-39b416222/" color="inherit" underline="always">
                            Linkdin- Abhay Tiwari {'   '}
                        </Link>
                        {' '}

                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
