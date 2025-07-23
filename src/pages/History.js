import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation

const rawHistoryData = [
  { year: '1977–1978', host: 'S.J. (Govt) Polytechnic', venue: 'Bengaluru' },
  { year: '1978–1979', host: 'K.H.K. (Govt) Polytechnic', venue: 'Hubballi' },
  { year: '1979–1980', host: 'Government Boys’ Polytechnic', venue: 'Mysuru' },
  { year: '1980–1981', host: 'Government Polytechnic', venue: 'Ballari' },
  { year: '1981–1982', host: 'D.O.E.S. (Govt) Polytechnic', venue: 'Mandya' },
  { year: '1982–1983', host: 'Government Polytechnic', venue: 'Belagavi' },
  { year: '1983–1984', host: 'Government Women’s Polytechnic', venue: 'Kalaburagi' },
  { year: '1984–1985', host: 'Government Polytechnic', venue: 'Chikkamagaluru' },
  { year: '1985–1986', host: 'Government Polytechnic', venue: 'Hassan' },
  { year: '1986–1987', host: 'Government Tool‑Room & Training Ctr', venue: 'Bengaluru' },
  { year: '1987–1988', host: 'S.M.E.S. (Govt) Polytechnic', venue: 'Koppal' },
  { year: '1988–1989', host: 'B.M. Govt Polytechnic', venue: 'Davangere' },
  { year: '1989–1990', host: 'Government Polytechnic', venue: 'Mandya' },
  { year: '1990–1991', host: 'A.A.A. (Govt) Polytechnic', venue: 'Mangaluru' },
  { year: '1991–1992', host: 'Government Polytechnic', venue: 'Karwar' },
  { year: '1992–1993', host: 'D.O.E.S. (Govt) Polytechnic', venue: 'Davanagere' },
  { year: '1993–1994', host: 'D.O.E.S. (Govt) Polytechnic', venue: 'Hubballi' },
  { year: '1994–1995', host: 'Government Polytechnic', venue: 'Bhadravathi' },
  { year: '1995–1996', host: 'Karnataka Government Polytechnic', venue: 'Mangaluru' },
  { year: '1996–1997', host: 'Government Polytechnic', venue: 'Udupi' },
  { year: "1997–1998", host: "JSS Women's College", venue: "Mysuru" },
  { year: '1998–1999', host: 'BMS College', venue: 'Bengaluru' },
  { year: '1999–2000', host: 'Government College', venue: 'Gulbarga' },
  { year: '2000–2001', host: 'Government College', venue: 'Belagavi' },
  { year: '2001–2002', host: 'Government College', venue: 'Tumakuru' },
  { year: '2002–2003', host: 'JSS (For) College', venue: 'Mysuru' },
  { year: "2003–2004", host: "GSS Women's College", venue: "Mysuru" },
  { year: "2004–2005", host: "Government Women's College", venue: "Gulbarga" },
  { year: '2005–2006', host: 'Polytechnic College', venue: 'Belagavi' },
  { year: '2006–2007', host: 'BMS College', venue: 'Bengaluru' },
  { year: '2007–2008', host: 'KLE Society', venue: 'Hubballi' },
  { year: '2008–2009', host: 'Acharya College', venue: 'Bengaluru' },
  { year: '2009–2010', host: 'Karnataka Government College', venue: 'Mangaluru' },
  { year: '2010–2011', host: 'DRR College', venue: 'Davangere' },
  { year: '2011–2012', host: 'CB Kore College', venue: 'Chikkodi' },
  { year: '2012–2013', host: 'Sri Devi College', venue: 'Tumakuru' },
  { year: "2013–2014", host: "Government Women's College", venue: "Mangaluru" },       
  { year: '2014-2015', host: 'Chikkaballapur', venue: 'Chikkaballapur' },  
  { year: '2015-2016', host: 'G.P.T. Karkala', venue: 'Udupi' },
  { year: '2016-2017', host: 'GPT Ramanagara', venue: 'Ramanagara' },
  { year: '2017-2018', host: 'Sri Devi Polytechnic', venue: 'Bengaluru' },
  { year: '2018-2019', host: 'L V Polytechnic Hassan ', venue: 'Hassan' },
  { year: '2019-2020', host: 'GPT Bagalkot', venue: 'Bagalkot' },
  { year: '2023-2024', host: 'CPC Government Polytechnic ', venue: 'Mysore' },
  { year: '2024-2025', host: 'Karnataka Government Polytechnic', venue: 'Mangaluru' }
];

// Add IDs
const historyData = rawHistoryData.map((entry, idx) => ({
  id: idx + 1,
  ...entry,
}));

const HistoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 via-60% to-pink-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-cyan-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          45&nbsp;Years of Sports Meets
        </h1>
        <p className="mt-2 text-lg text-cyan-700 font-medium">
          Karnataka State Inter‑Polytechnic Timeline
        </p>
      </header>

      <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-xl p-4 md:p-8">
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-100">
                <th className="px-4 py-3 text-center font-bold text-blue-800">#</th>
                <th className="px-4 py-3 text-left font-bold text-blue-800">Academic Year</th>
                <th className="px-4 py-3 text-left font-bold text-blue-800">Host Polytechnic</th>
                <th className="px-4 py-3 text-left font-bold text-blue-800">Venue</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((row, idx) => (
                <tr
                  key={row.id}
                  className={
                    idx % 2 === 0
                      ? 'bg-blue-50/60 hover:bg-cyan-100 transition'
                      : 'bg-pink-50 hover:bg-bronze-50 transition'
                  }
                >
                  <td className="px-4 py-2 text-center font-semibold text-cyan-700">{row.id}</td>
                  <td className="px-4 py-2 text-blue-900">{row.year}</td>
                  <td className="px-4 py-2 text-pink-700">{row.host}</td>
                  <td className="px-4 py-2 text-blue-700">{row.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  );
};

export default HistoryPage;
