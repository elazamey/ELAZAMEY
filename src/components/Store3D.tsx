'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Plane } from '@react-three/drei';
import { Suspense } from 'react';

function StoreScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4169E1" />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#00CED1" />

      {/* Floor */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#1a1a2e" />
      </Plane>

      {/* Walls */}
      <Plane args={[50, 20]} position={[0, 8, -25]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#16213e" />
      </Plane>
      <Plane args={[50, 20]} position={[-25, 8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#0f3460" />
      </Plane>

      {/* Product Display Cubes */}
      {/* Thobes Section */}
      <Box position={[-15, 2, 10]} args={[3, 4, 3]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </Box>
      <Text position={[-15, 6, 10]} fontSize={0.8} color="#FFD700" anchorX="center" anchorY="middle">
        ثوب
      </Text>
      <Text position={[-15, 5.5, 10]} fontSize={0.5} color="#FFD700" anchorX="center" anchorY="middle">
        500 ريال
      </Text>

      {/* Suits Section */}
      <Box position={[-5, 2, 10]} args={[3, 4, 3]}>
        <meshStandardMaterial color="#000000" transparent opacity={0.3} />
      </Box>
      <Text position={[-5, 6, 10]} fontSize={0.8} color="#FFD700" anchorX="center" anchorY="middle">
        بدلة
      </Text>
      <Text position={[-5, 5.5, 10]} fontSize={0.5} color="#FFD700" anchorX="center" anchorY="middle">
        1200 ريال
      </Text>

      {/* Shoes Section */}
      <Box position={[5, 1, 10]} args={[2, 1, 4]}>
        <meshStandardMaterial color="#8B4513" transparent opacity={0.3} />
      </Box>
      <Text position={[5, 3, 10]} fontSize={0.8} color="#FFD700" anchorX="center" anchorY="middle">
        أحذية
      </Text>
      <Text position={[5, 2.5, 10]} fontSize={0.5} color="#FFD700" anchorX="center" anchorY="middle">
        300 ريال
      </Text>

      {/* Watches Section */}
      <Cylinder position={[15, 3, 10]} args={[0.5, 0.5, 0.2]}>
        <meshStandardMaterial color="#C0C0C0" />
      </Cylinder>
      <Text position={[15, 5, 10]} fontSize={0.8} color="#FFD700" anchorX="center" anchorY="middle">
        ساعات
      </Text>
      <Text position={[15, 4.5, 10]} fontSize={0.5} color="#FFD700" anchorX="center" anchorY="middle">
        800 ريال
      </Text>

      {/* Accessories Section */}
      <Sphere position={[0, 4, 5]} args={[1]}>
        <meshStandardMaterial color="#FFD700" />
      </Sphere>
      <Text position={[0, 6, 5]} fontSize={0.8} color="#FFD700" anchorX="center" anchorY="middle">
        إكسسوارات
      </Text>
      <Text position={[0, 5.5, 5]} fontSize={0.5} color="#FFD700" anchorX="center" anchorY="middle">
        150 ريال
      </Text>

      {/* Checkout Counter */}
      <Box position={[0, 1, -15]} args={[8, 2, 2]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
      <Sphere position={[0, 3, -15]} args={[0.3]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.2} />
      </Sphere>

      {/* Arabic Calligraphy */}
      <Text position={[0, 12, -20]} fontSize={2} color="#FFD700" anchorX="center" anchorY="middle">
        متجر الأناقة العربية
      </Text>

      {/* Mannequins (simplified) */}
      <Cylinder position={[-15, 0, 10]} args={[0.3, 0.3, 6]}>
        <meshStandardMaterial color="#f8f8f8" />
      </Cylinder>
      <Sphere position={[-15, 6, 10]} args={[0.4]}>
        <meshStandardMaterial color="#f8f8f8" />
      </Sphere>

      <Cylinder position={[-5, 0, 10]} args={[0.3, 0.3, 6]}>
        <meshStandardMaterial color="#000000" />
      </Cylinder>
      <Sphere position={[-5, 6, 10]} args={[0.4]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>

      {/* Interactive Panels */}
      <Box position={[-20, 4, 0]} args={[2, 3, 0.1]}>
        <meshStandardMaterial color="#00CED1" emissive="#00CED1" emissiveIntensity={0.1} />
      </Box>
      <Text position={[-20, 5, 0.1]} fontSize={0.4} color="#000000" anchorX="center" anchorY="middle">
        تصفح المجموعات
      </Text>

      <Box position={[20, 4, 0]} args={[2, 3, 0.1]}>
        <meshStandardMaterial color="#4169E1" emissive="#4169E1" emissiveIntensity={0.1} />
      </Box>
      <Text position={[20, 5, 0.1]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
        آراء العملاء
      </Text>
    </>
  );
}

export default function Store3D() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black">
      <Canvas camera={{ position: [0, 5, 20], fov: 75 }}>
        <Suspense fallback={null}>
          <StoreScene />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>
      <div className="absolute top-4 left-4 text-white">
        <h2 className="text-2xl font-bold mb-2">متجر CELIA FASHION DESIGN</h2>
        <p className="text-sm">استخدم الفأرة للتنقل في المتجر</p>
      </div>
    </div>
  );
}
