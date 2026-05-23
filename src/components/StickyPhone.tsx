import { PhoneCTA } from "./PhoneCTA";

export function StickyPhone() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-brand-700 bg-white/95 p-3 backdrop-blur-sm lg:hidden">
      <PhoneCTA size="sticky" />
    </div>
  );
}
