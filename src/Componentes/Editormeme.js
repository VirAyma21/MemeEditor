import html2canvas from 'html2canvas'; 
import '../Editormeme.css';
import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import InputColor from 'react-input-color';




const Editormeme = () =>{
    const [meme, setMeme] = useState([]);
    const [imagen, setImagen] = useState('');
    const [texto, setTexto] = useState();
    const [textoDos, setTextoDos] = useState();
    const [textoTres, setTextoTres] = useState();
    const [textoCuatro, setTextoCuatro] = useState();
    const [colorDos, setColorDos] = useState({});
    const [tamañoTexto, setTamañoTexto] = useState('Normal');
    const [fuente, setFuente] = useState('Anton');

    let horizontal = 0;
    let vertical = 0;
    let inputDataId = '';
    
   const elegirImg= (e)=>{
    setImagen(meme[e.target.value]);
     
    }
    const elegitTamaño = (e)=> {
        setTamañoTexto(e.target.value);
    }
    const elegirFuentes =(e) => {
        const letra = document.getElementById('texto');
        const letra2 = document.getElementById('textodos');
        const letra3 = document.getElementById('textoTres');
        const letra4 = document.getElementById('textoCuatro');

        setFuente(e.target.value);
        switch (e.target.value) {
            case 'Anton':
                letra.style.fontFamily="'Anton', sans-serif";
                letra2.style.fontFamily ="'Anton', sans-serif";
                letra3.style.fontFamily ="'Anton', sans-serif";
                letra4.style.fontFamily ="'Anton', sans-serif";
                break;
            case 'Josefin Sans':
                letra.style.fontFamily="'Josefin Sans', sans-serif";
                letra2.style.fontFamily="'Josefin Sans', sans-serif";
                letra3.style.fontFamily="'Josefin Sans', sans-serif";
                letra4.style.fontFamily="'Josefin Sans', sans-serif";
                break;
            case 'Comic Neue':
                letra.style.fontFamily="'Comic Neue', cursive";
                letra2.style.fontFamily="'Comic Neue', cursive";
                letra3.style.fontFamily="'Comic Neue', cursive";
                letra4.style.fontFamily="'Comic Neue', cursive";
                break;
            case 'Black Han Sans':
                letra.style.fontFamily="'Black Han Sans', sans-serif";
                letra2.style.fontFamily="'Black Han Sans', sans-serif";
                letra3.style.fontFamily="'Black Han Sans', sans-serif";
                letra4.style.fontFamily="'Black Han Sans', sans-serif";
                break;
            default:
                break;
        }
    }

    const textomeme = (e) =>{
        setTexto(e.target.value);
        
    }
    const textomemeDos = (e) =>{
        setTextoDos(e.target.value);
        
    }
    const textomemeTres = (e) =>{
        setTextoTres(e.target.value);
        
    }
    const textomemeCuatro = (e) =>{
        setTextoCuatro(e.target.value);
        
    }

    $("#inputUno").on("click", function(e) {
        inputDataId = '1';
    })

    $("#inputDos").on("click", function(e) {
        inputDataId = '2';
    })   
    $("#inputTres").on("click", function(e) {
        inputDataId = '3';
    })   
    $("#inputCuatro").on("click", function(e) {
        inputDataId = '4';
    })   


    $("#izquierda").on("click", function(e) {
        switch (inputDataId) {
            case '1':
                const bloque=document.getElementById("texto");
                horizontal = horizontal -15;
                bloque.style.left= `${horizontal}px`
                break;
            case '2':
                const bloque2=document.getElementById("textodos");
                horizontal = horizontal -15;
                bloque2.style.left= `${horizontal}px`
                break;
            case '3':
                const bloque3=document.getElementById("textoTres");
                horizontal = horizontal -15;
                bloque3.style.left= `${horizontal}px`
                break;   
            case '4':
                const bloque4=document.getElementById("textoCuatro");
                horizontal = horizontal -15;
                bloque4.style.left= `${horizontal}px`
                break;   
            default:
                break;
        }
    })

    $("#derecha").on("click", function(e) {
        switch (inputDataId) {
            case '1':
                const bloque=document.getElementById("texto");
                horizontal = horizontal +15;
                bloque.style.left= `${horizontal}px`
                break;
            case '2':
                const bloque2=document.getElementById("textodos");
                horizontal = horizontal +15;
                bloque2.style.left=`${horizontal}px`
                break;
            case '3':
                const bloque3=document.getElementById("textoTres");
                horizontal = horizontal +15;
                bloque3.style.left=`${horizontal}px`
                break;   
            case '4':
                const bloque4=document.getElementById("textoCuatro");
                horizontal = horizontal +15;
                bloque4.style.left=`${horizontal}px`
                break;       
            default:
                break;
        }
    })
    $("#arriba").on("click", function(e) {
        switch (inputDataId) {
            case '1':
                const bloque=document.getElementById("texto");
                vertical = vertical -15;
                bloque.style.top= `${vertical}px`
                break;
            case '2':
                const bloque2=document.getElementById("textodos");
                vertical = vertical -15;
                bloque2.style.top= `${vertical}px`
                break;
            case '3':
                const bloque3=document.getElementById("textoTres");
                vertical = vertical -15;
                bloque3.style.top= `${vertical}px`
                break;   
            case '4':
                const bloque4=document.getElementById("textoCuatro");
                vertical = vertical -15;
                bloque4.style.top= `${vertical}px`
                break;       
            default:
                break;
        }
    })

    $("#abajo").on("click", function(e) {
        switch (inputDataId) {
            case '1':
                const bloque=document.getElementById("texto");
                vertical = vertical +15;
                bloque.style.top= `${vertical}px`
                break;
            case '2':
                const bloque2=document.getElementById("textodos");
                vertical = vertical +15;
                bloque2.style.top= `${vertical}px`
                break;
            case '3':
                const bloque3=document.getElementById("textoTres");
                vertical = vertical +15;
                bloque3.style.top= `${vertical}px`
                break;   
            case '4':
                const bloque4=document.getElementById("textoCuatro");
                vertical = vertical +15;
                bloque4.style.top= `${vertical}px`
                break;       
            default:
                break;
        }
    })

    
    
    
    const descargar = (e) =>{
        html2canvas(document.querySelector('#meme'), { allowTaint: true, useCORS: true, width: 400})
        .then(function (canvas) {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });
};
    
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(x => x.json())
            .then(response => {
                setMeme(response.data.memes)
                setImagen(response.data.memes[0])
            })

        
            .catch(err => console.error(err)); 
    }, []);
