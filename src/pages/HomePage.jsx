import bmw_img from './../assets/bmw_img.png'
import handshake from './../assets/handshake.svg'
import handyman from './../assets/handyman.svg'
import group from './../assets/group.svg'

export const HomePage = () => {
  return (
    <div className="w-[1320px] m-auto mt-[50px]">
      <main>
        <div className="flex justify-between items-center mt-50">
          <div className='w-[485px]'>
            <h2 className='text-[#00000075] text-[20px] tracking-[4px] mb-2.5'>When BMW becomes a lifestyle.</h2>
            <p className='mb-[25px]'>We don't just sell cars. We create stories of speed, comfort and confidence. Your dream awaits.</p>
            <div className="flex justify-between">
              <button className='cursor-pointer w-[233px] h-10.5 text-white rounded-xl bg-[#F9A200]'>Find a dream</button>
              <button className='cursor-pointer w-[233px] h-10.5 border rounded-xl border-[#F9A200]'>Sell BMW</button>
            </div>
          </div>
          <img src={bmw_img} alt="asdaddas" />
        </div>
      </main>
      <section className='text-center mt-50'>
        <h3 className='text-[32px] font-light'>Why us?</h3>
        <p>Because we don’t just sell cars — we share passion for performance.</p>
        <div className='mt-25 flex justify-center gap-25'>
          <div className='flex justify-between items-center flex-col max-w-[258px] text-center'>
            <img className='mb-5' src={handshake} alt="" />
            <h4 className='text-[20px] mb-2.5'>Trusted Sellers Only</h4>
            <p>Every car is carefully checked and verified by our team before it appears on the site.</p>
          </div>
          <div className='flex justify-between items-center flex-col max-w-[258px] text-center'>
            <img className='mb-5' src={handyman} alt="" />
            <h4 className='text-[20px] mb-2.5'>Trusted Sellers Only</h4>
            <p>Every car is carefully checked and verified by our team before it appears on the site.</p>
          </div>
          <div className='flex justify-between items-center flex-col max-w-[258px] text-center'>
            <img className='mb-5' src={group} alt="" />
            <h4 className='text-[20px] mb-2.5'>Trusted Sellers Only</h4>
            <p>Every car is carefully checked and verified by our team before it appears on the site.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
