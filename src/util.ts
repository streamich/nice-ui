import {createElement} from 'react';

export const h = createElement;

export const noop = () => {};

export const T = (key) => key;

export const isClient = typeof window === 'object';
