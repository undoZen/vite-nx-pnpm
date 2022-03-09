import { PropsWithChildren } from 'react'
export function Theme ({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
