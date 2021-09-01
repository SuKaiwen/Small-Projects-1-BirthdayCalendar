import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyData = [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
];

const Birthday = () => {
    return (
        <div style = {{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <div className = "container" style = {{maxWidth:"500px", width:"80%"}}>
                {dummyData.map((data) =>
                    <div className = "row" style = {{padding:"40px", marginBottom:"15px", border: "1px solid red"}}>
                        <div className = "col-sm">
                            <h2><img src={data.image} alt={data.name} style = {{width:"100px", height:"100px", borderRadius:"50%"}}/></h2>
                        </div>
                        <div className = "col-sm">
                            <h2 class="display-5">{data.name}</h2>
                            <h5 class="lead" style = {{fontSize:"15px"}}>{data.age} years old</h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Birthday;
