export default function user({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
