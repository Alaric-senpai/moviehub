import Moviegrid from "@/components/Movie-grid";

export default function Home() {
  return (
    <>
        <section className="py-12 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Download HD Movies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse and download movies in excellent quality, all at the smallest file size.
              Available in 720p, 1080p, 2160p-4K and 3D quality.
            </p>
          </div>
        </section>

        <section>
          <Moviegrid />
        </section>


    </>
  );
}
