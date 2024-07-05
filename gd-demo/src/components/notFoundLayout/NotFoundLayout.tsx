import Image from 'next/image';

export const NotFoundLayout = ({text}:{text: string}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500">
      <Image src="/logo.png" alt="Logo" loading='lazy' width={400} height={400} className="mb-8" />
      <p className="text-6xl font-bold text-gray-900 mb-4">{text}</p>
    </div>
  );
};
