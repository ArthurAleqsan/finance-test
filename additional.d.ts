type PartialIf<P extends boolean, T> = P extends true ? Partial<T> : T;
declare module '*.module.scss' {
  const content: string;

  export default content;
}

declare module 'lodash';
declare module 'lodash/capitalize';
declare module 'lodash/noop';
declare module 'lodash-es';
declare module 'accounting';
declare module 'react-bootstrap';
declare module 'react-lazyload';
declare module 'react-browser-hooks';
declare module 'react-lazy-load-image-component';
declare module 'react-html-parser';
declare module 'react-helmet-async';
