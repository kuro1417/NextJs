import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
    if (!session) {
        return (
            <div className={'bg-blue-900 w-screen h-screen flex items-center'}>
                <div className={'text-center w-full'}>
                    <button onClick={() => signIn('google')} className='bg-white p-2 px-4 rounded-lg'>Login with google</button>
                </div>
            </div>
        )
    }
  return(
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello {session.user.name}
        </h2>
        <div className="flex bg-gray-200 gap-1 text-black">
          <img src={session.user.image} className="w-6 h6"/>
          <span className="px-2">
            {session.user.email}
          </span>
        </div>
      </div>
    </Layout>
  )
}
