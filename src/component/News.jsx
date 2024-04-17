import React from 'react'
import Berita1 from "../assets/image/berita1.png"
import Berita2 from "../assets/image/berita2.png"
import Berita3 from "../assets/image/berita3.png"
import Berita4 from "../assets/image/berita4.png"
import Berita5 from "../assets/image/berita5.png"

export default function News() {
  return (
    <div className='flex justify-between mx-[90px] my-[114px] font-montserrat'>
        <div className='w-[872px]'>
            <img alt='Berita' src={Berita1}/>
            <h1 className='text-4xl font-semibold mt-6'>
                Kampanye Literasi Digital di Yogyakarta untuk Cegah Hoaks
            </h1>
            <div className='text-justify mt-7 text-xl'>
                <article>
                    Dalam konferensi pers yang diadakan di Balai Kota Yogyakarta, Bapak Anwar, Kepala Dinas Komunikasi dan Informatika Yogyakarta, menyampaikan tujuan utama dari kampanye ini. "Kami ingin mengedukasi masyarakat tentang pentingnya literasi digital dalam menghadapi informasi yang tidak valid, termasuk hoaks," ujar Bapak Anwar. Kampanye ini melibatkan sejumlah kegiatan, seperti pelatihan literasi digital bagi pelajar dan masyarakat umum, penyuluhan di sekolah-sekolah dan lembaga masyarakat, serta distribusi materi edukasi tentang cara memverifikasi informasi yang diterima dari berbagai sumber, terutama di media sosial.
                </article>
                <br/>
                <article>
                    Selain itu, pemerintah daerah juga bekerja sama dengan lembaga pendidikan dan organisasi masyarakat sipil untuk menyusun modul literasi digital yang akan diintegrasikan ke dalam kurikulum sekolah dan program pelatihan masyarakat. Langkah ini diharapkan dapat memberikan landasan kuat bagi generasi muda dan masyarakat dalam menghadapi tantangan informasi palsu.
                </article>
                <br/>
                <article>
                    Tak hanya itu, kampanye ini juga mengajak seluruh elemen masyarakat untuk aktif dalam mendeteksi dan melaporkan hoaks yang beredar. Melalui kolaborasi antara pemerintah, lembaga pendidikan, media, dan masyarakat, diharapkan dapat diciptakan lingkungan informasi yang lebih sehat dan terpercaya di Yogyakarta.
                </article>
                <br/>
                <article>
                    Dalam konteks globalisasi informasi dan meningkatnya penetrasi teknologi digital, kampanye literasi digital ini menjadi langkah strategis dalam membangun ketahanan informasi di tengah arus informasi yang kompleks dan seringkali menyesatkan. Dengan kesadaran dan keterampilan literasi digital yang tinggi, masyarakat diharapkan dapat lebih cerdas dalam mengonsumsi dan menyebarkan informasi, sehingga hoaks dapat diminimalisir dan kebenaran dapat lebih mudah diakses oleh semua pihak.
                </article>
            </div>
        </div>
        <div className='w-[364px]'>
            <img alt='Berita2' src={Berita2}/>
            <h1 className='mt-2 font-bold text-lg'>Pelatihan Penggunaan Algoritma AI untuk Mendeteksi Hoaks</h1>
            <div className='flex items-center gap-3'>
                <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.8286 8.70249C48.2142 8.30947 48.2063 7.67636 47.8109 7.28838L41.3675 0.96596C40.9721 0.577985 40.3389 0.582068 39.9533 0.97508C39.5676 1.36809 39.5756 2.00121 39.971 2.38918L45.6985 8.00911L40.1125 13.702C39.7269 14.095 39.7348 14.7281 40.1302 15.1161C40.5256 15.5041 41.1588 15.5 41.5444 15.107L47.8286 8.70249ZM1.01251 9.29728L47.1252 8.99992L47.1002 7.00007L0.987488 7.29744L1.01251 9.29728Z" fill="black"/>
                </svg>
                <p className='font-semibold text-[#c4c4c4]'>Berita</p>
            </div>
        <div className='w-[364px]'>
            <img alt='Berita2' src={Berita3}/>
            <h1 className='mt-2 font-bold text-lg'>Kampanye #Hoaks Tidak Berita Viral di Media Sosial</h1>
                <div className='flex items-center gap-3'>
                    <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M47.8286 8.70249C48.2142 8.30947 48.2063 7.67636 47.8109 7.28838L41.3675 0.96596C40.9721 0.577985 40.3389 0.582068 39.9533 0.97508C39.5676 1.36809 39.5756 2.00121 39.971 2.38918L45.6985 8.00911L40.1125 13.702C39.7269 14.095 39.7348 14.7281 40.1302 15.1161C40.5256 15.5041 41.1588 15.5 41.5444 15.107L47.8286 8.70249ZM1.01251 9.29728L47.1252 8.99992L47.1002 7.00007L0.987488 7.29744L1.01251 9.29728Z" fill="black"/>
                    </svg>
                    <p className='font-semibold text-[#c4c4c4]'>Berita</p>
                </div>
        </div>
        <div className='w-[364px]'>
            <img alt='Berita2' src={Berita4}/>
            <h1 className='mt-2 font-bold text-lg'>Peluncuran Aplikasi Anti-Hoaks oleh Pemerintah Daerah Yogyakarta</h1>
                <div className='flex items-center gap-3'>
                    <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M47.8286 8.70249C48.2142 8.30947 48.2063 7.67636 47.8109 7.28838L41.3675 0.96596C40.9721 0.577985 40.3389 0.582068 39.9533 0.97508C39.5676 1.36809 39.5756 2.00121 39.971 2.38918L45.6985 8.00911L40.1125 13.702C39.7269 14.095 39.7348 14.7281 40.1302 15.1161C40.5256 15.5041 41.1588 15.5 41.5444 15.107L47.8286 8.70249ZM1.01251 9.29728L47.1252 8.99992L47.1002 7.00007L0.987488 7.29744L1.01251 9.29728Z" fill="black"/>
                    </svg>
                    <p className='font-semibold text-[#c4c4c4]'>Berita</p>
                </div>
        </div>
        <div className='w-[364px]'>
            <img alt='Berita2' src={Berita5}/>
            <h1 className='mt-2 font-bold text-lg'>Kolaborasi Media Sosial dengan Ahli Verifikasi Fakta</h1>
                <div className='flex items-center gap-3'>
                    <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M47.8286 8.70249C48.2142 8.30947 48.2063 7.67636 47.8109 7.28838L41.3675 0.96596C40.9721 0.577985 40.3389 0.582068 39.9533 0.97508C39.5676 1.36809 39.5756 2.00121 39.971 2.38918L45.6985 8.00911L40.1125 13.702C39.7269 14.095 39.7348 14.7281 40.1302 15.1161C40.5256 15.5041 41.1588 15.5 41.5444 15.107L47.8286 8.70249ZM1.01251 9.29728L47.1252 8.99992L47.1002 7.00007L0.987488 7.29744L1.01251 9.29728Z" fill="black"/>
                    </svg>
                    <p className='font-semibold text-[#c4c4c4]'>Berita</p>
                </div>
        </div>
        </div>
    </div>
  )
}
