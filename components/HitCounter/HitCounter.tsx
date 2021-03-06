import { useEffect, useState } from 'react';

export default function HitCounter({ slug }) {
  const [hits, setHits] = useState(undefined);
  useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/api/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (typeof json.hits === 'number') {
          setHits(json.hits);
        }
      });
  }, [slug]);
  if (typeof hits === 'undefined') {
    return null;
  }
  return (
    <p className="italic">
      {hits} {hits > 1 ? 'Views' : 'View'}
    </p>
  );
}
