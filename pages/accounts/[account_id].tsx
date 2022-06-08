import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { HeadComponent } from "../components/HeadComponent"

type MsgData = {
  msg: string
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/accounts/info?accountId=1234`)
  const data:MsgData = await res.json()
  return {
    props: {
      msgData: data
    },
  }
}


const AccountPage = ({ msgData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const accountId = router.query.account_id

  return (
    <div>
      <HeadComponent title={`Account ${accountId}`} />
      <h1>
        Account {accountId} page
      </h1>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

      <p>
        {msgData.msg}
      </p>
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          account_id: "1234"
        }
      }
    ],
    fallback: false // false or 'blocking'
  };
}

export default AccountPage
