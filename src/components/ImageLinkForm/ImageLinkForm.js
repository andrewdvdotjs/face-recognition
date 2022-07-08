import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Este Cérebro Mágico consegue detectar rostos em suas fotos. Experimente com o link de uma imagem.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input placeholder="Adicione aqui o link de uma imagem"
              className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detectar</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;