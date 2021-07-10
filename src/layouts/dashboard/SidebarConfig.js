import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import musicBoxMultipleOutline from '@iconify-icons/mdi/music-box-multiple-outline';
import { Trans } from 'react-i18next';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
const t = (key) => <Trans i18nKey={key} />;

const sidebarConfig = [
  {
    title: t('sidebar.dashboard.title'),
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: t('sidebar.diatonic.title'),
    path: '/dashboard/diatonic',
    icon: getIcon(musicBoxMultipleOutline)
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
