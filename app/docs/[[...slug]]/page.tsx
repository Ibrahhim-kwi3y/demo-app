// Assuming params always contains an optional slug array
import React from "react";

interface PageProps {
  params: {
    slug?: string[];
  };
}

const Docs = ({ params }: PageProps) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Blog For Category {params.slug[0]} for title {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Blog For Category {params.slug[0]}</h1>;
  } else {
    return <h1>Blog Home Page</h1>;
  }
};

export default Docs;
