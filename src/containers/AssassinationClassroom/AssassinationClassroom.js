import React, { useEffect, useState } from 'react';
import useRouter from 'next/router';
import Image from 'next/image'


const AssassinationClassroom = () => {

    const router = useRouter;
    useEffect(() => {}, );
    return (
        <div className="w-full h-full bg-[#f0f0f0]">
            <div className=' flex justify-start bg-[#cfcfcf]'>
                <h1 className='text-[40px] ml-[10px] cursor-pointer'  onClick={()=>{router.push('./')}}>動漫介紹</h1>
                <div className='flex items-center'>
                    <p className='text-[25px] ml-[10px] cursor-pointer'>暗殺教室</p>
                </div>
            </div>          
            <div className='flex justify-center items-center mt-[50px]'>
                <Image className='mr-[150px]' src={`/images/AssClass3.jpg`} alt="" height={600} width={500} />
                <p className='w-[300px]'>《暗殺教室》（日語：暗殺教室）是日本漫畫家松井優征創作的漫畫作品，於集英社漫畫雜誌《週刊少年Jump》2012年31號開始連載，每話的標題是「XXの時間」。台灣中文版由東立出版社漫畫雜誌《寶島少年》2012年46號開始連載，每話的標題是「XX的一課」。香港中文版由天下出版代理發行，每話的標題是「XX課」。</p>
            </div>
            <div className='flex justify-center items-center mt-[50px]'>
                <p className='w-[300px] ml-[250px]'>號稱史上最凶惡的超生物「殺老師」揚言將月球炸掉了七成，並聲稱明年3月要炸掉地球，卻因不明目的而擔任椚丘中學3年E班的教師。各國首腦將暗殺重任交給椚丘中學3年E班，為他們配送特製的「對老師 用特殊武器（Special Arms Against Unidentified Slimy Octopus，簡稱S·A·A·U·S·O）」，希望學生們能在一年之內消滅殺老師，報酬是一百億日元。從第二學期開始，國家決定讓暗殺成功者獨得一百億日元報酬，協力團體共享三百億日元報酬。</p>
                <Image className='ml-[250px] mb-[30px]' src={`/images/AssClass2.jpg`} alt="" height={600} width={500} />
            </div>
        </div>
    );
};

export default AssassinationClassroom;