import Image from "next/image";

export default function BlogCard() {
    return (
        <>
            <div className="card-wrapper max-w-[350px] bg-white text-black rounded-xl">
                <div className="ImgWrapper">
                    <Image
                        className="rounded-t-xl"
                        src="/blog-img.jpg"
                        alt="modern living room"
                        width={350}
                        height={350}
                        priority
                    />
                </div>
                <div className="cardDataWrapper px-3 pb-4">
                    <div className="tagWrapper mt-6 mb-3">
                        <p className="text-green-700 bg-green-50 border-green-200 px-2 py-1 w-min border-2 rounded-full">Interior</p>
                    </div>
                    <div className="copyWrapper flex flex-col gap-4">
                        <p className="blogTitle font-semibold text-lg ">Top 5 Living Room Inspirations</p>
                        <p className="blogExcerpt text-neutral-600">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
                    </div>

                    <a role="button" className="flex items-center gap-4 text-indigo-700 font-medium pt-5" href="#">Read More <span><Image 
                    src="/read-more-arrow.svg" 
                    width={15} 
                    height={15}
                    alt="" /></span></a>
                </div>
            </div>
        </>
    );
}