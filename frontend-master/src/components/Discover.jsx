import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  listStyle: "none",
  margin: 5,
  paddingLeft: 0,
  minWidth: 240,
};

const Discover = () => {
    
    const result = [
        {
            id: 1,
            name: '1',
            productCode: 1,
            value: 100,
            vendor: 'abs',
            description: 'ggfghjgfghjk'
        }
    ]

  return (
    <div className="latestdeals container my-5">
      <h1>All Products</h1>
      <div className="hotcards">
        <div className="colcard">
          {result.map((item) => (
            <div key={item.productCode} style={cardStyle}>
              <Link to={`/itemDetail/${item.productCode}/${item.value}/${item.vendor}`}>
                <div>
                  name={item.vendor}
                  title={item.description}
                  price={item.value}
                </div>
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover