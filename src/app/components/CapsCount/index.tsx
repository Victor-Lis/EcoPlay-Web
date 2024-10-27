import Tampinha from '@/assets/eco-play.png'
import Image from 'next/image';

export default function CapsCount({tampinhas, extraClass}:{tampinhas: number; extraClass?: string}) {
 return (
  <div className={`py-2 px-4 bg-green-500 flex justify-center items-center gap-x-1 text-white ${extraClass}`}>
    <Image src={Tampinha} width={36} alt="Tampinhas:"/>
    <h2 className="text-3xl min-w-5 text-right">{tampinhas}</h2>
  </div>
 );
}