import dynamic from 'next/dynamic';

// Dynamically import the 3D component to avoid SSR issues
const Store3D = dynamic(() => import('@/components/Store3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
      <div className="text-white text-xl">جاري تحميل المتجر الثلاثي الأبعاد...</div>
    </div>
  ),
});

export default function Store3DPage() {
  return <Store3D />;
}
