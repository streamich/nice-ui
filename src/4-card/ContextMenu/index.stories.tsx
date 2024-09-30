import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {ContextPane as Component, ContextItem, ContextSep, ContextTitle} from '.';
import {Iconista} from '../../icons/Iconista';
import {Split} from '../../3-list-item/Split';
import {Code} from '../../1-inline/Code';
import {Sidetip} from '../../1-inline/Sidetip';

const meta: Meta<typeof Component> = {
  title: '4. Card/ContextMenu',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: (
      <>
        <ContextSep />
        <ContextItem>Item 1</ContextItem>
        <ContextItem>Item 2</ContextItem>
        <ContextSep line />
        <ContextItem big>Big item 1</ContextItem>
        <ContextItem big>Big item 2</ContextItem>
        <ContextSep />
      </>
    ),
  },
};

const DownloadIcon: React.FC = () => {
  return <Iconista set={'auth0'} icon={'download'} width={16} height={16} />;
};

export const DownloadMenu: StoryObj<typeof meta> = {
  args: {
    children: (
      <>
          <ContextSep />
          <ContextTitle>Structural</ContextTitle>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  binary
                </Code>
              </span>
              <Sidetip small>{'.crdt'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  verbose
                </Code>
              </span>
              <Sidetip small>{'.cbor'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  verbose
                </Code>
              </span>
              <Sidetip small>{'.json'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  compact
                </Code>
              </span>
              <Sidetip small>{'.cbor'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  compact
                </Code>
              </span>
              <Sidetip small>{'.json'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextSep />
          <ContextSep line />
          <ContextSep />
          <ContextTitle>Indexed</ContextTitle>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  binary
                </Code>
              </span>
              <Sidetip small>{'.cbor'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextSep />
          <ContextSep line />
          <ContextSep />
          <ContextTitle>Sidecar</ContextTitle>

          <ContextItem
            inset
            icon={<DownloadIcon />}
            onClick={() => {}}
          >
            <Split>
              <span>
                Download{' '}
                <Code gray size={0} spacious>
                  binary
                </Code>
              </span>
              <Sidetip small>{'.crdt'}</Sidetip>
            </Split>
          </ContextItem>

          <ContextSep />
          <ContextSep line />
          <ContextSep />
          <ContextItem
            inset
            onClick={() => {}}
            icon={<Iconista set="auth0" icon="external-link" width={16} height={16} />}
          >
            About encoding formats
            {' …'}
          </ContextItem>

          <ContextSep />
      </>
    ),
  },
};
