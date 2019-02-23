import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import {withT} from 'use-t';
import {Button} from '../../molecules/Button';
import {rule} from '../../css';
import {theme} from '../../theme';

export const classes = {
  block: rule({
    mar: '0 auto',
    pad: 0,
    bg: '#fff',
    bd: `1px solid #e7e7e7`,
    ta: 'center',
    bdrad: `2px`,
    bxz: 'border-box',
    maxW: '1100px',
    boxShadow: '0 1px 2px rgba(0,0,0,.1)',
  }),
  blockActive: rule({
    bd: `1px solid #cbcbcb`,
    bdrad: `3px`,
    maxW: '1300px',
  }),
  textarea: rule({
    ...theme.font.mono,
    d: 'block',
    fz: '18px',
    bd: 0,
    pad: `${theme.space[3] - 4}px ${theme.space[3]}px`,
    mar: '0 auto',
    out: 'none',
    bxz: 'border-box',
    bg: 'transparent',
    lh: 1.5,
    resize: 'none',
    w: '100%',
    pos: 'relative',
    z: 2,
    ov: 'hidden',
    col: theme.steel,
    minH: '1em',
    maxW: '1102px',
  }),
  buttonWrap: rule({
    bdt: `1px solid ${theme.snow[1]}`,
  }),
  button: rule({
    ...theme.font.sans,
    fz: '11px',
    h: '40px',
    textTransform: 'uppercase',
    op: 0.7,
    '&:hover': {
      op: 1,
    },
  }),
};

export interface Props {
  value: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<any>;
  onSubmit?: () => void;
}

const Box: React.SFC<Props> = withT((props) => {
  const {t, value, placeholder, onChange, onSubmit} = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };
  return (
    <form className={classes.block + (value ? classes.blockActive : '')} onSubmit={handleSubmit}>
      <Textarea className={classes.textarea} value={value} placeholder={placeholder} onChange={onChange} />
      {value && (
        <div className={classes.buttonWrap}>
          <Button className={classes.button} block submit noRad lite style={{fontSize: '11px'}}>
            {t('Post')}
          </Button>
        </div>
      )}
    </form>
  );
});

export default Box;
