import * as React from 'react';
import {Button} from '../../../molecules/Button';
import FacebookIcon from '../../../atoms/icons/svg/Facebook';
import GoogleIcon from '../../../atoms/icons/svg/Google';
import TwitterIcon from '../../../atoms/icons/svg/Twitter';
import GithubIcon from '../../../atoms/icons/svg/Github';
import {Columns} from '../../../atoms/Columns';
import {Frame} from '../../../atoms/Frame';
import {Space} from '../../../atoms/Space';

export interface ISocialButtonsProps {
  disabled?: boolean;
  onGoogle?: () => void;
  onFacebook?: () => void;
  onTwitter?: () => void;
  onGithub?: () => void;
  width?: number;
}

export const SocialButtons: React.SFC<ISocialButtonsProps> = ({
  disabled,
  width,
  onGoogle,
  onFacebook,
  onTwitter,
  onGithub,
}) => {
  const onlyIcon = width < 170;

  if (width < 400) {
    return (
      <div>
        <Button
          ghost
          disabled={disabled}
          color="#DD4B39"
          icon={<GoogleIcon size={20} />}
          style={{width: '100%'}}
          onClick={onGoogle}
        >
          {!onlyIcon && 'Google'}
        </Button>
        <Space padt={width > 350 ? 3 : 2}>
          <Button
            ghost
            disabled={disabled}
            color="#47639E"
            icon={<FacebookIcon size={20} />}
            style={{width: '100%'}}
            onClick={onFacebook}
          >
            {!onlyIcon && 'Facebook'}
          </Button>
        </Space>
        <Space padt={width > 350 ? 3 : 2}>
          <Button
            ghost
            disabled={disabled}
            color="#2CA7E0"
            icon={<TwitterIcon size={20} />}
            style={{width: '100%'}}
            onClick={onTwitter}
          >
            {!onlyIcon && 'Twitter'}
          </Button>
        </Space>
        <Space padt={width > 350 ? 3 : 2}>
          <Button
            ghost
            disabled={disabled}
            color="#000"
            icon={<GithubIcon size={20} />}
            style={{width: '100%'}}
            onClick={onGithub}
          >
            {!onlyIcon && 'GitHub'}
          </Button>
        </Space>
      </div>
    );
  } else {
    const isWide = width > 450;

    return (
      <div style={{maxWidth: 600, margin: 'auto'}}>
        <Columns>
          <Frame bd={-2} pad={isWide ? 0 : -2}>
            <Button
              ghost
              size={isWide ? 1 : 0}
              disabled={disabled}
              color="#DD4B39"
              icon={<GoogleIcon size={20} />}
              style={{width: '100%'}}
              onClick={onGoogle}
            >
              {!onlyIcon && 'Google'}
            </Button>
            <div style={{height: isWide ? 24 : 16}} />
            <Button
              ghost
              size={isWide ? 1 : 0}
              disabled={disabled}
              color="#2CA7E0"
              icon={<TwitterIcon size={20} />}
              style={{width: '100%'}}
              onClick={onTwitter}
            >
              {!onlyIcon && 'Twitter'}
            </Button>
          </Frame>
          <Frame bd={-2} pad={isWide ? 0 : -2} style={{margin: 0}}>
            <Button
              ghost
              size={isWide ? 1 : 0}
              disabled={disabled}
              color="#47639E"
              icon={<FacebookIcon size={20} />}
              style={{width: '100%'}}
              onClick={onFacebook}
            >
              {!onlyIcon && 'Facebook'}
            </Button>
            <div style={{height: isWide ? 24 : 16}} />
            <Button
              ghost
              size={isWide ? 1 : 0}
              disabled={disabled}
              color="#000"
              icon={<GithubIcon size={20} />}
              style={{width: '100%'}}
              onClick={onGithub}
            >
              {!onlyIcon && 'GitHub'}
            </Button>
          </Frame>
        </Columns>
      </div>
    );
  }
};
