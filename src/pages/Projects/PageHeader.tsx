const PageHeader = () => (
    <section className="relative pt-32 pb-20 bg-[#474454]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#474454]/90 to-[#474454]/60 z-10"></div>
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#474454] opacity-70">
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-200 max-w-3xl">
          Explore our portfolio of completed construction and engineering projects.
        </p>
      </div>
    </section>
  );
  
  export default PageHeader;
  