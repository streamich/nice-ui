import * as React from 'react';
import {P4Asset} from '../../util/types';
import {classes} from './css';
import hashColor from '../../util/hashColor';
import {Slash} from '../../atoms/Slash';

export interface Props {
  asset?: P4Asset;
  onClick?: React.MouseEventHandler<any>;
}

const CardStream: React.SFC<Props> = ({asset, onClick}) => {
  const color = hashColor(asset.id);
  const name = asset.name || '';
  const style = {
    background: color,
  };

  return (
    <Slash color="rgba(255,255,255,.5)" ms={600}>
      <div className={classes.block} style={style} onClick={onClick}>
        <div className={classes.letters}>{name.substr(0, 2)}</div>
        <div className={classes.texts}>
          <div className={classes.name}>{name}</div>
        </div>
      </div>
    </Slash>
  );
};

export default CardStream;
