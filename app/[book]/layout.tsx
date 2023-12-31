import { GetBookData } from "@/app/lib/actions";
import { urlFor } from "@/app/lib/utils";
import Background from "@/app/ui/Background";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { book: string };
}) {
  const book = await GetBookData(params.book);
  const url = urlFor(book.image).url();

  return (
    <>
      <Background url={url} />
      {children}
    </>
  );
}
