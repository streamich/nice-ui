export interface IMarkdownBlockProps {
  onError?: (error) => void;
  renderLoading?: (props: IMarkdownBlockProps) => React.ReactElement<any>;
  renderError?: (props: IMarkdownBlockProps, error?: Error) => React.ReactElement<any>;
}

export interface IMarkdownBlockCodeProps extends IMarkdownBlockProps {
  source: string;
}

const renderNothing = () => null;

export const blockDefaultProps = {
  /* tslint:disable */
  onError: console.log,
  /* tslint:enable */
  renderLoading: renderNothing,
  renderError: renderNothing,
};
