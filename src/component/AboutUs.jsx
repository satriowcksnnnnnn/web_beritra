import React from 'react'
import about from "../assets/image/about1.png"
import about1 from "../assets/image/about2.png"
import about2 from "../assets/image/about3.png"

export default function AboutUs() {
    const containerStyle = {
        background: `url(${about})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
     };
  return (
    <div>
      <div style={containerStyle}>
        <div className='text-center'>
            <h3 className='text-[55px] font-bold text-white'>Tentang Kami</h3>
            <h5 className='text-[32px] font-semibold text-white mt-[7px]'>Sebagai masyarakat, kita harus kritis <br/>
            dalam menerima sebuah berita untuk <br/>mencegah terjadinya disinformasi ataupun <br/>
            hoax yang dapat merugikan</h5>
        </div>
      </div>
      <div className='flex gap-[167px] justify-between mt-[128px] ml-[90px] mr-[100px]'>
        <div>
        <h1 className="text-[64px] font-bold text-center">Misi Kami</h1>
          <p className="text-[26px] font-normal mt-14 text-justify font-montserrat">Memerangi penyebaran informasi palsu dan memberikan wawasan yang jelas tentang isu-isu terkini di Yogyakarta.</p>
          <p className="text-[26px] font-normal mt-6 text-justify">Kami memahami betapa pentingnya kebenaran dalam era digital ini, di mana hoaks dapat dengan cepat menyebar dan memengaruhi pandangan publik. 
          </p>
        </div>
          <img className='' alt=''src={about1}/>
      </div>
      <div className='flex gap-[167px] justify-between mt-[270px] ml-[90px] mr-[100px]'>
      <img className='w-[528px] h-[532px]' alt=''src={about2}/>
        <div>
        <h1 className="text-[64px] font-bold text-center">Tujuan Kami</h1>
          <p className="text-[26px] font-normal mt-7 text-justify">Tujuan utama Critizen adalah menjadi sumber terpercaya dan tepercaya yang membantu masyarakat Yogyakarta membedakan antara informasi yang benar dan hoaks.</p>
          <p className="text-[26px] font-normal mt-6 text-justify">
          Kami berkomitmen untuk: <br/>
            1.  Menyediakan Berita Faktual. <br/>
            2.  Memerangi Hoaks. <br/>
            3.  Mendorong Literasi Media. <br/>
            4.  Dan Mendukung Kebenaran dan Keadilan
          </p>
          <p className="text-[26px] font-normal mt-6 text-justify">
          Dengan tujuan ini, kami berharap dapat berkontribusi secara positif dalam membangun lingkungan informasi yang sehat dan bertanggung jawab di Yogyakarta.
          </p>
        </div>
      </div>
    </div>
    
  )
}
