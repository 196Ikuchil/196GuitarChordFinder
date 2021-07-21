import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import musicBoxMultipleOutline from '@iconify-icons/mdi/music-box-multiple-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'sidebar.chordsearch.title',
    path: '/dashboard/chordsearch',
    icon: getIcon(peopleFill)
  },
  {
    title: 'sidebar.keep.title',
    path: '/dashboard/keep',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'sidebar.scrapbook.title',
    path: '/dashboard/scrapbook',
    icon: getIcon(musicBoxMultipleOutline)
  }
];

export default sidebarConfig;
