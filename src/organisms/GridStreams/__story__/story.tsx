import * as React from 'react';
import {storiesOf} from '@storybook/react';
import GridStreams from '..';
import {streams1} from '../../../__tests__/mocks/assets';
import {action} from '@storybook/addon-actions';

class InfiniteScrolling extends React.Component<
  {},
  {
    streams: any[];
    cursor: number;
  }
> {
  state = {
    streams: [...streams1],
    cursor: 1,
  };

  loadMore = () => {
    this.setState((state) => ({
      ...state,
      streams: [...state.streams, ...streams1],
      cursor: state.cursor + 1,
    }));
  };

  render() {
    return (
      <GridStreams
        assets={this.state.streams}
        cursor={this.state.cursor}
        hasMore
        loadMore={this.loadMore}
        onBgClick={action('onBgClick')}
      />
    );
  }
}

storiesOf('Organisms|GridStreams', module)
  .add('Default', () => {
    return <GridStreams assets={[...streams1]} loadMore={() => {}} onBgClick={action('onBgClick')} />;
  })
  .add('Long list', () => {
    return (
      <GridStreams
        assets={[...streams1, ...streams1, ...streams1, ...streams1, ...streams1, ...streams1, ...streams1]}
        onBgClick={action('onBgClick')}
        renderContext={() => <div>context...</div>}
      />
    );
  })
  .add('Infinite scrolling', () => <InfiniteScrolling />);
