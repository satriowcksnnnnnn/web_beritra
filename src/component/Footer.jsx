import Logo from "../assets/image/Critizn.png"

export default function Footer() {
  return (
    <footer className="bg-primary mt-[164px] px-[100px] ">
        <div className="pt-[49px] flex justify-between font-inknut">
            <div className="mt-[30px]">
                <img alt="Logo" src={Logo}/>
            </div>
            <div className="text-left">
                <h1 className="font-bold text-xl mb-6">Informasi</h1>
                <p className="font-medium">Tentang Kami</p>
                <p className="font-medium mt-5">Hubungi Kami</p>
            </div>
            <div className="text-left">
                <h1 className="font-bold text-xl mb-6">Tautan Kami</h1>
                <p className="font-medium">Dukungan</p>
                <p className="font-medium mt-5">Kebijakan Pribadi</p>
            </div>
            <div className="text-left">
                <h1 className="font-bold text-xl mb-6">Layanan Kami</h1>
                <p className="font-medium">Aduan</p>
                <p className="font-medium mt-5">Berita</p>
            </div>
            <div className="text-left">
                <h1 className="font-bold text-xl mb-6">Hubungi Kami</h1>
                <div className="flex gap-2 mt-5">
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25281 8.72746L7.32314 10.5825C7.57646 11.5186 7.93286 12.4191 8.38481 13.265C8.8552 14.105 9.42108 14.8793 10.0695 15.57L12.5685 14.745C13.9685 14.2825 15.4968 14.7575 16.4278 15.945L17.8511 17.76C18.4274 18.4886 18.7163 19.4289 18.6567 20.3819C18.597 21.3348 18.1934 22.2253 17.5315 22.865C15.2098 25.135 11.6351 25.9025 8.95881 23.65C6.60664 21.6656 4.61643 19.2332 3.08814 16.475C1.5565 13.7297 0.531473 10.6947 0.0688111 7.53496C-0.444522 3.97996 1.98448 1.13496 5.01314 0.16496C6.81914 -0.41504 8.74648 0.57996 9.40914 2.43496L10.1908 4.62246C10.7041 6.06246 10.3355 7.68746 9.25281 8.72746Z" fill="black"/>
                    </svg>
                    <p className="font-medium">+6281234567890</p>
                </div>
                <div className="flex gap-2 mt-5">
                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5049 0H2.50488C1.12988 0 0.0173828 1.0356 0.0173828 2.30132L0.00488281 16.1093C0.00488281 17.375 1.12988 18.4106 2.50488 18.4106H22.5049C23.8799 18.4106 25.0049 17.375 25.0049 16.1093V2.30132C25.0049 1.0356 23.8799 0 22.5049 0ZM22.0049 4.89031L13.1674 9.97624C12.7674 10.2064 12.2424 10.2064 11.8424 9.97624L3.00488 4.89031C2.87954 4.82554 2.76978 4.73804 2.68224 4.63309C2.59471 4.52814 2.53121 4.40793 2.4956 4.27974C2.45999 4.15155 2.45301 4.01804 2.47508 3.88729C2.49715 3.75654 2.5478 3.63127 2.62398 3.51907C2.70017 3.40687 2.80029 3.31006 2.91829 3.2345C3.03629 3.15895 3.16972 3.10622 3.3105 3.07951C3.45128 3.0528 3.59649 3.05267 3.73733 3.07911C3.87817 3.10556 4.01171 3.15803 4.12988 3.23336L12.5049 8.05463L20.8799 3.23336C20.9981 3.15803 21.1316 3.10556 21.2724 3.07911C21.4133 3.05267 21.5585 3.0528 21.6993 3.07951C21.84 3.10622 21.9735 3.15895 22.0915 3.2345C22.2095 3.31006 22.3096 3.40687 22.3858 3.51907C22.462 3.63127 22.5126 3.75654 22.5347 3.88729C22.5568 4.01804 22.5498 4.15155 22.5142 4.27974C22.4786 4.40793 22.4151 4.52814 22.3275 4.63309C22.24 4.73804 22.1302 4.82554 22.0049 4.89031Z" fill="black"/>
                    </svg>
                    <p className="font-medium">ppidkotajogja@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="mt-[70px]">
            <svg width="1274" height="3" viewBox="0 0 1274 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.47852" x2="1274.01" y2="1.47852" stroke="black" stroke-width="2"/>
            </svg>
            <p className="justify-center flex mt-[20px] pb-[67px] font-inknut">Hak cipta &copy; 2024. Hak cipta dilindungi undang undang</p>
        </div>
        
    </footer>
  )
}
