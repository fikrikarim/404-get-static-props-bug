export async function getStaticProps() {
  console.log("404 getStaticProps");

  return { props: {} };
}

export default function Page() {
  return (
    <div>
      <p>404</p>
    </div>
  );
}
