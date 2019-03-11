import * as React from 'react';
import {SizeSensor} from 'libreact/lib/SizeSensor';
import {Frame} from '../../atoms/Frame';

const targetWidth = 400;

const valueToScale: (...args) => (value: number) => any = (origin, step, min = -3, max = 3) => (value) => {
  return Math.min(max, Math.max(min, Math.floor((value - origin) / step)));
};

const scalePadSmall = valueToScale(500, 100);

const FormSignIn = ({renderButtons, renderForm}) => {
  return (
    <div>
      <SizeSensor>
        {({width}) => {
          return (
            <div>
              <div
                style={{
                  maxWidth:
                    width < 500 ? targetWidth + 200 : width > targetWidth + 200 ? targetWidth + 200 : width * 0.8,
                  margin: 'auto',
                }}
              >
                <Frame pad={scalePadSmall(width)} bd={width > 500 ? 1 : -2}>
                  {renderButtons(width)}
                  <hr />
                  <div style={{maxWidth: targetWidth, margin: '0 auto 20px'}}>{renderForm(width)}</div>
                </Frame>
              </div>
            </div>
          );
        }}
      </SizeSensor>
    </div>
  );
};

export default FormSignIn;
