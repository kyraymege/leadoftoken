import React, { useEffect } from 'react'
import Script from 'next/script'

const Ad = () => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
    <div className='h-[900px] w-[300px]'>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1438992172560378"
        data-ad-slot="5438016209"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <Script id='googleAdsense'>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </Script>
    </div>
  )
}

export default Ad