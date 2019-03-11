import * as React from 'react';
import {rule} from 'p4-css';
import {theme} from '../../theme';
import ButtonGoogle from '../../molecules/ButtonGoogle';
import {withT, T} from 'use-t';

const classes = {
  block: rule({
    padding: '30px',
    maxW: '500px',
    mar: '0 auto',
  }),
  title: rule({
    ...theme.font.sansLite,
    fontSize: '45px',
    letterSpacing: '-2px',
    ta: 'center',
    col: theme.steel,
  }),
};

export interface Props {
  onSignInClick?: React.MouseEventHandler<any>;
}

const SignIn: React.SFC<Props> = withT(({t = T, onSignInClick}) => {
  return (
    <div className={'fadeIn' + classes.block}>
      <h1 className={classes.title}>{t('Sign-in to Get Started')}</h1>
      <ButtonGoogle text={t('Sign-in with') + ' Google'} onClick={onSignInClick} />
    </div>
  );
});

export default SignIn;
