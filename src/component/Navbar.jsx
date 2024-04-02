
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/image/Critizn.png'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-primary pl-[97px] pr-[89px] pt-[34px] pb-[41px] flex justify-between items-center">
      <div>
        <button onClick={() => navigate('/')}>
          <img src={Logo} alt="logo" width={118} height={68}/>
        </button>
      </div> 
        <ul className='flex gap-14 items-center font-bold text-black text-2xl'>
          <li><a href="/about-us">Tentang Kami</a></li>
          <li><a href="/news">Berita</a></li>
          <li><a href="/information">Informasi</a></li>
          <li><a href="/contact">Kontak</a></li>
        </ul>
      <button onClick={() => navigate('/Aduan')} className='bg-secondary px-[35px] rounded-[9px] w-[161px] h-[55px] font-bold border border-black'>
        Aduan
      </button>
    </nav>
  )
}

