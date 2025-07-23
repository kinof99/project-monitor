import { useState } from "react";

const initialProjects = [
  {
    name: "雅鲁藏布江水电站",
    location: "西藏墨脱",
    investment: "120000",
    industry: "水电、基建",
    stage: "已开工",
    date: "2025-07-19",
    stocks: "中国电建、华新水泥、高争民爆、五新隧装"
  },
  {
    name: "成渝中线高铁",
    location: "四川-重庆",
    investment: "3250",
    industry: "铁路基建",
    stage: "总包单位中标",
    date: "2025-08-10",
    stocks: "中铁工业、四川路桥、成都路桥"
  },
  {
    name: "粤港澳大湾区超高压输变电工程",
    location: "广东",
    investment: "2800",
    industry: "特高压电网",
    stage: "设备招标阶段",
    date: "2025-08-20",
    stocks: "特变电工、许继电气、平高电气"
  },
  {
    name: "海南天然气管网三期",
    location: "海南",
    investment: "870",
    industry: "油气管道",
    stage: "环评公示中",
    date: "2025-09-01",
    stocks: "海油工程、中油工程、山东墨龙"
  }
];

export default function App() {
  const [filter, setFilter] = useState("");
  const [projects, setProjects] = useState(initialProjects);

  const filteredProjects = projects.filter(
    (p) => p.name.includes(filter) || p.location.includes(filter) || p.industry.includes(filter)
  );

  const handleRefresh = () => {
    setProjects([...initialProjects]);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        重大工程关键节点监控
      </h1>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="搜索项目名、地区或行业..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={handleRefresh} style={{ padding: "0.5rem 1rem" }}>刷新</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>项目名</th>
              <th>所在地</th>
              <th>投资额（亿元）</th>
              <th>所属行业</th>
              <th>当前阶段</th>
              <th>关键时间节点</th>
              <th>预期受益股</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((p, idx) => (
              <tr key={idx}>
                <td>{p.name}</td>
                <td>{p.location}</td>
                <td>{p.investment}</td>
                <td>{p.industry}</td>
                <td>{p.stage}</td>
                <td>{p.date}</td>
                <td>{p.stocks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
