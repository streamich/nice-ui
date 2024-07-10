import {ContentPage} from './types';
import {augmentContentPages} from '../../6-page/DocsPages/util';
import {componentsPage} from './components';
import {guidelinesPage} from './guidelines';

const content: ContentPage = {
  name: 'Home',
  slug: '',
  steps: [],
  children: [guidelinesPage, componentsPage],
};

augmentContentPages(content);

export {content};
