import { PropsWithChildren } from 'react';

declare function Theme({ children }: PropsWithChildren<{}>): JSX.Element;
declare function add(a: number, b: number): number;

export { Theme, add };
