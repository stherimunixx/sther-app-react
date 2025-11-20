"use client";

interface FilterOverlayProps {
  opacity: string;
}

export default function FilterOverlay({ opacity }: FilterOverlayProps) {
  return (
    <>
      <div className="filter__overlay"></div>

      <style jsx>{`
        .filter__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, ${opacity});
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
