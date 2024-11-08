import React from "react";

type tParams = Promise<{ slug: string[] }>;
 const Docs=async (props: { params: tParams })=>{
    const { slug } = await props.params;
    if (slug?.length===2){
    return(<h1>Blog For Category {slug[0]} for title{slug[1]}</h1>)
}
else if(slug?.length===1)
{
    return <h1>Blog For Category {slug[0]}</h1>
}
else
{
   return <h1>Blog Home Page </h1>
}
}
export default Docs;