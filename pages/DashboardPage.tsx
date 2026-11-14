
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { STATS_DATA_2025, STATS_DATA_2026, STATS_DATA_2027 } from '../constants';

const DashboardPage: React.FC = () => {
    const { language } = useContext(AppContext);
    const [year, setYear] = useState<'2025' | '2026' | '2027'>('2027');

    const dataMap = {
        '2025': STATS_DATA_2025,
        '2026': STATS_DATA_2026,
        '2027': STATS_DATA_2027,
    };

    const currentData = dataMap[year];
    const combinedData = STATS_DATA_2025.map((d, i) => ({
        name: d.name,
        '2025': d.value,
        '2026': STATS_DATA_2026[i].value,
        '2027': STATS_DATA_2027[i].value,
    }));

    const COLORS = ['#1A4D8F', '#00A896', '#FFC658', '#FF8042', '#8884d8'];

    const content = {
        title: { en: 'Statistics Dashboard', ar: 'لوحة المؤشرات الإحصائية' },
        subtitle: { en: 'Visualizing our journey towards a healthier Salalah, year by year.', ar: 'تصور رحلتنا نحو صلالة أكثر صحة، عامًا بعد عام.' },
        selectYear: { en: 'Select Year', ar: 'اختر السنة' },
        annualPerformance: { en: 'Annual Performance by Axis', ar: 'الأداء السنوي حسب المحور' },
        yearlyComparison: { en: 'Yearly Comparison', ar: 'مقارنة سنوية' }
    };

    return (
        <div className="py-12 sm:py-16 bg-health-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold font-heading text-health-blue tracking-tight sm:text-5xl">
                        {content.title[language]}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        {content.subtitle[language]}
                    </p>
                </div>
                
                <div className="flex justify-center mb-8">
                    <div className="bg-white p-2 rounded-lg shadow-md flex space-x-2 rtl:space-x-reverse">
                        {(['2025', '2026', '2027'] as const).map((y) => (
                            <button
                                key={y}
                                onClick={() => setYear(y)}
                                className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${year === y ? 'bg-health-blue text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                            >
                                {content.selectYear[language]} {y}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold font-heading mb-4">{content.annualPerformance[language]} - {year}</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={currentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#1A4D8F" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold font-heading mb-4">{content.annualPerformance[language]} - {year}</h3>
                         <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={currentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                {
                                    currentData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold font-heading mb-4">{content.yearlyComparison[language]}</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={combinedData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="2025" stroke="#8884d8" />
                            <Line type="monotone" dataKey="2026" stroke="#00A896" />
                            <Line type="monotone" dataKey="2027" stroke="#1A4D8F" activeDot={{ r: 8 }}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
