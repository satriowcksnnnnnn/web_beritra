import SearchIcon from "../assets/image/search.png"
import HomeImg from "../assets/image/casual.png"

export default function Hero() {
  return (
    <div className="flex justify-between mt-[100px] mx-[100px] font-montserrat">
        <div className="w-[628px]">
            <h1 className="text-[64px] font-bold text-right">Gerakan Jogja <br/>Bebas <span className="text-secondary">Hoax</span></h1>
            <p className="text-3xl font-medium mt-6 text-right">Sebagai masyarakat, kita harus kritis menerima sebuah berita untuk 
            mencegah terjadinya disinformasi ataupun hoax  yang dapat merugikan</p>
        </div>
        <div>
            <img alt="casual" src={HomeImg} width={464}/>
        </div>
    </div>
  )
}
