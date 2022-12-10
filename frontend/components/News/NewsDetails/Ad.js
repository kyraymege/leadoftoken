import React from 'react'
import Script from 'next/script'

const ad = () => {
  return (
    <div className='h-[900px] w-[300px]'>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1438992172560378"
        crossorigin="anonymous"></Script>
      <ins className="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-1438992172560378"
        data-ad-slot="5438016209"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <Script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </Script>
    </div>
  )
}

export default ad