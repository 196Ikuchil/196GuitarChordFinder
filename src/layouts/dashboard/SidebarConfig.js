import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import musicBoxMultipleOutline from '@iconify-icons/mdi/music-box-multiple-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'sidebar.diatonic.title',
    path: '/dashboard/diatonic',
    icon: getIcon(musicBoxMultipleOutline)
  },
  {
    title: 'sidebar.chordsearch.title',
    path: '/dashboard/chordsearch',
    icon: getIcon(peopleFill)
  },
  {
    title: 'sidebar.keep.title',
    path: '/dashboard/keep',
    icon: getIcon(shoppingBagFill)
  }
];

export default sidebarConfig;
