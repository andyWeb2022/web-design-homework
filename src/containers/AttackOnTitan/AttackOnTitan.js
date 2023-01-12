import React, { useEffect, useState } from 'react';
import useRouter from 'next/router';
import Image from 'next/image'

const AttackOnTitan = () => {

    const router = useRouter;
    useEffect(() => {}, );
    return (
        <div className="w-full h-full bg-[#f0f0f0]">
            <div className='flex justify-start bg-[#cfcfcf]'>
                <h1 className='text-[40px] ml-[10px] cursor-pointer'  onClick={()=>{router.push('./')}}>動漫介紹</h1>
                <div className='flex items-center'>
                    <p className='text-[25px] ml-[10px] cursor-pointer'>進擊的巨人</p>
                </div>
            </div>.
            <div className='flex justify-center items-center mt-[50px]'>
                <Image className='mr-[150px]' src={`/images/Attack_on_Titan_1.jpg`} alt="" height={500} width={500} />
                <p className='w-[300px]'>《進擊的巨人》（日語：進撃の巨人）是日本漫畫家諫山創創作的漫畫作品。漫畫於2009年9月至2021年4月間在講談社《別冊少年Magazine》上連載，單行本全34卷。故事建立在人類與巨人之間的衝突，人類居住在由高牆包圍的城市，對抗牆外會吃人的巨人，並尋找著關於巨人的答案。</p>
            </div>
            <div className='flex justify-center items-center mt-[50px]'>
                <p className='w-[300px] ml-[250px]'>《進擊的巨人》情節始於一個存在於三堵同心圓形城牆內的文明，當地居民的知識讓他們認為自己是世上僅存的人類文明，並相信在百餘年前，人類遭到會吃人的巨人攻擊後退到了這三堵牆內，並享受的一世紀的和平。為了對抗巨人，該文明開發出立體機動裝置供軍方使用，該裝置固定於腰間、可供士兵進行三維空間移動。隨著劇情進展，故事也揭露關於巨人的真實歷史及該島以外的其它文明。</p>
                <Image className='ml-[250px] mb-[30px]' src={`/images/Attack_on_Titan_2.png`} alt="" height={600} width={500} />
            </div>          
        </div>
    );
};

export default AttackOnTitan;