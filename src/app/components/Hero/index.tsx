"use client";
import Image from "next/image";
import HeroImg from "@/assets/marca_ecoplay.svg";
import './styles.modules.css'

export default function Hero() {
  return (
    <>
      <div id="hero" className="mb-2"/>
      <div
        className="w-9/12 md:w-10/12 h-50 flex justify-center items-center max-sm:my-10"
        id="hero-box"
      >
        {/* <Image
          src={HeroImg}
          alt="Logo Marca do projeto Eco-Play"
          className="min-w-72 md:min-w-0 w-6/12"
          priority
        /> */}
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.2s_ease-in]`}>E</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.3s_ease-in]`}>c</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.4s_ease-in]`}>o</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.5s_ease-in]`}>-</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.6s_ease-in]`}>P</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.7s_ease-in]`}>l</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.8s_ease-in]`}>a</h1>
        <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] text-green-600 animate-[start_.9s_ease-in]`}>y</h1>
        {/* <h1 className={`dynapuff text-[70px] min-[410px]:text-[100px] min-[600px]:text-[150px] min-[770px]:text-[200px] min-[970px]:text-[250px] animate-logo-bounce text-green-600`}>Eco-Play</h1> */}
      </div>
      
    </>
  );
}
