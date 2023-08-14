import { withSessionSsr } from "@/lib/withSession";
import Layout from "@/src/components/dashboard/layout";
import { useRouter } from "next/router"; // Import useRouter dari next/router
import { use } from "react";

export const getServerSideProps = withSessionSsr(
  async function getServersideProps({ req, res }) {
    try {
      const user = req.session.user || null;
      console.log(user);
      if (!user) {
        return {
          redirect: {
            destination: '/login',
            statusCode: 307
          }
        };
      }
      return {
        props: {
          user: user
        }
      };
    } catch (err) {
      return {
        redirect: {
          destination: '/login',
          statusCode: 307
        }
      };
    }
  }
);

interface Props {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export default function Dashboard({ user }: Props) {
  const router = useRouter(); // Dapatkan objek router

  if (!user) {
    // Jika user tidak ada, arahkan ke halaman login
    // Anda juga bisa menyesuaikan logika perutean lainnya di sini
    router.replace('/login');
    return null; // Return null agar tampilan tidak bermunculan sebelum perutean selesai
  }

  return (
    <Layout>
      Ini testing {user.email}
    </Layout>
  );
}
