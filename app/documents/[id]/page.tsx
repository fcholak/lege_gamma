async function getDocumentById(documentId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/documents/records/${documentId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function DocumentPage({ params }: any) {
  const document = await getDocumentById(params.id);

  return (
    <div>
      <h1>documents/{document.id}</h1>
      <div>
        <h3>{document.name}</h3>
        <h5>{document.file}</h5>
        <p>{document.created}</p>
      </div>
    </div>
  );
}
