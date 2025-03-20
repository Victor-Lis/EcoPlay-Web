import Tampinha from '@/assets/eco-play.png'
import Image from 'next/image';

type CapsCountProps = {
  tampinhas: number; 
  boxClass?: string;
  textClass?: string;
}

export default function CapsCount({tampinhas, boxClass, textClass}:CapsCountProps) {
 return (
  <div className={`py-2 px-4 bg-green-500 flex justify-center items-center gap-x-1 ${boxClass}`}>
    <Image src={Tampinha} width={36} alt="Tampinhas:"/>
    <h2 className={`text-3xl min-w-5 text-right ${textClass ? textClass : "text-white"}`}>{tampinhas}</h2>
  </div>
 );
}