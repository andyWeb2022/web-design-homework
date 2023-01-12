import React, { useEffect, useState } from 'react';
import useRouter from 'next/router';
import Image from 'next/image'

const Naruto = () => {

    const router = useRouter;
    useEffect(() => {}, );
    return (
        <div className="w-full h-full bg-[#f0f0f0]">
            <div className='flex justify-start bg-[#cfcfcf]'>
                <h1 className='text-[40px] ml-[10px] cursor-pointer'  onClick={()=>{router.push('./')}}>動漫介紹</h1>
                <div className='flex items-center'>
                    <p className='text-[25px] ml-[10px] cursor-pointer'>火影忍者</p>
                </div>
            </div>     
            <div className='flex justify-center items-center mt-[50px]'>
                <Image className='mr-[150px]' src={`/images/Naruto1.jpg`} alt="" height={500} width={500} />
                <p className='w-[300px]'>《火影忍者》（日語：NARUTO -ナルト-），通常簡稱為「火影」，為日本漫畫家岸本齊史創作的少年漫畫，講述忍者世界裡圍繞著身為對手的漩渦鳴人與宇智波佐助兩人，與其他角色的經歷。</p>
            </div>
            <div className='flex justify-center items-center mt-[50px]'>
                <p className='w-[300px] ml-[250px]'>2010年集英社宣布系列漫畫的累計發行量已突破一億冊[2]。《火影忍者》在三十多個國家及地區被翻譯並出版發行，截至2014年8月，系列漫畫在全球的累計發行量已突破2億本。[3]連載達15年的《火影忍者》於2014年11月10日在《週刊少年Jump》第50期以700話完結。[4][5]</p>
                <Image className='ml-[250px] mb-[30px]' src={`/images/Naruto2.webp`} alt="" height={600} width={500} />
            </div>     
        </div>
    );
};

export default Naruto;