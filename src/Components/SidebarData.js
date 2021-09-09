import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [{
        title: "Chemicals",
        path: "/chemicals",
        icons: < FaIcons.FaFlask / > ,
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpen: < RiIcons.RiArrowUpSFill / > ,
        subnav: [{
                title: "Organic",
                path: "/chemicals/organic",
            },
            {
                title: "InOrganic",
                path: "/chemicals/inorganic",
            },
            {
                title: "MSc",
                path: "/chemicals/msc",
            },

            {
                title: "Indicators",
                path: "/chemicals/indicators",
            },
        ],
    },

    {
        title: "Glassware",
        path: "/glassware",
        icons: < RiIcons.RiTestTubeLine / > ,
    },

    {
        title: "Quotation",
        path: "/quotation",
        icons: < IoIcons.IoIosPaper / > ,
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpen: < RiIcons.RiArrowUpSFill / > ,
        subnav: [{
                title: "Organic",
                path: "/quotation/organic",
            },
            {
                title: "InOrganic",
                path: "/quotation/inorganic",
            },
            {
                title: "Indicators",
                path: "/quotation/indicators",
            },
        ],
    },
    {
        title: "Instrument",
        path: "/instrument",
        icons: < GrIcons.GrDocumentTest / > ,
    },
    {
        title: "Stock",
        path: "Stock",
        icons: < AiIcons.AiOutlineFieldNumber / > ,
        iconClosed: < RiIcons.RiArrowDownSFill / > ,
        iconOpen: < RiIcons.RiArrowUpSFill / > ,
        subnav: [{
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
                path: "/stock/indicators",
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
        icons: < IoIcons.IoIosPaper / > ,
    }
];