export default function ExpandingCard({
  MainTitle,
  MainIcon: MainIcon,
  items,
}) {
  return (
    <div className="flex flex-col gap-3 p-4 border border-gray-300 rounded-lg w-full overflow-hidden ml-1 mr-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <MainIcon className="w-6 h-6 text-blue-500" />
        <h2 className="text-l font-bold">{MainTitle}</h2>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-2">
        {items.map((item, index) => {
          const SubIcon = item.subicon;
          const description = item.description ?? item.textDescription;
          return (
            <div
              key={index}
              className="group flex flex-col gap-1 border border-gray-200 rounded-md px-4 py-3 cursor-pointer
                         transition duration-300 ease-in-out hover:bg-gray-50 hover:scale-102 transform-gpu origin-center"
            >
              {/* Always visible row */}
              <div className="flex items-center gap-2">
                <SubIcon className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="font-semibold text-sm">{item.subtitle}</span>
              </div>

              {/* Description stays fully visible */}
              <div className="leading-snug pt-1.5">{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
