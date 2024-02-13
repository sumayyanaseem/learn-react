function Details({profession,awards,discovered}){
  return (
         <ul>
            <li>
              <b>Profession: </b>
              {profession}
            </li>
            <li>
              <b>Awards: </b>
              {awards}
            </li>
            <li>
              <b>Discovered: </b>
              {discovered}
            </li>
          </ul>

          )

        }


     function Profile({scientist,size=100}){
      return (
        <section className="profile">
        <h2>{scientist.name}</h2>
        <img
          className="avatar"
          src={'https://i.imgur.com/'+scientist.ImageId+'.jpg'}
                    alt={scientist.name}
                    width={size}
                    height={size}
        />
       <Details profession={scientist.profession}
           awards={scientist.awards}
           discovered={scientist.discovered}/>
         </section>
     )
   }

   export default function Gallery() {
     return (
       <div>
         <h1>Notable Scientists</h1>
         <Profile scientist={{name:'Maria Skłodowska-Curie',ImageId:'szV5sdGs',awards:'4 Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',profession:' physicist and chemist',discovered:'polonium (element)'}}
         size={70}
         />
         <Profile scientist={{name:'Katsuko Saruhashi',ImageId:'YfeOqp2s',awards:'2 Miyake Prize for geochemistry, Tanaka Prize',profession:'geochemist',discovered:'a method for measuring carbon dioxide in seawater'}}
         size={70}
         />
    </div>
  );
}
