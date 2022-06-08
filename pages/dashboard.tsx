import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"
import Link from "next/link"
import { useRouter } from "next/router"
import { HeadComponent } from "./components/HeadComponent"

interface DataProps {
  data: {
    msg: string
  }
}

const Dashboard = ({ data }:DataProps) => {
  const router = useRouter()
  const { user }= useUser()
  return (
    <div>
      <HeadComponent title="Dashboard" />
      <h1>
        Dashboard
      </h1>
      <h2>Hello, {user?.name}</h2>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

      <p>
        {data.msg}
      </p>

      <Link href="/accounts/1234">
        <a>Account 1234</a>
      </Link>
    </div>
  )
}
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (context) => {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/hello`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  },
  returnTo: "/",
});


export default Dashboard
