import React, { useRef } from "react";

const DesplazarceAUnElementoRef = () => {
  const refSubaru1 = useRef(null);
  const refSubaru2 = useRef(null);
  const refSubaru3 = useRef(null);

  const clickSubaru1 = () => {
      refSubaru1.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
  }



  const clickSubaru2 = () => {
    refSubaru2.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  const clickSubaru3 = () => {
    refSubaru3.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
    <div>
      <h1>Desplazarce a un Elemento</h1>
      <div>
        <button onClick={clickSubaru1}>
          Subaru 1
        </button>
        <button onClick={clickSubaru2}>
          Subaru 2
        </button>
        <button onClick={clickSubaru3}>
          Subaru 3
        </button>
      </div>

     <div style={{listStyle:'none', display:'flex' }}>
     <ul style={{listStyle:'none', display:'flex'}}>
        <li>
          <img
            src="https://i.pinimg.com/originals/2a/c3/5e/2ac35edfa793b9fcb3039e3f8d7314b9.jpg"
            alt="STI2018"
            width='300px'
            ref={refSubaru1}
          />
        </li>
        <li>
          <img
            ref={refSubaru2}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tc_c70TB4arN07GsARF7k79jeYgSQmjgdSOrzfw5Zf4c7iVcNE2-1F-PPUzXLRvaxcs&usqp=CAU"
            alt="Hatchback"
          />
        </li>
        <li>
          <img
            ref={refSubaru3}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBTqR8ldNlK-yHClqQ3CQC4TEHEGRNn0nlNvwsbdvKF6akpNgbSEH9gC8ECaPFa67yqE&usqp=CAU"
            alt="22B/GC8"
          />
        </li>
      </ul>
     </div>
    </div>
  );
};

export default DesplazarceAUnElementoRef;
