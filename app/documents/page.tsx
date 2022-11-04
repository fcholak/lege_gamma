import Link from "next/link";
import CreateDocument from "./CreateDocument";

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getDocuments() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/documents/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function DocumentsPage() {
  const documents = await getDocuments();

  return (
    <div>
      <div>
        {documents?.map((document) => {
          return <Document key={document.id} document={document} />;
        })}
      </div>

      <CreateDocument />
    </div>
  );
}

function Document({ document }: any) {
  const { id, name, file, created } = document || {};

  return (
    <Link href={`/documents/${id}`}>
      <div>
        <h2>{name}</h2>
        <h5>{file}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
