import { fetchAllTokensId } from "../redux/apiCalls";

const EXTERNAL_DATA_URL = 'https://www.leadoftoken.com/token';

function generateSiteMap(tokens) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://www.leadoftoken.com</loc>
       </url>
       <url>
         <loc>https://www.leadoftoken.com/contact</loc>
       </url>
       <url>
         <loc>https://www.leadoftoken.com/addToken</loc>
       </url>
       <url>
         <loc>https://www.leadoftoken.com/sign-up</loc>
       </url>
       <url>
         <loc>https://www.leadoftoken.com/project-articles</loc>
       </url>
       <url>
         <loc>https://www.leadoftoken.com/createNews</loc>
       </url>
       <url>
         <loc>https://www.leadoftoken.com/auth</loc>
       </url>
       ${tokens?.map((id) => {
                return `
         <url>
             <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
         </url>
       `;
            })
            .join('')}
     </urlset>
   `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site     
    const request = fetchAllTokensId();        
    const tokens = await request;
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(tokens);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;