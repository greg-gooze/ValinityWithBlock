import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {useRouter}  from 'next/router'
import Head from 'next/head';


export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push('/connexion')
 }
  return (
    <>
      <Head>
        <title>Valinity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section id='SectionMainPage' className="h-screen">
          <Navbar />
          <div className="mt-[4.5rem] ml-[11rem]">
            <h1 className="text-[70px] font-bold text-[#4641e6]">Valinity</h1>
            <h2 className="mt-[-30px] text-[60px] font-bold text-[#19191b]">La Sécurité Avant Tout</h2>
            <button onClick={handleClick} className="mt-[20px] px-4 py-1 text-[20px] font-semibold text-white bg-[#4641e6] rounded-xl">Démarrer</button>
          </div>
        </section>
        <section id='SectionTechnologie' className="h-screen bg-[#4641e6]">
          <div className='font-bold text-white text-center'>
            <h3 className='pt-6 text-[13px] uppercase'>à propos de</h3>
            <h2 className='mt-[-0.3rem] text-[40px]'>La Technologie</h2>
          </div>
          <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-y-12">
            <div className="flex flex-col items-center justify-center">
              <img src="world.png" alt="Image World" className="w-24 h-24 object-contain"/>
              <p className="text-center text-grid">Durable</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="padlock.png" alt="Image Padlock" className="w-24 h-24 object-contain"/>
              <p className="text-center text-grid">Sécurité accrue</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="transparency.png" alt="Image Transparency" className="w-24 h-24 object-contain"/>
              <p className="text-center text-grid">Transparence</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="easy-access.png" alt="Image easy-access" className="w-24 h-24 object-contain"/>
              <p className="text-center text-grid">Facile d'accès</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="save-money.png" alt="Image Save-money" className="w-24 h-24 object-contain"/>
              <p className="text-center text-grid">Économie de temps et d'argent</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="development.png" alt="Image dvp" className="w-24 h-24 object-contain"/>
              <p className="text-center text-grid">Prêt pour l'avenir</p>
            </div>
          </div>

        </section>
        <section id='SectionRoadmap' className="h-screen">
          <h2 className='pt-6 font-bold text-[#19191b] text-[40px] text-center'>RoadMap</h2>
          <div className='flex justify-center'>
            <img className='pt-11' src="/Roadmap.png"  width="88%" alt='Roadmap'/>
          </div>
        </section>
        <section id='SectionContact' className="h-screen bg-[#4641e6]">
          <div className='h-screen flex items-center justify-center static'>
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js%22%3E"/>
          <iframe class="airtable-embed" src="https://airtable.com/embed/shr3VXj40H9uNWMnR?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: 'transparent', border: '1px solid #ccc'}}/>
            {/* <div className='flex flex-col items-center justify-center bg-white relative overflow-y-auto w-2/5 rounded-2xl backdrop-blur-xl'>
              <h2 className='mt-3 font-bold text-[#19191b] text-[40px] text-center'>Nous Contacter</h2>
              <p className='w-9/12 mt-1 text-[#696871] font-normal text-[12px] text-center'>Vous pouvez nous faire part de toutes vos interrogations en remplissant simplement ce formulaire !</p>
              <form className='mt-3 w-9/12'>
                <div className='form-group'>
                  <label htmlFor="nom" className='text-[#19191b] text-[14px] font-bold'>Nom</label>
                  <input type="text" id="nom" name="nom" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                </div>
                <div className='form-group'>
                  <label htmlFor="email" className='text-[#19191b] text-[14px] font-bold'>Email</label>
                  <input type="email" id="email" name="email" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                </div>
                <div className='form-group'>
                  <label htmlFor="sujet" className='text-[#19191b] text-[14px] font-bold'>Sujet du Message</label>
                  <select defaultValue={'DEFAULT'} id="sujet" name="fruit" className= 'py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'>
                    <option value="DEFAULT" disabled hidden>Sélectionnez une option</option>
                    <option value="sujet1">Je n'arrive pas à accéder à mon diplôme</option>
                    <option value="sujet2">J'aimerais sécuriser les diplômes de mon école</option>
                    <option value="sujet3">Autre sujet</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor="message" className='text-[#19191b] text-[14px] font-bold'>Message</label>
                  <textarea id='message' name='message' rows='5' className= 'resize-none py-2 border-[rgba(194,194,194,35)] border-[1px] rounded-md outline-none text-xs'/>
                </div>
                <div className='flex justify-center'>
                  <input className="cursor-pointer mt-2 mb-4 px-3.5 py-1.5 text-[13px] font-semibold text-white bg-[#4641e6] rounded-lg transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-[#3b37c6] duration-300" type="submit" value="Envoyer" />
                </div>
              </form>
            </div> */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
