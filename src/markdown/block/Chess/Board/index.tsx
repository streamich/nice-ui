import * as React from 'react';
import {cdn} from '../../../../conf';
import styles from './styles';

const h = React.createElement;

export type TPieceColor = 'b' | 'w';
export type TPieceType = 'r' | 'b' | 'k' | 'n' | 'p' | 'q' | 'R' | 'B' | 'K' | 'N' | 'P' | 'Q';
export type TSquarePositionComponent = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TPieceNames = 'br' | 'bb' | 'bk' | 'bn' | 'bp' | 'bq' | 'wr' | 'wb' | 'wk' | 'wn' | 'wp' | 'wq';
export type TLineBody = string | '-' | '--' | '---' | '----' | '-----' | '=' | '==' | '===' | '====' | '=====';
export type TLineTip =
  | string
  | ''
  | '>'
  | '>>'
  | '>>>'
  | '>>>>'
  | '>>>>>'
  | '<'
  | '<<'
  | '<<<'
  | '<<<<'
  | '<<<<<'
  | 'o'
  | 'O';

export interface ILine {
  from: [TSquarePositionComponent, TSquarePositionComponent];
  to: [TSquarePositionComponent, TSquarePositionComponent];
  body?: TLineBody;
  tipTo?: TLineTip;
  tipFrom?: TLineTip;
  color?: string;
  opacity?: number;
}

export interface ISquare {
  xy: [TSquarePositionComponent, TSquarePositionComponent];
  piece?: TPieceType;
  pieceOpacity?: number;
  color?: string;
  opacity?: number;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
}

export interface IBorder {
  xy: [TSquarePositionComponent, TSquarePositionComponent];
  segments: string;
  offset?: [number, number];
  segmentSize?: number;
  color?: string;
  opacity?: number;
  width?: number;
  fillColor?: string;
  fillOpacity?: number;
}

export interface IBoardLayout {
  lines?: ILine[];
  squares?: ISquare[];
  borders?: IBorder[];
}

const boardTheme = {
  white: '#eee',
  black: '#888',
};

const PIECES = {
  r: cdn + '/chess/br.png',
  b: cdn + '/chess/bb.png',
  k: cdn + '/chess/bk.png',
  n: cdn + '/chess/bn.png',
  p: cdn + '/chess/bp.png',
  q: cdn + '/chess/bq.png',
  R: cdn + '/chess/wr.png',
  B: cdn + '/chess/wb.png',
  K: cdn + '/chess/wk.png',
  N: cdn + '/chess/wn.png',
  P: cdn + '/chess/wp.png',
  Q: cdn + '/chess/wq.png',
};

const squareWidth = 100 * (1 / 8);
const pieceMargin = 0.0; // How far piece image is from square boundaries, in %.

function mapColor(color: string): string {
  color = color || 'green';
  switch (color) {
    case 'green':
      color = '#52aa05';
      break;
    case 'red':
      color = '#c6140d';
      break;
  }

  return color;
}

const borderWidth = 0.07;
const borderColor = '#000';
const borderOpacity = 0.65;

let globalMarkerId = 0;

export interface IBoardProps extends IBoardLayout {
  size?: undefined | -3 | -2 | -1 | 0 | 1 | 2 | 3;
  onClick?: (e) => void;
  onRightClick?: (e) => void;
}

export interface IBoardState {}

