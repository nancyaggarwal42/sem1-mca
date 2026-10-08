function CategoryCard({ title, description }) {
  return (
    <div className="w-full border-2 border-black rounded-[25px] px-8 py-5">

      <div className="flex items-center justify-between">

        {/* Content */}
        <div>
          <h2 className="text-2xl ">
            {title}
          </h2>

          <p className="mt-1 text-lg">
            {description}
          </p>
        </div>

        {/* Just a design circle */}
        <div className="w-8 h-8 border-2 border-black rounded-full shrink-0"></div>

      </div>

    </div>
  );
}

export default CategoryCard;