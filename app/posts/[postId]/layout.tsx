import Link from "next/link";

export default function postsLayout({children}:{children:React.ReactNode}){
return(<>
{children}
<Link href="/posts">Back to posts</Link>
</>
)}