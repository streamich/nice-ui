import * as React from 'react';
import {storiesOf} from '@storybook/react';
import TemplateMainLayout from '..';

storiesOf('Templates|TemplateMainLayout', module).add('Basic', () => {
  return (
    <TemplateMainLayout
      sidebarOpen
      renderTopNav={() => <div>top nav...</div>}
      renderSidebar={() => <div>sidebar...</div>}
      render={() => (
        <div>
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
          <br />
          <div>Hello world</div>
        </div>
      )}
    />
  );
});
