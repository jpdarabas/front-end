import { useState } from "react";
import { useParams } from 'react-router-dom';


export default function Chat() {

  const { nome } = useParams();
  
  const [mensagens, setMensagens] = useState([]);

  const [novaMensagem, setNovaMensagem] = useState('');
  
  const enviarMensagem = (e) => {
    e.preventDefault();
  
    setMensagens([...mensagens, novaMensagem]);
  
    setNovaMensagem('');
  }
  
  function MensagemAtendente(){
    return(
      <div>
        <div className=" font-bold font-Arial">Atendente diz:</div>
                <div className="break-words  bg-gradient-to-b from-[#dff7df] to-[#98f286] text-[#454545] px-4 py-2 rounded-md font-bold font-Arial w-[200px]">
                  Olá, {nome}, como posso ajudá-lo?
                </div>
      </div>
    )
  }

  return (
    <body className="bg-gradient-to-b from-[#dff7df] to-[#98f286] flex justify-center items-center h-screen">

    <div id="quadro" className='w-[400px] h-[600px] bg-white p-9 rounded-lg shadow-md'>

        <div className="p-1 md:p-2 text-purple-700 text-lg md:text-2xl font-bold">
          Atendimento on-line
      </div>

          <div className="bg-[#efefef] p-3 rounded-lg shadow-md h-[460px] overflow-auto">
            <MensagemAtendente></MensagemAtendente>
            {mensagens.map((mensagem) => {
          return (
            <div className="flex flex-col items-end">
        <div className=" font-bold font-Arial">Você diz:</div>
                <div className="break-words  bg-gradient-to-b from-[#dff7df] to-[#98f286] text-[#454545] px-4 py-2 rounded-md font-bold font-Arial w-[200px] min-h-[40px]">
                 {mensagem}
                </div>
      </div>
          );
        })}
          </div>
            <input className="bg-[#fefefe] w-[220px] p-3 rounded-lg shadow-md" type="text" id="mensagem" name="mensagem" placeholder="Digite sua mensagem..." required="required" autocomplete="off" value={novaMensagem} onChange={(event) => setNovaMensagem(event.target.value)}/>

            <button className="text-center bg-gradient-to-b from-[#dff7df] to-[#98f286] text-[#131313] px-4 py-2 ml-3 rounded-md font-semibold" type="submit" id="enviar" name="enviar" onClick={enviarMensagem}>ENVIAR
            </button>
          </div>
    </body>
  );
}