export class Board extends React.Component<IBoardProps, IBoardState> {
  static lineCnt = 0;

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render() {
    const {props} = this;
    const squares: React.ReactElement<any>[] = [];
    const figures: React.ReactElement<any>[] = [];
    const ruler: React.ReactElement<any>[] = [];

    const rulerStyle: React.CSSProperties = {
      fontFamily: 'Open Sans,sans',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: squareWidth * 0.25,
      fontSize: squareWidth * 0.21,
    };

    for (let i = 0; i < 8; i++) {
      for (let j = (i + 1) % 2; j < 8; j += 2) {
        // Draw black squares.
        squares.push(
          <rect
            key={`${i},${j}`}
            x={squareWidth * j}
            y={squareWidth * i}
            height={squareWidth}
            width={squareWidth}
            style={{fill: boardTheme.black}}
          />,
        );
      }

      // Draw ruler.
      ruler.push(
        <text
          x="1.2"
          y={squareWidth * i + 3.7}
          style={{fill: i % 2 ? '#fff' : '#000', opacity: i % 2 ? 0.5 : 0.4, ...rulerStyle}}
        >
          {8 - i}
        </text>,
      );
      ruler.push(
        <text
          y="98.5"
          x={squareWidth * i + 9.5}
          style={{fill: i % 2 ? '#000' : '#fff', opacity: i % 2 ? 0.4 : 0.5, ...rulerStyle}}
        >
          {(i + 10).toString(18)}
        </text>,
      );
    }

    // Line annotations
    const markers: React.ReactElement<any>[] = [];
    const lines: React.ReactElement<any>[] = [];

    if (props.lines && props.lines.length) {
      for (let i = 0; i < props.lines.length; i++) {
        const line = props.lines[i];
        const {from, to, tipFrom, tipTo, body} = line;
        const color = mapColor(line.color);
        const opacity = line.opacity || 0.8;
        const strokeWidth = (body[0] === '=' ? 8 : 3) / body.length;
        let tipToId;
        let tipFromId;

        if (tipTo) {
          tipToId = 'board-marker-' + globalMarkerId++;

          if (tipTo === 'o' || tipTo === 'O') {
            markers.push(
              <marker
                key={i}
                id={tipToId}
                markerWidth="10"
                markerHeight="10"
                refX="3"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
                viewBox="0 0 25 25"
              >
                <circle cx="3" cy="3" r={tipTo === 'o' ? 2 : 3} fill={color} />
              </marker>,
            );
          } else {
            const size = 25 - tipTo.length * 2;

            markers.push(
              <marker
                key={i}
                id={tipToId}
                markerWidth="10"
                markerHeight="10"
                refX="2.7"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
                viewBox={`0 0 ${size} ${size}`}
              >
                <path d="M0,0 L0,6 L4.5,3 z" fill={color} />
              </marker>,
            );
          }
        }

        if (tipFrom) {
          tipFromId = 'board-marker-' + globalMarkerId++;

          if (tipFrom === 'o' || tipFrom === 'O') {
            markers.push(
              <marker
                key={i}
                id={tipFromId}
                markerWidth="10"
                markerHeight="10"
                refX="3"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
                viewBox="0 0 25 25"
              >
                <circle cx="3" cy="3" r={tipFrom === 'o' ? 2 : 3} fill={color} />
              </marker>,
            );
          } else {
            const size = 25 - tipFrom.length * 2;

            markers.push(
              <marker
                key={i}
                id={tipFromId}
                markerWidth="10"
                markerHeight="10"
                refX="2.7"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
                viewBox={`0 0 ${size} ${size}`}
              >
                <path d="M4.5,0 L4.5,6 L0,3 z" fill={color} />
              </marker>,
            );
          }
        }

        const lineProps = {
          key: `line-${i}`,
          x1: (0.5 + from[0]) * squareWidth,
          y1: (7.5 - from[1]) * squareWidth,
          x2: (0.5 + to[0]) * squareWidth,
          y2: (7.5 - to[1]) * squareWidth,
          markerStart: tipFromId ? `url(#${tipFromId})` : undefined,
          markerEnd: tipToId ? `url(#${tipToId})` : undefined,
          stroke: color,
          strokeWidth: strokeWidth,
          style: {opacity},
        };

        lines.push(h('line', lineProps));
      }
    }

    // Square highlight
    const squaresHighlights: React.ReactElement<any>[] = [];

    if (props.squares instanceof Array) {
      for (let i = 0; i < props.squares.length; i++) {
        const square = props.squares[i];

        if (
          square.color ||
          (!square.piece && !square.borderTop && !square.borderRight && !square.borderBottom && !square.borderLeft)
        ) {
          squaresHighlights.push(
            <rect
              key={i}
              x={square.xy[0] * squareWidth}
              y={(7 - square.xy[1]) * squareWidth}
              height={squareWidth}
              width={squareWidth}
              style={{fill: mapColor(square.color), opacity: square.opacity || 0.35}}
            />,
          );
        }
        if (square.piece) {
          figures.push(
            <image
              key={i}
              x={squareWidth * square.xy[0]}
              y={squareWidth * (7 - square.xy[1])}
              width={squareWidth}
              height={squareWidth}
              xlinkHref={PIECES[square.piece]}
              style={{opacity: square.pieceOpacity || 1}}
            />,
          );
        }
        if (square.borderTop) {
          squaresHighlights.push(
            <rect
              key={i}
              x={square.xy[0] * squareWidth}
              y={(7 - square.xy[1]) * squareWidth}
              height={squareWidth * borderWidth}
              width={squareWidth}
              style={{fill: borderColor, opacity: borderOpacity}}
            />,
          );
        }
        if (square.borderRight) {
          squaresHighlights.push(
            <rect
              key={i}
              x={(square.xy[0] + 1 - borderWidth) * squareWidth}
              y={(7 - square.xy[1]) * squareWidth}
              height={squareWidth}
              width={squareWidth * borderWidth}
              style={{fill: borderColor, opacity: borderOpacity}}
            />,
          );
        }
        if (square.borderBottom) {
          squaresHighlights.push(
            <rect
              key={i}
              x={square.xy[0] * squareWidth}
              y={(8 - square.xy[1] - borderWidth) * squareWidth}
              height={squareWidth * borderWidth}
              width={squareWidth}
              style={{fill: borderColor, opacity: borderOpacity}}
            />,
          );
        }
        if (square.borderLeft) {
          squaresHighlights.push(
            <rect
              key={i}
              x={square.xy[0] * squareWidth}
              y={(7 - square.xy[1]) * squareWidth}
              height={squareWidth}
              width={squareWidth * borderWidth}
              style={{fill: borderColor, opacity: borderOpacity}}
            />,
          );
        }
      }
    }

    const borders: React.ReactElement<any>[] = [];

    if (props.borders instanceof Array) {
      for (let i = 0; i < props.borders.length; i++) {
        const border = props.borders[i];
        let stepLength = squareWidth;

        if (border.segmentSize) stepLength *= border.segmentSize;

        let offsetX = 0;
        let offsetY = 0;

        if (border.offset) {
          offsetX = border.offset[0];
          offsetY = border.offset[1];
        }

        let d = `M${(border.xy[0] + offsetX) * squareWidth} ${(7 - border.xy[1] + offsetY) * squareWidth} l`;

        for (let j = 0; j < border.segments.length; j++) {
          switch (border.segments[j]) {
            case 'd':
              d += stepLength + ' 0 ';
              break;
            case 's':
              d += '0 ' + stepLength + ' ';
              break;
            case 'a':
              d += -stepLength + ' 0 ';
              break;
            case 'w':
              d += '0 ' + -stepLength + ' ';
              break;
          }
        }

        const strokeWidth = 1.8 * (border.width || 1);
        const strokeColor = mapColor(border.color || 'orange');
        const strokeOpacity = border.opacity || 0.75;
        const fillColor = border.fillColor || 'none';
        const fillOpacity = border.fillOpacity || 0.4;

        borders.push(
          <path
            d={d}
            strokeLinejoin="round"
            style={{
              strokeWidth,
              stroke: strokeColor,
              strokeOpacity,
              fill: fillColor,
              fillOpacity,
            }}
          />,
        );
      }
    }

    const {size, onClick, onRightClick} = this.props;
    const style: React.CSSProperties = {};

    if (size !== undefined) {
      switch (size) {
        case -3:
          style.maxWidth = '160px';
          break;
        case -2:
          style.maxWidth = '200px';
          break;
        case -1:
          style.maxWidth = '240px';
          break;
        case 0:
          style.maxWidth = '320px';
          break;
        case 1:
          style.maxWidth = '512px';
          style.width = '100%';
          break;
        case 2:
          style.maxWidth = '720px';
          style.width = '100%';
          break;
        case 3:
          style.maxWidth = '1024px';
          style.width = '100%';
          break;
      }
    }

    return h(
      'div',
      {
        className: styles.board,
        style,
        onClick,
        onContextMenu: onRightClick,
      },
      <svg viewBox="0 0 100 100">
        <defs>{markers}</defs>
        <rect x="0" y="0" height="100" width="100" style={{fill: boardTheme.white}} />
        {squares}
        {squaresHighlights}
        {borders}
        {figures}
        {ruler}
        {lines}
      </svg>,
    );
  }
}

export default Board;
