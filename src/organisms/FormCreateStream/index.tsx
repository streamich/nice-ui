import * as React from 'react';
import {InputLine} from '../../molecules/InputLine';
import {Button} from '../../molecules/Button';
import {Checkbox} from '../../molecules/Checkbox';
import {rule} from 'p4-css';
import {withT} from 'use-t';
import {Group} from 'libreact/lib/Group';
import FixedColumn from '../../atoms/FixedColumn';
import {theme} from '../../theme';

const className = rule({
  maxW: '400px',
  mar: '0 auto',
  pad: '40px 30px 60px',
});

const classNameFullScreen = rule({
  w: '70vw',
  maxW: '600px',
  minW: '250px',
  mar: '0 auto',
});

const labelTextClass = rule({
  ...theme.font.sansLite,
  fz: '13px',
  lh: '18px',
  col: theme.grey[3],
});

export interface Props {
  name: string;
  fullscreen?: boolean;
  disabled?: boolean;
  isPrivate?: boolean;
  onSubmit?: React.FormEventHandler<any>;
  onChangeName: (value: string) => void;
  onTogglePrivate?: () => void;
}

const FormCreateStream: React.SFC<Props> = withT(
  ({t, name, isPrivate, fullscreen, disabled, onSubmit, onChangeName, onTogglePrivate}) => {
    const onSubmitInner = (event) => {
      event.preventDefault();
      if (onSubmit) onSubmit(event);
    };
    let element = (
      <Group as="form" className={className} separator={<br />} onSubmit={onSubmitInner}>
        <InputLine focus value={name} label={t('Stream name')} disabled={disabled} onChange={onChangeName} />
        {onTogglePrivate && (
          <FixedColumn left={56} as="label" style={{padding: '10px 0'}}>
            <div>
              <Checkbox on={isPrivate} small onChange={disabled ? undefined : onTogglePrivate} />
            </div>
            <div className={labelTextClass}>{t('Make it private')}</div>
          </FixedColumn>
        )}
        <Button block primary positive disabled={disabled} size={1}>
          {t('Create stream')}
        </Button>
      </Group>
    );

    if (fullscreen) {
      element = <div className={classNameFullScreen}>{element}</div>;
    }

    return element;
  },
);

export default FormCreateStream;
