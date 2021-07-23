import { useRef, useState, useEffect } from 'react';
// material
import { alpha } from '@material-ui/core/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
// icon
import { Icon, InlineIcon } from '@iconify/react';
import flagForFlagJapan from '@iconify-icons/noto-v1/flag-for-flag-japan';
// components
import { useTranslation } from 'react-i18next';
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'ja',
    label: 'Japanese',
    icon: `${process.env.PUBLIC_URL}/static/icons/ic_flag_ja.svg`
  },
  {
    value: 'en',
    label: 'English',
    icon: `${process.env.PUBLIC_URL}/static/icons/ic_flag_en.svg`
  }
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setting = (lng) => {
    setLang(lng);
    handleClose();
  };

  function getCurrentLngIndex() {
    return LANGS.findIndex(({ value }) => value === lang);
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <img src={LANGS[getCurrentLngIndex()].icon} alt={LANGS[getCurrentLngIndex()].label} />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === i18n.language}
              onClick={() => setting(option.value)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}
