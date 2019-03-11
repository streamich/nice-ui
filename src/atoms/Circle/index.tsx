import * as React from 'react';
import {rule} from 'p4-css';

export interface Props extends React.SVGAttributes<any> {
  active?: boolean;
  size?: number;
  color?: string;
  wide?: boolean;
  hoverable?: boolean;
}

const strokeWidth = 3;
const strokeWidthWide = 4;
const viewBox = 50;
const radius = viewBox / 2;
const length = 2 * Math.PI * radius;
const rotationStartDeg = -45;
const rotationOffsetDeg = 150;
const activeCss = {
  strokeDashoffset: 0,
  transform: `rotate(${rotationStartDeg + rotationOffsetDeg}deg)`,
  op: 1,
  transition: 'stroke-dashoffset .6s,stroke .6s,transform .6s,opacity .03s',
};
const classNameCircle = rule({
  transform: `rotate(${rotationStartDeg}deg)`,
  transformOrigin: '50% 50%',
  fill: 'transparent',
  strokeWidth,
  strokeDasharray: length,
  strokeDashoffset: length,
  strokeLinecap: 'round',
  transition: 'stroke-dashoffset .6s,stroke .6s,transform .6s,opacity .5s',
  op: 0,
});
const classNameCircleWide = rule({
  strokeWidth: strokeWidthWide,
});
const classNameCircleHoverable = rule({
  '&:hover': activeCss,
});
const classNameCircleActive = rule(activeCss);

const Circle: React.SFC<Props> = ({hoverable, active = !hoverable, color, size, wide, ...rest}) => {
  return (
    <svg width={size} height={size} {...rest} viewBox={`0 0 ${viewBox} ${viewBox}`}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - (wide ? strokeWidthWide : strokeWidth) / 2}
        className={
          classNameCircle +
          (active ? classNameCircleActive : '') +
          (wide ? classNameCircleWide : '') +
          (hoverable ? classNameCircleHoverable : '')
        }
        style={{
          stroke: color,
        }}
      />
    </svg>
  );
};

Circle.defaultProps = {
  color: '#000',
  size: 64,
};

export default Circle;
