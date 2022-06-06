import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <SiIcons.SiAboutdotme />,
     
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/Skills',
    icon: <SiIcons.SiKnowledgebase />,
    cName: 'nav-text'
  },
  {
    title: 'projects',
    path: '/projects',
    icon: <AiIcons.AiOutlineFundProjectionScreen />,
    cName: 'nav-text'
  },
  {
    title: 'GetInTouch',
    path: '/GetInTouch',
    icon: <MdIcons.MdContactPhone />,
    cName: 'nav-text'
  },
  
];