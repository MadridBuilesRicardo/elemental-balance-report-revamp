
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

const Index = () => {
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
      <div className="container py-6 mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-purple-100 pb-4"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <img src="/sentido_emme_logo.png" alt="Logo Sentido EME" className="h-12" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#6E6EAA] text-center md:text-right">
            Reporte final Equilibrio Elemental
          </h1>
        </motion.div>

        {/* Datos del participante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2">
              <CardTitle className="flex items-center text-[#6E6EAA]">
                <Calendar className="h-5 w-5 mr-2" /> 
                Datos del participante
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-36">Nickname:</span>
                  <Badge variant="outline" className="font-medium text-[#8F82D5] ml-2 px-3 py-1">
                    {userData.nickname}
                  </Badge>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-36">Fecha de entrega:</span>
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
          <Card className="mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2">
              <CardTitle className="flex items-center text-[#6E6EAA]">
                <Award className="h-5 w-5 mr-2" />
                Tu experiencia en el programa
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">Días activos:</span>
                  <span className="text-[#8F82D5] font-medium">{userData.diasActivos} / 42</span>
                </div>
                <Progress 
                  value={loadedProgress ? (userData.diasActivos / 42) * 100 : 0} 
                  className="h-3 bg-gray-100" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {actividadesData.map((actividad, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        {actividad.name === 'Meditaciones' && <CheckCircle className="h-4 w-4 mr-2 text-[#8F82D5]" />}
                        {actividad.name === 'Respiración' && <Wind className="h-4 w-4 mr-2 text-[#55A1CC]" />}
                        {actividad.name === 'Gratitud' && <Heart className="h-4 w-4 mr-2 text-[#6E6EAA]" />}
                        {actividad.name === 'Escucha' && <Ear className="h-4 w-4 mr-2 text-[#9B87F5]" />}
                        <span className="font-medium text-gray-700">{actividad.name}:</span>
                      </div>
                      <span className="text-gray-600">{actividad.valor} / {actividad.total}</span>
                    </div>
                    <Progress 
                      value={loadedProgress ? calcularPorcentaje(actividad.valor, actividad.total) : 0} 
                      className="h-2 bg-gray-100" 
                      indicatorClassName={`bg-[${actividad.color}]`}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-[#6E6EAA] font-semibold mb-4">Resumen de actividades</h4>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={actividadesData} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[0, 30]} />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip formatter={(value) => [`${value}/${actividadesData.find(item => item.valor === value)?.total}`, 'Completado']} />
                    <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
                      {actividadesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                      <LabelList dataKey="valor" position="insideRight" fill="#fff" style={{ fontWeight: 'bold' }} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
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
          <Card className="mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2">
              <CardTitle className="flex items-center text-[#6E6EAA]">
                <ArrowUp className="h-5 w-5 mr-2" />
                Transformación y cambios
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <p className="text-gray-600 mb-2">Índice inicial</p>
                  <p className="text-2xl font-bold text-[#8F82D5]">{userData.indiceInicial}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-full p-2 mb-1">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <p className="text-xl font-bold text-[#55A1CC]">{userData.variacionIndice}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <p className="text-gray-600 mb-2">Índice final</p>
                  <p className="text-2xl font-bold text-[#6E6EAA]">{userData.indiceFinal}</p>
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
          <Card className="mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2">
              <CardTitle className="flex items-center text-[#6E6EAA]">
                <CheckCircle className="h-5 w-5 mr-2" />
                Variación en los termómetros de autopercepción
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600">
                      <th className="py-3 px-4 text-left">Estado</th>
                      <th className="py-3 px-4 text-center">Antes</th>
                      <th className="py-3 px-4 text-center">Después</th>
                      <th className="py-3 px-4 text-center">Variación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.estadosSemana.map((estado, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-medium">{estado.name}</td>
                        <td className="py-3 px-4 text-center">{estado.antes}/10</td>
                        <td className="py-3 px-4 text-center">{estado.despues}/10</td>
                        <td className="py-3 px-4 text-center">
                          <Badge className={`bg-green-100 text-green-700 hover:bg-green-100 ${estado.variacion <= 0 ? 'bg-red-100 text-red-600' : ''}`}>
                            {estado.variacion > 0 ? '+' : ''}{estado.variacion}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h4 className="text-[#6E6EAA] font-semibold mb-4">Visualización de la evolución</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={userData.estadosSemana}
                    margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="antes" name="Antes" fill="#D1D1E9" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="despues" name="Después" fill="#8F82D5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
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
          <Card className="mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 pb-2">
              <CardTitle className="flex items-center text-[#6E6EAA]">
                <Heart className="h-5 w-5 mr-2" />
                Reflexión y recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  'Sigue practicando para consolidar tu transformación.',
                  'Reflexiona sobre los contenidos que más te impactaron.',
                  'Repite el cuestionario para observar tu evolución.'
                ].map((recomendacion, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="bg-purple-100 text-[#8F82D5] rounded-full p-1.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-gray-700">{recomendacion}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <footer className="text-center mt-10">
          <Separator className="mb-6 bg-purple-100" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#6E6EAA]">
            <div className="flex items-center">
              <span className="font-medium">Sentido EME</span>
              <span className="mx-2">·</span>
            </div>
            <a href="mailto:hola@sentidoeme.com" className="flex items-center hover:text-[#8F82D5] transition-colors">
              <MailIcon className="h-4 w-4 mr-1" />
              hola@sentidoeme.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
