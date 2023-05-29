import {Sector,Cell,PieChart,Pie,AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,Area, BarChart, Bar} from "recharts";
import React, { PureComponent } from 'react';

const lines = [
              {"name":"US Import","year":"1999",
              "value-total":41825.0,
              "value-live-meat":1190.6,
              "value-meat":3260.5,
              "value-fish-shellfish":8914.4,
              "value-dairy":931.4,
              "value-vegetable":3631.8,
              "value-fruit":4827.4,
              "value-nuts":833.3,
              "value-coffee-tea-spice":3605.9,
              "value-grains":2755.6,
              "value-vegetable-oil":1518.7,
              "value-sugar-candy":1661.9,
              "value-cocoa-chocolate":1523.1,
              "value-other":2737.1,
              "value-beverages":4433.3},

              {"name":"US Import","year":"2002",
              "value-total":47205.1,
              "value-live-meat":1725.2,
              "value-meat":4283.5,
              "value-fish-shellfish":10000.9,
              "value-dairy":1013.9,
              "value-vegetable":4397.7,
              "value-fruit":5138.8,
              "value-nuts":740.0,
              "value-coffee-tea-spice":2457.8,
              "value-grains":3477.4,
              "value-vegetable-oil":1301.7,
              "value-sugar-candy":1928.1,
              "value-cocoa-chocolate":1761.9,
              "value-other":3160.6,
              "value-beverages":5817.6},

              {"name":"US Import","year":"2005",
              "value-total":65311.7,
              "value-live-meat":1673.3,
              "value-meat":5752.0,
              "value-fish-shellfish":11876.4,
              "value-dairy":1404.5,
              "value-vegetable":6044.3,
              "value-fruit":7003.6,
              "value-nuts":1122.1,
              "value-coffee-tea-spice":3775.7,
              "value-grains":4412.2,
              "value-vegetable-oil":2362.6,
              "value-sugar-candy":2579.4,
              "value-cocoa-chocolate":2751.2,
              "value-other":6643.2,
              "value-beverages":7911.2},

              {"name":"US Import","year":"2008",
              "value-total":85752.1,
              "value-live-meat":2277.1,
              "value-meat":5059.8,
              "value-fish-shellfish":13950.5,
              "value-dairy":1622.5,
              "value-vegetable":7798.4,
              "value-fruit":10064.7,
              "value-nuts":1358.3,
              "value-coffee-tea-spice":5580.8,
              "value-grains":7902.3,
              "value-vegetable-oil":5694.6,
              "value-sugar-candy":3108.1,
              "value-cocoa-chocolate":3299.2,
              "value-other":8176.2,
              "value-beverages":9859.6},

              {"name":"US Import","year":"2011",
              "value-total":104482.8,
              "value-live-meat":1893.3,
              "value-meat":5755.3,
              "value-fish-shellfish":16509.3,
              "value-dairy":1524.5,
              "value-vegetable":9645.4,
              "value-fruit":12158.6,
              "value-nuts":1881.6,
              "value-coffee-tea-spice":9715.8,
              "value-grains":8303.7,
              "value-vegetable-oil":6793.6,
              "value-sugar-candy":5305.0,
              "value-cocoa-chocolate":4681.0,
              "value-other":10141.6,
              "value-beverages":10174.1},

              {"name":"US Import","year":"2014",
              "value-total":121825.0,
              "value-live-meat":3009.9,
              "value-meat":8940.3,
              "value-fish-shellfish":20363.3,
              "value-dairy":1871.6,
              "value-vegetable":10880.9,
              "value-fruit":14807.7,
              "value-nuts":2370.0,
              "value-coffee-tea-spice":8298.8,
              "value-grains":10363.7,
              "value-vegetable-oil":7336.6,
              "value-sugar-candy":4705.4,
              "value-cocoa-chocolate":4728.6,
              "value-other":12134.5,
              "value-beverages":12013.7},

              {"name":"US Import","year":"2017",
              "value-total":132511.3,
              "value-live-meat":2016.3,
              "value-meat":8875.2,
              "value-fish-shellfish":21924.9,
              "value-dairy":1876.9,
              "value-vegetable":12670.5,
              "value-fruit":18384.6,
              "value-nuts":3312.2,
              "value-coffee-tea-spice":9066.7,
              "value-grains":11257.6,
              "value-vegetable-oil":7216.0,
              "value-sugar-candy":4807.5,
              "value-cocoa-chocolate":5012.6,
              "value-other":10871.7,
              "value-beverages":15218.6},

              {"name":"US Import","year":"2020",
              "value-total":147631.0,
              "value-live-meat":2158.1,
              "value-meat":10384.6,
              "value-fish-shellfish":21832.2,
              "value-dairy":2140.8,
              "value-vegetable":15590.3,
              "value-fruit":20492.1,
              "value-nuts":2786.1,
              "value-coffee-tea-spice":8346.2,
              "value-grains":13924.5,
              "value-vegetable-oil":6682.1,
              "value-sugar-candy":5318.3,
              "value-cocoa-chocolate":5052.4,
              "value-other":16554.4,
              "value-beverages":16368.9},

              {"name":"US Import","year":"2022",
              "value-total":199835.8,
              "value-live-meat":2509.6,
              "value-meat":14055.4,
              "value-fish-shellfish":30525.5,
              "value-dairy":2721.4,
              "value-vegetable":15754.3,
              "value-fruit":27083.8,
              "value-nuts":2944.8,
              "value-coffee-tea-spice":12980.6,
              "value-grains":19470.0,
              "value-vegetable-oil":12850.8,
              "value-sugar-candy":7074.8,
              "value-cocoa-chocolate":6055.5,
              "value-other":29732.8,
              "value-beverages":16076.5},
              
];


