import {rule} from 'p4-css';
import {theme} from '../../../../theme';
import {size as moreIconSize} from '../../../../molecules/SettingsDropdown';

const hoverColor = '#FcFdFf';

const wrapClass = rule({
  pad: `${theme.space[2]}px 0`,
  '&:hover': {
    bgc: hoverColor,
  },
});

export const classes = {
  wrap: wrapClass,
  block: rule({
    d: 'flex',
    w: '100%',
    flexWrap: 'nowrap',
    maxW: '1200px',
    mar: '0 auto',
  }),
  left: rule({
    w: '22%',
    flexShrink: 0,
  }),
  right: rule({
    w: 'calc(78% - 41px)',
    pos: 'relative',
  }),
  iconMore: rule({
    d: 'none',
    pos: 'absolute',
    top: `-${moreIconSize * 0.4}px`,
    right: 0,
    w: moreIconSize + 'px',
    h: moreIconSize + 'px',
    [`.${wrapClass.trim()}:hover &`]: {
      d: 'block',
    },
  }),
  iconMoreSmall: rule({
    right: `${theme.space[4] - 5}px`,
    top: `${theme.space[3] - 2}px`,
  }),
};

export const small = {
  block: rule({
    flexWrap: 'wrap',
  }),
  left: rule({
    w: '100%',
  }),
  right: rule({
    pad: `${theme.space[2]}px 0 0`,
  }),
};
