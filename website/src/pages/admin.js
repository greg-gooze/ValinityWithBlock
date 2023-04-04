import Navbar2 from '../components/navbar2';
import Footer from '../components/footer';
import UploadFile from '../components/UploadFile';
import Head from 'next/head';

export default function Admin() {
    return (
        <>
            <Head>
                <title>Valinity</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <section id='SectionConnexion' className="pb-[100px] bg-[#4641e6]">
                    <Navbar2 />
                    <div className='flex items-center justify-center static'>
                        <div className='mt-[5%] pb-7 flex flex-col items-center justify-center bg-white relative overflow-y-auto w-3/5 rounded-2xl'>
                            <h2 className='my-3 font-bold text-[#19191b] text-[40px] text-center'  style={{'borderBottomWidth': 1, 'borderColor': 'rgba(194,194,194,35)'}}>Admin</h2>
                            <div className='flex'>
                                <p className="text-[25px] text-center text-[#19191b]">Upload <span className="text-[#4841e8] font-semibold">les étudiants</span></p>
                                <p className="text-[25px] text-center text-[#19191b] mb-3 pl-[6px]">et <span className="text-[#4841e8] font-semibold"> le diplome</span></p>
                            </div>
                            <UploadFile />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
  }

//   import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// function AdminPage() {
//   const router = useRouter();

//   useEffect(() => {
//     // Vérifiez si l'utilisateur est connecté
//     const isAuthenticated = /* Code pour vérifier si l'utilisateur est connecté */;

//     // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
//     if (!isAuthenticated) {
//       router.push('/login');
//     }
//   }, []);

//   return (
//     // Code pour la page d'administration
//   );
// }

// export default AdminPage;