const totalporc = ((199835.8-41825.0)/41825.0)*100;
const livemeatporc = ((2509.6-1190.6)/1190.6)*100;//s2 110
const meatporc = ((14055.4-3260.5)/3260.5)*100;
const fishporc = ((30525.5-8914.4)/8914.4)*100;
const dairyporc = ((2721.4-931.4)/931.4)*100;//s3 192
const vegetableporc = ((15754.3-3631.8)/3631.8)*100;
const fruitporc = ((27083.8-4827.4)/4827.4)*100;
const nutsporc = ((2944.8-833.3)/833.3)*100;
const coffeeporc = ((12980.6-3605.9)/3605.9)*100;
const grainsporc = ((19470.0-2755.6)/2755.6)*100;//3 606
const vegetableoilporc = ((12850.8-1518.7)/1518.7)*100;//2 746
const sugarporc = ((7074.8-1661.9)/1661.9)*100;
const cocoaporc = ((6055.5-1523.1)/1523.1)*100;
const otherporc = ((29732.8-2737.1)/2737.1)*100;//1 98628
const beveragesporc = ((6076.5-4433.3)/4433.3)*100;//s1 37

const porcarray = [totalporc,livemeatporc,meatporc,fishporc,dairyporc,vegetableporc,fruitporc,
  nutsporc,coffeeporc,grainsporc,vegetableoilporc,sugarporc,cocoaporc,otherporc,beveragesporc];

  

  porcarray.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
  });


const porcentages = [
  {
    "name":"Total",
    "total": totalporc
  },
    {"other":otherporc,
     "name":"Other"
    },
    {"vegetOil":vegetableoilporc,
     "name":"VegetOil"},

    {"grains":grainsporc,
     "name":"Grains"},

    {"dairy":dairyporc,
     "name":"Dairy"},

     {"liveMeat":livemeatporc,
      "name":"LiveMeat"},

      {"beverages":beveragesporc,
     "name":"Beverage"},
];



console.log(porcarray);

const animalporc = ((49811.9-14296.9)/14296.9)*100;
const plantporc = ((133947.4-23094.8)/23094.8)*100;

const animalplant = [
  {
    "name":"Animals",
    "value": animalporc,
  },
  {
    "name":"Plants",
    "value":plantporc,
  } 
   ];

const colors = ["#6495ED","#191970"];
                
const AreaTotal = () =>{
  
  return(

    <>
    <div class="container-graph">
      <h2 class="title-graph">Value of Food Import in $ Millions</h2>
      
        <AreaChart 
          width={800} 
          height={400} 
          data={lines}
          margin={{
            top: 10,
            right: 0,
            left: 60,
            bottom: 0,
          }}>
            <CartesianGrid strokeDasharray="10"/>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip/>
            <Area type="monotone" dataKey="value-total" stroke="#00FFFF" fill="#00BFFF"/>
        </AreaChart>
      </div>
      
    
    
    <div class="container-graph">
      <h2 class="title-graph">Categories Value in Millions $ </h2>
        <LineChart
          width={800}
          height={400}
          data={lines}
          margin={{
            top:10,
            bottom:0,
            left:60,
            right:0,
          }}
        >
          <CartesianGrid stroke="#ccc"/>
          <XAxis dataKey="year"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="value-live-meat" stroke="#008000" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-meat" stroke="#ff0000" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-fish-shellfish" stroke="#6A5ACD" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-dairy" stroke="#191970" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-vegetable" stroke="#6495ED" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-fruit" stroke="#00BFFF" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-nuts" stroke="#4682B4" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-coffee-tea-spice" stroke="#00FFFF" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-grains" stroke="#40E0D0" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-vegetable-oil" stroke="#00FA9A" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-sugar-candy" stroke="#00FF7F" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-cocoa-chocolate" stroke="#98FB98" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-other" stroke="#3CB371" strokeWidth={3}/>
          <Line type="monotone" dataKey="value-beverages" stroke="#006400" strokeWidth={3}/>
      
        </LineChart>
    </div>

    <div class="container-graph">
      <h2 class="title-graph">% of Growth for Category 3 biggest and 3 smallest in the last 23 years </h2>
        <BarChart
          width={800} 
          height={400} 
          data={porcentages}
          barSize={1000}
          margin={{
            top:10,
            bottom:0,
            left:60,
            right:0,
          }}   
        >
          <CartesianGrid stroke="#ccc"/>
          <XAxis dataKey="name" scale= "auto"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="total" fill="#000" />
          <Bar dataKey="other" fill="#4169E1" />
          <Bar dataKey="vegetOil" fill="#6959CD" />
          <Bar dataKey="grains" fill="#836FFF"  />
          <Bar dataKey="dairy" fill="#00FFFF"  />
          <Bar dataKey="beverages" fill="#0000FF" />
          <Bar dataKey="liveMeat" fill="#00BFFF" />
      
        </BarChart>
    </div>  

      <div class="container-graph">
        <h2 class="title-graph"> Porcentage of Growth in between Animal e Plant<br></br>
            (Plant is the Dark Blue and Animal the Light Blue)
            </h2>
          <PieChart 
              width={800} 
              height={400}
              margin={{
                top:10,
                bottom:0,
                left:360,
                right:0,
              }}>
          
            <Pie
              data={animalplant}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"  
            >
              
              {animalplant.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>

          </PieChart>
     </div>  
    </>
  );

};
  
export default AreaTotal;

 
