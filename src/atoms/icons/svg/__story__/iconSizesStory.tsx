import * as React from 'react';

const iconSizesStory = (Icon) => (
  <div>
    <div style={{width: 16, height: 16, border: '1px solid red'}}>
      <Icon size={16} />
    </div>

    <br />

    <div style={{width: 32, height: 32, border: '1px solid red'}}>
      <Icon size={32} />
    </div>

    <br />

    <div style={{width: 48, height: 48, border: '1px solid red'}}>
      <Icon size={48} />
    </div>

    <br />

    <div style={{width: 64, height: 64, border: '1px solid red'}}>
      <Icon size={64} />
    </div>
  </div>
);

export default iconSizesStory;
