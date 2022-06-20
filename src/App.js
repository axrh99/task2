import './App.css';
import Records from './records.json'
import me from './me.jpeg'

function App() {
  return (
    <div className="App"> 
      <strong className="CV">CV</strong><br/>
      
      <br></br>
      <div className="App">
      <img src={me} width="230" height="300" alt="Axel Ramirez"/>
      <br/>
      <br/>
      <br/>
      </div>
      {
        Records && Records.map(record => {
          return(
            <div key={record.id}>
              <div className="contain">
              <strong>{record.title1}</strong><br/>
              {record.Name}<br/>
              {record.Summary}<br/>
              {record.Degree}
              </div>
              
              <div className="textedu">
              <strong>{record.title2}</strong><br/>
              {record.Bachelor}<br/>
              {record.HighSchool}
              </div>

              <div className="textwork">
              <strong>{record.title3}</strong><br/>
              {record.Company}<br/>
              {record.WorkExperience}
              </div>

              <div className="textproject">
              <strong>{record.title4}</strong>
              {record.Projects && record.Projects.map(data =>{
                return(
                  <div key={record.id}>
                    {data.project1}<br/>
                    {data.project2}<br/>
                    {data.project3}<br/>
                    {data.project4}<br/>
                  </div>
                )
              })}
              </div>
              <div className="textdiplomas">
              <strong>{record.title5}</strong>
              {record.Diplomas && record.Diplomas.map(data =>{
                return(
                  <div key={record.id}>
                    {data.diploma1}<br/>
                    {data.diploma2}<br/>
                    {data.diploma3}
                  </div>
                )
              })}
              </div>

              <div className="textskills">
              <strong>{record.title6}</strong>
              {record.Skills && record.Skills.map(data =>{
                return(
                  <div key={record.id}>
                    {data.skill1}<br/>
                    {data.skill2}<br/>
                    {data.skill3}<br/>
                    {data.skill4}
                  </div>
                )
              })}
              </div>

              <div className="textcontact">
              <strong>{record.title7}</strong><br/>
              {record.email}<br/>
              {record.address}
              </div>
              <br/>
              <br/>
              <br/>
            </div>
          );
        })
      }

    </div>
  );
}

export default App;
