import React, { useEffect,useRef, useState } from 'react';

export const GifButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const gifRef = useRef<HTMLImageElement|null>(null);

  useEffect(() => {
    if (gifRef.current) {
      // Сбрасываем гифку при изменении состояния
      gifRef.current.src = gifRef.current.src;
    }
  }, [isPressed]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        Нажми меня
      </button>

      <div className="w-64 h-64">
        <img
          ref={gifRef}
          src={isPressed ? "/den.gif#start" : "/den.gif#end"}
          alt="Анимированная гифка"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