return(
        <div className="text-center">
         
             <h1 className="mt-3 mb-3 text-center" >Editor de Memes</h1>
             <h3 className="mt-3 mb-3 text-center">elegí un meme</h3>
                <select id="qwe" defaultValue='0' onChange={elegirImg} className="form-select form-select-lg mb-3 w-50 m-auto" arial-label=".form-select-lg example" name ="img" >{
                    meme.map((op, index, arr) =>
                    <option value={index}>{op.name}</option>) }
                </select>
            <div className='principal'>
                <div className='contenedor'>
                    <div className='contenedorInputs'>
                        <h5 className="mt-3 mb-3 text-center">Ingresa el texto </h5>
                            <input id='inputUno' onChange={textomeme} className="form-control w-100 m-auto d-block" type="text" name="memetexto" maxLength={80} placeholder="Frase uno" arial-label="default input example"></input>
                            <input id='inputDos' onChange={textomemeDos} className="form-control w-100 m-auto d-block mt-3" type="text" name="memetexto" maxLength={80} placeholder="Frase dos" arial-label="default input example"></input>
                            <input id='inputTres' onChange={textomemeTres} className="form-control w-100 m-auto d-block mt-3" type="text" name="memetexto" maxLength={80} placeholder="Frase Tres" arial-label="default input example"></input>
                            <input id='inputCuatro' onChange={textomemeCuatro} className="form-control w-100 m-auto d-block mt-3" type="text" name="memetexto" maxLength={80} placeholder="Frase Cuatro" arial-label="default input example"></input>
                    </div>
                    <div contentFigure>
                        <figure id='meme'>
                            <p id="texto"  className="posicionBase" style={{color:`${colorDos.rgba}`, fontSize:`${tamañoTexto}px`, fontFamily:`${fuente};`}}>{texto}</p>
                            <p id="textodos" className="posicionBase" style={{color:`${colorDos.rgba}`, fontSize:`${tamañoTexto}px`, fontFamily:`${fuente};`}}>{textoDos}</p>
                            <p id="textoTres" className="posicionBase" style={{color:`${colorDos.rgba}`, fontSize:`${tamañoTexto}px`, fontFamily:`${fuente};`}}>{textoTres}</p>
                            <p id="textoCuatro" className="posicionBase" style={{color:`${colorDos.rgba}`, fontSize:`${tamañoTexto}px`, fontFamily:`${fuente};`}}>{textoCuatro}</p>
                            <img  src={imagen.url} alt="posicionBase" className='img' />
                        </figure>
                    </div>
                </div>
                <div className='selectores'>
                    <div className='selectorColor'>
                        <h5>Elegí un color</h5>
                        <InputColor initialValue={'#5e72e4'} onChange={setColorDos} onInput />
                    </div>
                    <div className='selectorTamaño'>
                        <h5>Elegí un tamaño</h5>
                        <select id="selectTamaño" defaultValue='0' onChange={elegitTamaño} className="form-select mb-3 w-25 m-auto" arial-label=".form-select-lg example" name ="" >
                            <option value={'24'}>Normal</option>
                            <option value={'18'}>Chico</option>
                            <option value={'30'}>Grande</option>
                        </select>
                    </div>
                    <div className='selectorLetra'>
                        <h5>Elegí una letra</h5>
                            <select id="selectFuentes" defaultValue='0' onChange={elegirFuentes} className="form-select  m-auto" arial-label=".form-select-lg example" name ="" >
                                <option value={'Anton'}>Anton</option>
                                <option value={'Josefin Sans'}>Josefin Sans</option>
                                <option value={'Comic Neue'}>Comic Neue</option>
                                <option value={'Black Han Sans'}>Black Han Sans</option>
                            </select>
                    </div>
                    <div className='botones'>
                        <button id="izquierda" className='btn btn-outline-info'><img src="./imagenes/flecha-hacia-izquierda.png" alt=""/></button>
                        <button id='derecha'className='btn btn-outline-info'> <img src="./imagenes/flecha-hacia-derecha.png" alt=""/> </button>
                        <button id='arriba' className='btn btn-outline-info'> <img src="./imagenes/flecha-hacia-arriba.png" alt=""/> </button>
                        <button id='abajo' className='btn btn-outline-info'><img src="./imagenes/flecha-hacia-abajo.png" alt=""/> </button>  
                    </div>
                </div>
            </div>
            <button id='decargar' onClick={descargar}  type="button" className="btn btn-info btn-lg mt-4 mb-4 m-auto">Descargar</button>   
            <footer>
                <div className='divFooter'>
                <p>Virginia Aymará del Rocío Romero</p>
                <a href='https://www.linkedin.com/in/virginia-aymar%C3%A1-del-roc%C3%ADo-romero/'target={'_blank'}><img src="./imagenes/linkedin (1).png" alt=""/></a>
                <a href='https://github.com/VirAyma21' target={'_blank'} ><img src="./imagenes/github (1).png" alt=""/></a>
                </div>
                </footer>        
        </div>
)
}

export default Editormeme;