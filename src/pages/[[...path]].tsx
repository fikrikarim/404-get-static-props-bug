export default function Page() {
  return (
    <div>
      <p>Page</p>
    </div>
  );
}

export async function getStaticProps() {
  console.log("[[...path]].tsx getStaticProps");
  return { notFound: true };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
