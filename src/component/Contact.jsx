import React from 'react'
import Kontak from "../assets/image/kontak1.png"
import Kontak2 from "../assets/image/kontak2.png"

export default function Contact() {
    const containerStyle = {
        background: `url(${Kontak})`,
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
                <h3 className='text-[55px] font-bold text-white'>Informasi Kontak</h3>
                <h5 className='text-xl font-semibold text-white mt-[7px]'>Hubungi kami untuk menyelesaikan <br/>kendala yang anda alami.</h5>
                <button className='rounded-xl px-9 py-6 bg-secondary hover:bg-secondary/70 text-white text-xl mt-[76px]'>Hubungi Kami</button>
            </div>
        </div>
        <div className='flex justify-between ml-[242px] mr-[105px]'>      
            <div>
                <div className='flex gap-7 px-8 py-5 rounded-lg shadow-lg mt-[211px]'>
                    <div className='bg-third p-6 items-center flex rounded-full'>   
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.695 16.1325L20.1262 16.6987C20.1262 16.6987 18.7725 18.0437 15.0787 14.3712C11.385 10.6987 12.7387 9.35372 12.7387 9.35372L13.0962 8.99622C13.98 8.11872 14.0637 6.70872 13.2925 5.67872L11.7175 3.57497C10.7625 2.29997 8.91872 2.13122 7.82497 3.21872L5.86247 5.16872C5.32122 5.70872 4.95872 6.40622 5.00247 7.18122C5.11497 9.16497 6.01247 13.4312 11.0175 18.4087C16.3262 23.6862 21.3075 23.8962 23.3437 23.7062C23.9887 23.6462 24.5487 23.3187 25 22.8687L26.775 21.1037C27.975 19.9125 27.6375 17.8687 26.1025 17.035L23.715 15.7362C22.7075 15.1887 21.4825 15.35 20.695 16.1325Z" fill="white"/>
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Nomor Telepon</h2> 
                        <p className='text-xl mt-[18px]'>0274-561270</p>
                    </div>
                </div>
                <div className='flex gap-7 px-8 py-5 rounded-lg shadow-lg mt-[60px]'>
                    <div className='bg-third p-6 items-center flex rounded-full'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM24.5 10.3125L15.6625 15.8375C15.2625 16.0875 14.7375 16.0875 14.3375 15.8375L5.5 10.3125C5.37466 10.2421 5.2649 10.1471 5.17736 10.0331C5.08982 9.91906 5.02633 9.78847 4.99072 9.64921C4.95511 9.50995 4.94813 9.36492 4.9702 9.22288C4.99226 9.08085 5.04292 8.94477 5.1191 8.82288C5.19528 8.70099 5.29541 8.59582 5.41341 8.51374C5.53141 8.43167 5.66484 8.37439 5.80562 8.34537C5.9464 8.31636 6.0916 8.31621 6.23244 8.34494C6.37328 8.37366 6.50683 8.43067 6.625 8.5125L15 13.75L23.375 8.5125C23.4932 8.43067 23.6267 8.37366 23.7676 8.34494C23.9084 8.31621 24.0536 8.31636 24.1944 8.34537C24.3352 8.37439 24.4686 8.43167 24.5866 8.51374C24.7046 8.59582 24.8047 8.70099 24.8809 8.82288C24.9571 8.94477 25.0077 9.08085 25.0298 9.22288C25.0519 9.36492 25.0449 9.50995 25.0093 9.64921C24.9737 9.78847 24.9102 9.91906 24.8226 10.0331C24.7351 10.1471 24.6253 10.2421 24.5 10.3125Z" fill="white"/>
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Alamat email</h2> 
                        <p className='text-xl mt-[18px]'>ppidkotajogja@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-7 px-8 py-5 rounded-lg shadow-lg mt-[60px]'>
                    <div className='bg-third p-6 items-center flex rounded-full'>
                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7048 0C16.2048 0.003605 16.9661 0.010815 17.6234 0.0276384L17.8821 0.03605C18.1808 0.0456634 18.4754 0.05768 18.8314 0.0721C20.2501 0.132183 21.2181 0.334064 22.0674 0.630876C22.9474 0.9361 23.6888 1.34947 24.4301 2.0164C25.1081 2.61711 25.6327 3.34375 25.9674 4.14575C26.2968 4.91122 26.5208 5.78363 26.5874 7.06341C26.6034 7.38305 26.6168 7.64862 26.6274 7.91899L26.6354 8.15212C26.6554 8.74334 26.6634 9.42949 26.6661 10.7814L26.6674 11.6778V13.252C26.6707 14.1285 26.6605 15.005 26.6368 15.8812L26.6288 16.1144C26.6181 16.3847 26.6048 16.6503 26.5888 16.97C26.5221 18.2497 26.2954 19.1209 25.9674 19.8876C25.6337 20.6901 25.1089 21.4169 24.4301 22.017C23.7634 22.6278 22.9572 23.1006 22.0674 23.4025C21.2181 23.6993 20.2501 23.9012 18.8314 23.9613C18.5151 23.9747 18.1986 23.9867 17.8821 23.9973L17.6234 24.0045C16.9661 24.0213 16.2048 24.0298 14.7048 24.0322L13.7101 24.0334H11.9648C10.9918 24.0364 10.0188 24.0272 9.0461 24.0057L8.78744 23.9985C8.47092 23.9877 8.15447 23.9753 7.8381 23.9613C6.41944 23.9012 5.45144 23.6993 4.60077 23.4025C3.71099 23.1013 2.90506 22.6284 2.23944 22.017C1.56083 21.4165 1.03573 20.6898 0.700769 19.8876C0.371436 19.1221 0.147436 18.2497 0.0807692 16.97C0.0659143 16.6848 0.0525809 16.3996 0.0407693 16.1144L0.0341028 15.8812C0.00953219 15.005 -0.00158011 14.1285 0.000769334 13.252V10.7814C-0.00295195 9.90487 0.00682686 9.02837 0.0301028 8.15212L0.0394361 7.91899C0.0501027 7.64862 0.063436 7.38305 0.079436 7.06341C0.146103 5.78363 0.370103 4.91242 0.699436 4.14575C1.03425 3.34293 1.5604 2.61606 2.24077 2.0164C2.90622 1.40532 3.71163 0.932479 4.60077 0.630876C5.45144 0.334064 6.4181 0.132183 7.8381 0.0721C8.19277 0.05768 8.48877 0.0456634 8.78744 0.03605L9.0461 0.02884C10.0184 0.00748965 10.9909 -0.00172403 11.9634 0.00120158L14.7048 0ZM13.3341 6.00834C11.566 6.00834 9.8703 6.64136 8.62006 7.76814C7.36981 8.89493 6.66744 10.4232 6.66744 12.0167C6.66744 13.6102 7.36981 15.1384 8.62006 16.2652C9.8703 17.392 11.566 18.025 13.3341 18.025C15.1022 18.025 16.7979 17.392 18.0481 16.2652C19.2984 15.1384 20.0008 13.6102 20.0008 12.0167C20.0008 10.4232 19.2984 8.89493 18.0481 7.76814C16.7979 6.64136 15.1022 6.00834 13.3341 6.00834ZM13.3341 8.41168C13.8594 8.4116 14.3796 8.50477 14.8649 8.68586C15.3502 8.86696 15.7912 9.13243 16.1627 9.46713C16.5342 9.80183 16.8289 10.1992 17.03 10.6366C17.2311 11.0739 17.3347 11.5427 17.3348 12.0161C17.3349 12.4895 17.2315 12.9583 17.0305 13.3957C16.8296 13.8331 16.535 14.2306 16.1637 14.5654C15.7923 14.9002 15.3514 15.1658 14.8661 15.347C14.3808 15.5283 13.8607 15.6216 13.3354 15.6217C12.2746 15.6217 11.2572 15.2419 10.507 14.5658C9.75686 13.8897 9.33544 12.9728 9.33544 12.0167C9.33544 11.0606 9.75686 10.1436 10.507 9.46756C11.2572 8.79149 12.2746 8.41168 13.3354 8.41168M20.3354 4.20584C19.8934 4.20584 19.4695 4.36409 19.1569 4.64579C18.8444 4.92748 18.6688 5.30955 18.6688 5.70792C18.6688 6.1063 18.8444 6.48836 19.1569 6.77006C19.4695 7.05175 19.8934 7.21001 20.3354 7.21001C20.7775 7.21001 21.2014 7.05175 21.5139 6.77006C21.8265 6.48836 22.0021 6.1063 22.0021 5.70792C22.0021 5.30955 21.8265 4.92748 21.5139 4.64579C21.2014 4.36409 20.7775 4.20584 20.3354 4.20584Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold'>Instragram</h2> 
                        <p className='text-xl mt-[18px]'>ppidpemdadiy</p>
                    </div>
                </div>
            </div>
              <img className="w-[492px] h-[540px] mt-[147px]" alt="" src={Kontak2}/>     
        </div>
    </div>
    
  )
}
