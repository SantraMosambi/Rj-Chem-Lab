import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

export const SidebarData = [

    {
        title: "Glassware",
        path: "/glassware",
        icon: < RiIcons.RiTestTubeLine / > ,
    },
    {
        title: "Instrument",
        path: "/instrument",
        icon: < SiIcons.SiBandlab / > ,
    },
    {
        title: "Chemical",
        path: "/chemical",
        icon: < FaIcons.FaFlask / > ,
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpen: < RiIcons.RiArrowUpSFill / > ,
        subNav: [{
                title: "Organic",
                path: "/chemical/organic",
            },
            {
                title: "InOrganic",
                path: "/chemical/inorganic",
            },
            {
                title: "MSc",
                path: "/chemical/msc",
            },

            {
                title: "Indicator",
                path: "/chemical/indicator",
            },
        ],
    },

    {
        title: "Quotation",
        path: "/quotation",
        icon: < IoIcons.IoIosPaper / > ,
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpen: < RiIcons.RiArrowUpSFill / > ,
        subNav: [{
                title: "Organic",
                path: "/quotation/organic",
            },
            {
                title: "In-Organic",
                path: "/quotation/inorganic",
            },
            {
                title: "Indicator",
                path: "/quotation/indicator",
            },
        ],
    },

    {
        title: "Stock",
        path: "/stock",
        icon: < AiIcons.AiOutlineFieldNumber / > ,
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpen: < RiIcons.RiArrowUpSFill / > ,
        subNav: [{
                title: "Organic",
                path: "/stock/organic",
            },
            {
                title: "InOrganic",
                path: "/stock/inorganic",
            },
            {
                title: "MSc",
                path: "/stock/msc",
            },

            {
                title: "Indicators",
                path: "/stock/indicator",
            },
            {
                title: "Glassware",
                path: "/stock/glassware",
            },
        ],
    },
    {
        title: "Daily Issue Register",
        path: "/dir",
        icon: < IoIcons.IoIosPaper / > ,
    }
];