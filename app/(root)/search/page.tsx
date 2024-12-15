import MovieCard from "@/components/MovieCard";
import { getSearchResult } from "@/lib/yts";
import { Movie } from "@/types/typesyts";

export default async function SearchResults(
  props: {
    searchParams: Promise<{ q?: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const query = searchParams.q ?? "";

  if (!query) {
    return (
      <div className="min-h-screen bg-background">
        <main>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">No search query provided.</h2>
              <p className="text-lg text-gray-500">Please enter a search term.</p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const data = await getSearchResult(query);

  const movies: Movie[] = data.movies ?? [];

  const available: boolean = movies.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-3">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-1">Search Results for &quot;{query}&quot;</h2>
          </div>
        </section>

        {available ? (
          <div className="w-full mt-2 p-3 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6">
            {movies.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="container mx-auto px-4">
            <p className="text-center text-lg font-medium text-gray-500 mt-8">
              No movies found for &quot;{query}&quot;. Please try searching with a different keyword.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}