import { 
  MdFactory, 
  MdAccountBalance, 
  MdComputer, 
  MdLocalHospital, 
  MdLocalShipping, 
  MdShoppingCart, 
  MdCellTower, 
  MdConstruction, 
  MdSchool, 
  MdLocationCity, 
  MdElectricBolt, 
  MdAgriculture 
} from 'react-icons/md';

export default function Industries() {
  const iconColor = "#1a6fd4";
  const industries = [
    { icon: <MdFactory color={iconColor} />, name: "Manufacturing" },
    { icon: <MdAccountBalance color={iconColor} />, name: "BFSI" },
    { icon: <MdComputer color={iconColor} />, name: "Technology & IT" },
    { icon: <MdLocalHospital color={iconColor} />, name: "Healthcare" },
    { icon: <MdLocalShipping color={iconColor} />, name: "SCM & Logistics" },
    { icon: <MdShoppingCart color={iconColor} />, name: "Ecommerce & Retail" },
    { icon: <MdCellTower color={iconColor} />, name: "Telecom" },
    { icon: <MdConstruction color={iconColor} />, name: "Infrastructure" },
    { icon: <MdSchool color={iconColor} />, name: "Education" },
    { icon: <MdLocationCity color={iconColor} />, name: "Construction" },
    { icon: <MdElectricBolt color={iconColor} />, name: "Energy & Utilities" },
    { icon: <MdAgriculture color={iconColor} />, name: "Agriculture" }
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <p className="section-tag">Sector Expertise</p>
        <h2 className="section-title">Staffing Solutions Across Every Industry</h2>
        <p className="section-sub">CHN brings deep domain knowledge and pre-qualified talent pools across 15+ sectors — from manufacturing and BFSI to healthcare and technology.</p>
        <div className="ind-grid">
          {industries.map((industry, index) => (
            <div key={index} className="ind-card">
              <div className="ind-icon">{industry.icon}</div>
              {industry.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
