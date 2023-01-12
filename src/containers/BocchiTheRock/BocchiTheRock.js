import React, { useEffect, useState } from 'react';
import useRouter from 'next/router';
import Image from 'next/image'


const BocchiTheRock = () => {

    const router = useRouter;
    useEffect(() => {}, );
    return (
        <div className="w-full h-full bg-[#f0f0f0]">
            <div className='flex justify-start bg-[#cfcfcf]'>
                <h1 className='text-[40px] ml-[10px] cursor-pointer'  onClick={()=>{router.push('./')}}>動漫介紹</h1>
                <div className='flex items-center'>
                    <p className='text-[25px] ml-[10px] cursor-pointer'>孤獨搖滾!</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[50px]'>
                <Image className='mr-[150px]' src={`/images/Bocchi_the_Rock_vol.1.jpg`} alt="" height={500} width={500} />
                <p className='w-[300px]'>《孤獨搖滾！》（日語：ぼっち・ざ・ろっく！）是濱路晶的日本漫畫作品。於芳文社四格漫畫雜誌《Manga Time Kirara MAX》2018年2月號[1]至4月號客串刊載後，於2018年3月19日發售的《Manga Time Kirara MAX》2018年5月號開始連載[2][3]，已發行單行本5冊[4]。宣傳口號為「陰鬱的話就去玩搖滾！」（陰キャならロックをやれ！）。</p>
            </div>
            <div className='flex justify-center items-center mt-[50px]'>
                <p className='w-[300px] ml-[250px]'>女高中生後藤一里抱持著組樂團的夢想，卻因為不擅與人來往，而無法實現願望。她在某天放學後被急徵求著吉他手的伊地知虹夏發現，而因緣加入了「團結Band」，一同與山田涼和喜多郁代一起開始了音樂活動。</p>
                <Image className='ml-[250px] mb-[30px]' src={`/images/Bocchi_the_Rock_vol.2.gif`} alt="" height={600} width={500} />
            </div>
        </div>
    );
};

export default BocchiTheRock;