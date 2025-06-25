import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);


export default function Charts({ graficos: {elevation, dificultad, terreno } }) {
  // Línea: Elevación
  const lineData = {
    labels: ['0km', '5km', '10km', '15km', '20km', '25km', '30km'],
    datasets: [
      {
        label: 'Elevación',
        data: elevation,
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.4,
      },
    ],
  };

  // Barras: Dificultad por tramo
  const barData = {
    labels: ['Tramo 1', 'Tramo 2', 'Tramo 3'],
    datasets: [
      {
        label: 'Nivel',
        data: dificultad,
        backgroundColor: ['#60a5fa', '#3b82f6', '#2563eb'],
      },
    ],
  };

  // Torta: Tipo de terreno
  const pieData = {
    labels: ['Pavimento', 'Grava', 'Sendero'],
    datasets: [
      {
        data: terreno,
        backgroundColor: ['#22c55e', '#facc15', '#f87171'],
      },
    ],
  };

  return (
    <div className="space-y-12 mt-12">
      <div>
        <h3 className="text-lg font-semibold mb-2">Elevation Profile</h3>
        <Line data={lineData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Dificultad por tramo</h3>
          <Bar data={barData} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Tipo de terreno</h3>
          <Doughnut data={pieData} />
        </div>
      </div>
    </div>
  );
}
