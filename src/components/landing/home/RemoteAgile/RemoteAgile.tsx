import { Button } from "@mui/material";

export const RemoteAgile = () => {
  return (
    <>
      <div style={{ padding: "30px" }}>
        <div style={{ display: "flex", columnGap: "20px" }}>
          <div>
            <h1>
              The Convenience of Offshoring is the Flexibility of Remote Agile.
            </h1>
          </div>
          <div>
            <p>
              Collaborate with a passionate team of designers, developers, and
              strategists to stand-out from the crowd and shine brighter.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", columnGap: "10px" }}>
          <div>
            <h5 style={{color:'rgb(23 , 96 , 128 )'}}>EXPERIENCES</h5>
            <h2>Agile Mindset</h2>
            <p>
              Agile is not a principal or a method, but it’s an integral part of
              being Agile that is guided by principles, defined by values and
              manifested through various practices.
            </p>
            <Button style={{backgroundColor:'rgb(23 , 96 , 128 )', color:'white'}}>DISCOVER</Button>
          </div>
          <div>
            <h5 style={{color:'rgb(23 , 96 , 128 )'}}>IMPORTANCE</h5>
            <h2>Bacancy Values</h2>
            <p>
              You add value to your customer when you deliver a product or
              service (and the associated brand experience) that has been
              designed specifically to solve their problem.
            </p>
            <Button style={{backgroundColor:'rgb(23 , 96 , 128 )', color:'white'}}>DISCOVER</Button>
          </div>
          <div>
            <h5 style={{color:'rgb(23 , 96 , 128 )'}}>MINDSET</h5>
            <h2>Bacancy Cultures</h2>
            <p>
              Core Team will work as Scrum Team where Team will have quarterly
              goal to make sure that we run financial, administrative and
              project management prospective.
            </p>
            <Button style={{backgroundColor:'rgb(23 , 96 , 128 )', color:'white'}}>DISCOVER</Button>
          </div>
        </div>
      </div>
    </>
  );
};
