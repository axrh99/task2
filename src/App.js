import './App.css';
import me from './me.jpeg'
import React, {useState, useEffect} from "react";

function App(){
    useEffect( () => {
      fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
      const data = await fetch('http://localhost:4000/');
      const items = await data.json();
      setItems(items);
  };

  return(
        <div className='App'>
          <h1 className='CV'>CV</h1>
          <img src={me} width="230" height="300" alt="Axel Ramirez"/>
          <br/>
          <br/>
          <br/>
          {    
          items && items.map(item => {
            return(
            <div>
              <div>
              <strong>{item.title1}</strong><br/>
              {item.Name}<br/>
              {item.Summary}<br/>
              {item.Degree}
              </div>

              <div className="textedu">
              <strong>{item.title2}</strong><br/>
              {item.Bachelor}<br/>
              {item.HighSchool}<br/>
              </div>

              <div className="textwork">
              <strong>{item.title3}</strong><br/>
              {item.Company}<br/>
              {item.WorkExperience}
              </div>

              <div className="textproject">
              <strong>{item.title4}</strong>
              {item.Projects && item.Projects.map(data =>{
                return(
                  <div key={item.id}>
                    {data.project1}<br/>
                    {data.project2}<br/>
                    {data.project3}<br/>
                    {data.project4}<br/>
                  </div>
                )
              })}

              </div>
              <div className="textdiplomas">
              <strong>{item.title5}</strong>
              {item.Diplomas && item.Diplomas.map(data =>{
                return(
                  <div key={item.id}>
                    {data.diploma1}<br/>
                    {data.diploma2}<br/>
                    {data.diploma3}
                  </div>
                )
              })}
              </div>

              <div className="textskills">
              <strong>{item.title6}</strong>
              {item.Skills && item.Skills.map(data =>{
                return(
                  <div key={item.id}>
                    {data.skill1}<br/>
                    {data.skill2}<br/>
                    {data.skill3}<br/>
                    {data.skill4}
                  </div>
                )
              })}
              </div>

              <div className="textcontact">
              <strong>{item.title7}</strong><br/>
              {item.email}<br/>
              {item.address}
              <br/>
              <br/>
              <br/>

              </div>
              
              </div>
    
            );
          })
          }
        </div>
  );


}

export default App;
