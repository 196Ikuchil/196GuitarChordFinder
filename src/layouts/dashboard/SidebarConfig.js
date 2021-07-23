import { Icon } from '@iconify/react';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import musicBoxMultipleOutline from '@iconify-icons/mdi/music-box-multiple-outline';
import bxSearchAlt from '@iconify-icons/bx/bx-search-alt';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'sidebar.chordsearch.title',
    path: '/196GuitarChordFinder/dashboard/chordsearch',
    icon: getIcon(bxSearchAlt)
  },
  {
    title: 'sidebar.keep.title',
    path: '/196GuitarChordFinder/dashboard/keep',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'sidebar.scrapbook.title',
    path: '/196GuitarChordFinder/dashboard/scrapbook',
    icon: getIcon(musicBoxMultipleOutline)
  }
];

export default sidebarConfig;
