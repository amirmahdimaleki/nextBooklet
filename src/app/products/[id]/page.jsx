//! Example of a metadata generator function. Comment this before running 
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`https://.../${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.title,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }
   
  export default function Page({ params, searchParams }) {
    return <main>
      <h3>
        productID : {params.id}
      </h3>
    </main>
  }