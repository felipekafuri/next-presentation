// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const accountId = req.query.accountId as string
  res.status(200).json({ msg: `Very important info about account ${accountId}` })
}
