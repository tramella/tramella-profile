import Image from 'next/image';
import ContactButton from './ContactButton';

export default function MainSlide() {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto py-5">
        <div className="w-full flex flex-col justify-start">
          <div className="w-full text-center text-md font-medium mt-3 md:mt-5" style={{ fontFamily: "'Pacifico', sans-serif" }}>Hello! I'm Tramella</div>
          <div className="w-full text-start text-6xl xl:text-9xl md:text-8xl font-normal tracking-tighter ">FULLSTACK +</div>
          <div className="w-full grid  grid-cols-1 md:grid-cols-[3fr_5fr] gap-4">
            <div className="grid-cols-1 row-span-2">
              <div className="w-full flex justify-center items-end">
                <Image
                  src={`https://res.cloudinary.com/dalrsrbw0/image/upload/v1757843751/avatar_z46urp.jpg`}
                  alt="Avatar"
                  width={300}
                  height={360}
                  className="object-cover w-[270px] h-[320px] rounded-2xl mt-2 md:mt-10"
                />
              </div>
            </div>
            <div className="w-full text-end text-6xl xl:text-9xl md:text-8xl font-medium tracking-tighter">DEVELOPER</div>
            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-25 gap-y-5'>
               <div className='text-justify text-xs md:text-sm'>A visionary Fullstack Developer who creates seamless digital experiences, blending design, performance, and storytelling into every project</div>
               <div className='w-full flex justify-center md:justify-start'><ContactButton className='h-10'/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
