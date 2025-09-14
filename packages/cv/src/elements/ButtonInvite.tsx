import { useGetCvData } from "../../api/api";

export const ButtonInvite = () => {
  const { data: { mainInfo } } = useGetCvData();
  return <div className="relative group">
    <a href={"https://t.me/tamplleer"} target="_blank" rel="noopener noreferrer">
      <button
        className="relative inline-block p-px font-semibold leading-6 text-neutral-0 bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl  transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-primary-200"
      >
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-warning-500 via-error-500 to-secondary-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>
        <span className="relative z-10 block px-4 py-2 rounded-2xl bg-neutral-900">
        <div className="relative z-10 flex items-center space-x-3">
          <span
            className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-neutral-100"
          >Позвать на собесеседование</span
          >
        </div>
      </span>
      </button>
    </a>
  </div>;
};

export const ButtonInviteMobile = () => {
  return <div className="relative group">
    <a href={"https://t.me/tamplleer"} target="_blank" rel="noopener noreferrer">
      <button
        className="relative inline-block p-px font-semibold leading-6 text-neutral-0 bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl  transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-primary-200"
      >
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-warning-500 via-error-500 to-secondary-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>
        <span className="relative z-10 block px-4 py-2 rounded-2xl bg-neutral-900">
        <div className="relative z-10 flex items-center space-x-3">
          <span
            className="text-body3 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-neutral-100"
          >Позвать Дениса на собесеседование</span
          >
        </div>
      </span>
      </button>
    </a>
  </div>;
};
