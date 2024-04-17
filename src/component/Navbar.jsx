
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/image/Critizn.png'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-primary pl-[97px] pr-[89px] pt-[34px] pb-[41px] flex justify-between items-center font-inknut">
      <div>
        <button onClick={() => navigate('/')}>
          <img src={Logo} alt="logo" width={118} height={68}/>
        </button>
      </div> 
        <ul className='flex gap-[120px] items-center font-bold text-black text-2xl'>
          <li><a className='hover:underline underline-offset-2' href="/TentangKami">Tentang Kami</a></li>
          <li><a className='hover:underline underline-offset-2' href="/Berita">Berita</a></li>
          <li><a className='hover:underline underline-offset-2' href="/Kontak">Kontak</a></li>
        </ul>
      <button onClick={() => navigate('/Aduan')} className='bg-secondary px-[35px] rounded-[9px] w-[161px] h-[55px] font-bold border border-black hover:bg-secondary/50'>
        Aduan
      </button>
    </nav>
  )
}

