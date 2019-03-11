import * as React from 'react';
import AccordionTab from './AccordionTab';
import {rule} from 'p4-css';

const blockClass = rule({
  mar: '20px auto',
  maxW: '1100px',
});

export interface Props {
  initial?: string;
  tabs: string[];
  renderTitle?: (tab: string) => React.ReactNode;
  renderBody: (tab: string) => React.ReactNode;
}

export interface State {
  tab: string;
}

class Accordion extends React.Component<Props, State> {
  state: State = {
    tab: this.props.initial || '',
  };

  onTitleClick = (tab: string) => {
    this.setState((s) => ({
      tab: tab === s.tab ? '' : tab,
    }));
  };

  render() {
    const {tabs, renderTitle, renderBody} = this.props;
    return (
      <div className={blockClass}>
        {tabs.map((tab) => (
          <AccordionTab
            key={tab}
            open={this.state.tab === tab}
            title={renderTitle ? renderTitle(tab) : tab}
            children={renderBody(tab)}
            onTitleClick={() => this.onTitleClick(tab)}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;
