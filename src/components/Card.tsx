type Props = {
  advice: string;
  adviceId: number;
  handleClick: () => void;
};

function Card({ advice, adviceId, handleClick }: Props) {
  console.log(advice);

  return (
    <div className="bg-[#313a49] w-5/6 sm:max-w-96 h-min text-center p-14 rounded-2xl relative">
      <div className="overflow-hidden">
        <p className="text-xs text-[#4dde9a] tracking-[0.2em] select-none">
          ADVICE #{adviceId}
        </p>
        <p className="text-white text-xl text-[1.2vw] pt-5 py-10 select-none">
          {advice ? (
            advice
          ) : (
            <>
              <span className="animate-ping">. . .</span>
            </>
          )}
        </p>
        <div className="flex items-center overflow-hidden flex-col justify-center">
          <svg
            className="w-[444px]"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="bg-[#4dde9a] hover:shadow-[0_0px_15px_3px_rgba(0,255,170,0.6)] p-4 rounded-full w-min absolute bottom-[-24px] cursor-pointer"
          onClick={handleClick}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
