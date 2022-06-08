import Head from 'next/head'

interface HeadProps{
  title: string
  children?: React.ReactNode
}

export function HeadComponent({title, children}: HeadProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
