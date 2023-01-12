import React, { useState, useEffect } from 'react';
import useRouter from 'next/router';
import Image from 'next/image';

const Main = () => {
    const imagesList = [
        'AssClassLogo.png',
        'Bocchi_the_Rock! Logo.webp',
        'Naruto_logo.svg.png',
        'Attack_on_Titan_Logo.png',
    ]
    const [ imageNumber, setImageNumber] = useState(0)
    const router = useRouter;
    useEffect(()=>{
        if(imageNumber === -1){
            setImageNumber(3)
        }else if(imageNumber === 4){
            setImageNumber(0)
        }
    },[imageNumber])

    return (
        <div className="w-full h-screen bg-[#f0f0f0]">
            <div className='flex justify-start bg-[#cfcfcf]'>
                <h1 className='text-[40px] ml-[10px] cursor-pointer'>動漫介紹</h1>
                <div className='flex items-center'>
                    <p className='text-[25px] ml-[10px] cursor-pointer' onClick={()=>{router.push('./AssassinationClassroom')}}>暗殺教室</p>
                    <p className='text-[25px] ml-[10px] cursor-pointer' onClick={()=>{router.push('./BocchiTheRock')}}>孤獨搖滾!</p>
                    <p className='text-[25px] ml-[10px] cursor-pointer' onClick={()=>{router.push('./Naruto')}}>火影忍者</p>
                    <p className='text-[25px] ml-[10px] cursor-pointer' onClick={()=>{router.push('./AttackOnTitan')}}>進擊的巨人</p>
                </div>  
            </div>
            <div className='flex justify-center items-center h-[800px]'>
                <p className='text-[70px] mr-[20px] cursor-pointer' onClick={()=>{setImageNumber(imageNumber - 1)}}>&lt;</p>
                <Image className='mt-[50px]' src={`/images/${imagesList[imageNumber]}`} alt="logo" height={700} width={500} />
                <p className='text-[70px] ml-[20px] cursor-pointer' onClick={()=>{setImageNumber(imageNumber + 1)}}>&gt;</p>
            </div>
        </div>
    );
};

export default Main;