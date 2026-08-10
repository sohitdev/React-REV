const Pagination = ({ page, handlePage }) => (
  <div className="flex justify-center items-center gap-6 py-4">
    {page > 1 && (
      <button
        className="bg-amber-400 text-black cursor-pointer active:scale-95 text-sm rounded px-4 py-2 font-semibold"
        onClick={() => handlePage('prev')}
      >
        Previous
      </button>
    )}
    <span className="text-sm text-gray-400">Page {page}</span>
    <button
      className="bg-amber-400 text-black cursor-pointer active:scale-95 text-sm rounded px-4 py-2 font-semibold"
      onClick={() => handlePage('next')}
    >
      Next
    </button>
  </div>
);

export default Pagination;
