
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, LabelList 
} from 'recharts';
import { 
  Calendar, CheckCircle, Wind, Heart, Ear, Award, ArrowRight, ArrowUp, 
  MailIcon 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from '@/components/MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Estado para almacenar los datos del participante
  const [userData, setUserData] = useState({
    nickname: "Florencia",
    fecha: "2025-04-08",
    diasActivos: 38,
    meditaciones: 28,
    respiracion: 26,
    gratitud: 29,
    escucha: 13,
    indiceInicial: 45.00,
    indiceFinal: 66.00,
    variacionIndice: "+21.00 puntos",
    estadosSemana: [
      { name: "Semana 1", antes: 5, despues: 7, variacion: 2 },
      { name: "Semana 2", antes: 6, despues: 8, variacion: 2 },
      { name: "Semana 3", antes: 7, despues: 9, variacion: 2 },
      { name: "Semana 4", antes: 4, despues: 7, variacion: 3 },
      { name: "Semana 5", antes: 6, despues: 7, variacion: 1 },
    ]
  });

  // Datos para el gráfico de actividades
  const actividadesData = [
    { name: 'Meditaciones', valor: userData.meditaciones, total: 30, color: '#8F82D5' },
    { name: 'Respiración', valor: userData.respiracion, total: 30, color: '#55A1CC' },
    { name: 'Gratitud', valor: userData.gratitud, total: 30, color: '#6E6EAA' },
    { name: 'Escucha', valor: userData.escucha, total: 15, color: '#9B87F5' }
  ];

  // Animación para el Progress
  const [loadedProgress, setLoadedProgress] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoadedProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Calcular el porcentaje de actividades completadas
  const calcularPorcentaje = (valor, total) => (valor / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-10">
      <div className="container py-4 mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-purple-100 pb-4"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <img 
                src="/lovable-uploads/7015b2c7-f2cd-4d62-83db-08ce6ee70cb1.png" 
                alt="Logo Sentido EME" 
                className="h-10 md:h-12" 
              />
            </div>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-[#6E6EAA] text-center md:text-right">
            Reporte final Equilibrio Elemental
          </h1>
        </motion.div>

        {/* Datos del participante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-4 md:mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2 p-4 md:p-6">
              <CardTitle className="flex items-center text-[#6E6EAA] text-lg md:text-xl">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" /> 
                Datos del participante
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 md:pt-6 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24 md:w-36">Nickname:</span>
                  <Badge variant="outline" className="font-medium text-[#8F82D5] ml-2 px-2 md:px-3 py-0.5 md:py-1">
                    {userData.nickname}
                  </Badge>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24 md:w-36">Fecha de entrega:</span>
                  <span className="text-gray-600">{userData.fecha}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tu experiencia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="mb-4 md:mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2 p-4 md:p-6">
              <CardTitle className="flex items-center text-[#6E6EAA] text-lg md:text-xl">
                <Award className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Tu experiencia en el programa
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 md:pt-6 md:p-6">
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">Días activos:</span>
                  <span className="text-[#8F82D5] font-medium">{userData.diasActivos} / 42</span>
                </div>
                <Progress 
                  value={loadedProgress ? (userData.diasActivos / 42) * 100 : 0} 
                  className="h-2.5 md:h-3 bg-gray-100" 
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                {actividadesData.map((actividad, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        {actividad.name === 'Meditaciones' && <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 text-[#8F82D5]" />}
                        {actividad.name === 'Respiración' && <Wind className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 text-[#55A1CC]" />}
                        {actividad.name === 'Gratitud' && <Heart className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 text-[#6E6EAA]" />}
                        {actividad.name === 'Escucha' && <Ear className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 text-[#9B87F5]" />}
                        <span className="font-medium text-gray-700 text-sm md:text-base">{actividad.name}:</span>
                      </div>
                      <span className="text-gray-600 text-sm md:text-base">{actividad.valor} / {actividad.total}</span>
                    </div>
                    <Progress 
                      value={loadedProgress ? calcularPorcentaje(actividad.valor, actividad.total) : 0} 
                      className="h-2 bg-gray-100"
                      indicatorColor={actividad.color}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8">
                <h4 className="text-[#6E6EAA] font-semibold mb-3 md:mb-4 text-sm md:text-base">Resumen de actividades</h4>
                <div className="h-[180px] md:h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={actividadesData} 
                      layout="vertical" 
                      margin={{ 
                        left: isMobile ? 5 : 20, 
                        right: isMobile ? 5 : 20,
                        top: 5,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis 
                        type="number" 
                        domain={[0, 30]} 
                        fontSize={isMobile ? 10 : 12}
                      />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        width={isMobile ? 80 : 100}
                        fontSize={isMobile ? 10 : 12}
                      />
                      <Tooltip 
                        formatter={(value) => [
                          `${value}/${actividadesData.find(item => item.valor === value)?.total}`, 
                          'Completado'
                        ]} 
                        contentStyle={{ fontSize: isMobile ? '10px' : '12px' }}
                      />
                      <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
                        {actividadesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        <LabelList 
                          dataKey="valor" 
                          position="insideRight" 
                          fill="#fff" 
                          style={{ 
                            fontWeight: 'bold',
                            fontSize: isMobile ? 10 : 12
                          }} 
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Índice EME - Transformación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mb-4 md:mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2 p-4 md:p-6">
              <CardTitle className="flex items-center text-[#6E6EAA] text-lg md:text-xl">
                <ArrowUp className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Transformación y cambios
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 md:pt-6 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-purple-50 rounded-lg p-3 md:p-4 text-center">
                  <p className="text-gray-600 mb-1 md:mb-2 text-xs md:text-sm">Índice inicial</p>
                  <p className="text-xl md:text-2xl font-bold text-[#8F82D5]">{userData.indiceInicial}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 md:p-4 text-center flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full p-1.5 md:p-2 mb-1">
                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-[#55A1CC]">{userData.variacionIndice}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 md:p-4 text-center">
                  <p className="text-gray-600 mb-1 md:mb-2 text-xs md:text-sm">Índice final</p>
                  <p className="text-xl md:text-2xl font-bold text-[#6E6EAA]">{userData.indiceFinal}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabla de estados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="mb-4 md:mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2 p-4 md:p-6">
              <CardTitle className="flex items-center text-[#6E6EAA] text-lg md:text-xl">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Variación en los termómetros de autopercepción
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 md:pt-6 md:p-6">
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[500px] border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600">
                      <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-sm">Estado</th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-center text-xs md:text-sm">Antes</th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-center text-xs md:text-sm">Después</th>
                      <th className="py-2 md:py-3 px-2 md:px-4 text-center text-xs md:text-sm">Variación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.estadosSemana.map((estado, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-xs md:text-sm">{estado.name}</td>
                        <td className="py-2 md:py-3 px-2 md:px-4 text-center text-xs md:text-sm">{estado.antes}/10</td>
                        <td className="py-2 md:py-3 px-2 md:px-4 text-center text-xs md:text-sm">{estado.despues}/10</td>
                        <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                          <Badge className={`text-xs bg-green-100 text-green-700 hover:bg-green-100 ${estado.variacion <= 0 ? 'bg-red-100 text-red-600' : ''}`}>
                            {estado.variacion > 0 ? '+' : ''}{estado.variacion}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 md:mt-8">
                <h4 className="text-[#6E6EAA] font-semibold mb-3 md:mb-4 text-sm md:text-base">Visualización de la evolución</h4>
                <div className="h-[200px] md:h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={userData.estadosSemana}
                      margin={{ 
                        top: 10, 
                        right: isMobile ? 10 : 30, 
                        left: isMobile ? 0 : 0, 
                        bottom: 10 
                      }}
                      barSize={isMobile ? 12 : 20}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        fontSize={isMobile ? 10 : 12}
                        tick={{ angle: isMobile ? -15 : 0 }}
                        tickMargin={isMobile ? 5 : 10}
                        height={isMobile ? 50 : 30}
                      />
                      <YAxis 
                        domain={[0, 10]} 
                        fontSize={isMobile ? 10 : 12}
                      />
                      <Tooltip 
                        contentStyle={{ fontSize: isMobile ? '10px' : '12px' }}
                      />
                      <Bar 
                        dataKey="antes" 
                        name="Antes" 
                        fill="#D1D1E9" 
                        radius={[4, 4, 0, 0]} 
                      />
                      <Bar 
                        dataKey="despues" 
                        name="Después" 
                        fill="#8F82D5" 
                        radius={[4, 4, 0, 0]} 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recomendaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="mb-4 md:mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2 p-4 md:p-6">
              <CardTitle className="flex items-center text-[#6E6EAA] text-lg md:text-xl">
                <Heart className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Reflexión y recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 md:pt-6 md:p-6">
              <ul className="space-y-3 md:space-y-4">
                {[
                  'Sigue practicando para consolidar tu transformación.',
                  'Reflexiona sobre los contenidos que más te impactaron.',
                  'Repite el cuestionario para observar tu evolución.'
                ].map((recomendacion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-2 md:mr-3">
                      <div className="bg-purple-100 text-[#8F82D5] rounded-full p-1 md:p-1.5">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm">{recomendacion}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <footer className="text-center mt-6 md:mt-10">
          <Separator className="mb-4 md:mb-6 bg-purple-100" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#6E6EAA] text-xs md:text-sm">
            <div className="flex items-center">
              <span className="font-medium">Sentido EME</span>
              <span className="mx-2">·</span>
            </div>
            <a href="mailto:hola@sentidoeme.com" className="flex items-center hover:text-[#8F82D5] transition-colors">
              <MailIcon className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              hola@sentidoeme.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
