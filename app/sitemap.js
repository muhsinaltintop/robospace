export default async function sitemap() {
 return [
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {

        url: `${process.env.NEXT_PUBLIC_BASE_URL}/urunler`
    },
    {

        url: `${process.env.NEXT_PUBLIC_BASE_URL}/hakkimizda`
    },
    {

        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
    },
    {

        url: `${process.env.NEXT_PUBLIC_BASE_URL}/iletisim`
    },
 ]   
}