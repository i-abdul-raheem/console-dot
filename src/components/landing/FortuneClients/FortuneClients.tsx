export const FortuneClients = () => {
  return (
    <>
       
      <div style={{backgroundColor:'whitesmoke',display:'flex', flexDirection:'column', padding:'100px'}}>
        <div>
          <h2>Fortune-500 Clients</h2>
        </div>
        <div style={{fontSize:"30px", marginBottom:'50px'}}>
          <span >
            The path to empower startups and serial entrepreneurs with
            360°actions start here. We are trusted by the world’s greatest
            leaders since 2011.
          </span>

        </div>
        <div>
            <button type="button">CLIENTELE</button>
        </div>
      </div>


      <div style={{display:'flex', width:'100%', justifyContent:'center', padding:'50px'}}>
      <div style={{width:"100%" , borderRight:"1px solid #696969",height:"350px"}}>
          <div style={{justifyContent:"center"}}><h1>Americas</h1></div>
      </div>
      <div style={{width:"100%",borderRight:"1px solid #696969",height:"350px"}}>
          <div style={{justifyContent:"center"}} > <h1>EMEA</h1> </div>
      </div>
      <div style={{width:"100%",borderRight:"1px solid #696969",height:"350px"}}>
          <div><h1>APAC</h1></div>
      </div>
      </div>

    </>
  );
};
