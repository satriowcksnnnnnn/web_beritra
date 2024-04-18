import React from 'react'
import imgcasual from '../assets/image/casual.png'

export default function Laporkan() {
  const handleLaporkanBerita = () => {
    // Ganti nomor telepon berikut dengan nomor WhatsApp yang ingin Anda arahkan
    const phoneNumber = '6281234567890';
    // Ganti pesan yang ingin Anda kirim ke WhatsApp
    const message = 'Saya ingin melaporkan sebuah berita yang perlu ditinjau lebih lanjut.';
    // Buat tautan yang mengarahkan ke aplikasi WhatsApp dengan nomor telepon dan pesan yang sudah ditentukan
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    // Buka tautan WhatsApp di jendela baru
    window.open(whatsappLink, '_blank');
  };
  return (
    <div className='flex justify-between gap-[92px] mt-[100px] mx-[100px]'>
      <div className="w-[628px]">
        <h1 className="text-[64px] font-bold text-center">Aduan</h1>
          <p className="text-[20px] font-normal mt-6 text-justify font-montserrat">Fitur "Aduan" memberikan pengguna kemampuan untuk memberi 
            tahu administrator atau pemilik platform tentang konten yang dianggap tidak pantas, 
            melanggar pedoman komunitas, atau mungkin menyebarkan informasi palsu atau merugikan. 
            Dengan fitur ini, pengguna dapat melaporkan berita atau konten yang mereka yakini perlu 
            ditinjau lebih lanjut atau dihapus dari platform, sehingga membantu menjaga integritas, 
            keamanan, dan kualitas konten yang tersedia bagi pengguna lainnya. Laporan yang diterima 
            kemudian dapat ditinjau oleh tim moderator atau administrator untuk mengambil tindakan yang sesuai sesuai dengan kebijakan platform tersebut.
          </p>
      <div className="relative w-full mt-[60px]">
        <div className="items-center text-center font-montserrat">
                    <button onClick={handleLaporkanBerita} className='bg-secondary px-8 py-5 rounded-[9px] font-semibold text-white justify-center whitespace-nowrap hover:bg-secondary/50'>
                      Laporkan Berita
                    </button>
                  </div>
              </div>
        </div> 
        <div>
              <img className='' alt=''src={imgcasual}/>
        </div>     
    </div>
  )
}
