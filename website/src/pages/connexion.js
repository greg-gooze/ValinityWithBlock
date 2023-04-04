import Navbar2 from '../components/navbar2';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Connexion() {

    return (
        <>
            <Head>
                <title>Valinity</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <section  id='SectionConnexion' className="h-screen bg-[#4641e6]">
                    <Navbar2 />
                    <div className='flex items-center justify-center static'>
                        <div className='mt-[5%] flex flex-col items-center justify-center bg-white relative overflow-y-auto w-2/5 rounded-2xl'>
                            <h2 className='mt-3 font-bold text-[#19191b] text-[40px] text-center'>Connexion</h2>
                            <p className='w-9/12 mt-1 text-[#696871] font-normal text-[12px] text-center'>Pour acceder à votre espace personnel, merci de rentrer vos identifiants.</p>
                            <form className='mt-3 w-9/12' action='api/login' method='POST'>
                                <div className='form-group'>
                                    <label htmlFor="email" className='text-[#19191b] text-[14px] font-bold'>Email</label>
                                    <input type="email" id="email" name="email" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password" className='text-[#19191b] text-[14px] font-bold'>Password</label>
                                    <input type="password" id="password" name="password" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                                </div>
                                <div className='flex justify-center'>
                                    <input className="cursor-pointer mt-2 mb-4 px-3.5 py-1.5 text-[13px] font-semibold text-white bg-[#4641e6] rounded-lg transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-[#3b37c6] duration-300" type="submit" value="Se Connecter" />
                                </div>
                            </form>
                    </div>
                </div>
                </section>
                       <form className='mt-3 w-9/12' action='api/register' method='POST'>
                                <div className='form-group'>
                                    <label htmlFor="email" className='text-[#19191b] text-[14px] font-bold'>Email reg</label>
                                    <input type="email" id="email" name="email" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password" className='text-[#19191b] text-[14px] font-bold'>Password reg</label>
                                    <input type="password" id="password" name="password" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                                </div>
                                <div className='flex justify-center'>
                                    <input  className="mt-2 mb-4 px-3.5 py-1.5 text-[13px] font-semibold text-white bg-[#4641e6] rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#3b37c6] duration-300" type="submit" value="Se Connecter" />
                                </div>
                            </form>
            <Footer />
            </div>
        </>
    )
  }
