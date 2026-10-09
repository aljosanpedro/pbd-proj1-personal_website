export default function MainBanner() {
  return (
    // sticky: fixed position, but scrolls with parent
    // sm: flex-row for mobile
    // ml: margin-left
    <div className="sticky flex flex-col sm:flex-col top-0 z-50 w-[98%] h-20 border border-gray-300 rounded-sm ml-2 backdrop-blur-sm">
      <div>left</div>
      <div>
        <p>1st right</p>
        <p>2nd right</p>
      </div>
    </div>
  );
}
