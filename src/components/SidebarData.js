import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoIosPerson/>,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <BsIcons.BsFiles />,
        cName: 'nav-text'
    },

    {
        title: 'Professional Experience',
        path: '/professional',
        icon: <BsIcons.BsFiles />,
        cName: 'nav-text'
    },



    {
        title: 'Contact',
        path: '/contact',
        icon: <MdIcons.MdMailOutline/>,
        cName: 'nav-text'
    },

    {
        title: 'Projects',
        path: '/projects',
        icon: <MdIcons.MdApps/>,
        cName: 'nav-text'
    },
    


]