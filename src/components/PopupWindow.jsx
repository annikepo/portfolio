export default function PopupWindow({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 text-slate-100 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm font-bold transition cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}