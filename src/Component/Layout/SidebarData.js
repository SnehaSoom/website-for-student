import React from 'react';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import { MdPeopleAlt } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Assest.Home />,
    cName: 'nav-text'
  },
  {
    title: 'Features',
    path: '/features',
    icon: <Assest.Order />,
    cName: 'nav-text'
  },
  {
    title: 'Pricing',
    path: '/pricing',
    icon: <Assest.MdPayments />,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: '/students',
    icon: <MdPeopleAlt />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <svg className='mt-1' width="1em" height="1em" viewBox="0 0 933 933" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.00122404 664.454V69.1072C0.00122404 50.776 7.28076 33.2031 20.2367 20.2355C33.2047 7.27952 50.7767 0 69.1085 0H863.893C882.224 0 899.797 7.27952 912.765 20.2355C925.72 33.2034 933 50.7753 933 69.1072V664.454C933 682.785 925.72 700.358 912.765 713.325C899.797 726.281 882.225 733.561 863.893 733.561H154.171L0 933L0.00122404 664.454ZM397.393 348.546V594.577C397.393 619.272 410.566 642.085 431.946 654.426C453.327 666.78 479.673 666.78 501.051 654.426C522.432 642.085 535.604 619.269 535.604 594.577V348.546C535.604 323.851 522.431 301.038 501.051 288.697C479.671 276.343 453.324 276.343 431.946 288.697C410.566 301.038 397.393 323.854 397.393 348.546ZM397.393 138.959V140.466C397.393 165.16 410.566 187.974 431.946 200.315C453.327 212.656 479.673 212.656 501.051 200.315C522.432 187.974 535.604 165.158 535.604 140.466V138.959C535.604 114.276 522.431 91.4512 501.051 79.1098C479.671 66.7685 453.324 66.7685 431.946 79.1098C410.566 91.4512 397.393 114.276 397.393 138.959Z" />
    </svg>,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Assest.Product />,
    cName: 'nav-text'
  }
];
