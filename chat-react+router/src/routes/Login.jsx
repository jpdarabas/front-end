import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const esqueceuSenha = () => {
    alert("A senha é só enfeite, clica no entrar");
  };
  
  const [nome, setNome] = useState('');
  const [nomePreenchido, setNomePreenchido] = useState(false);

  function LoginButton() {
    let navigate = useNavigate();
    function handleClick() {
        if (nomePreenchido) {
            navigate(`/Chat/${nome}`);;
          } else {
            alert('Só entra se preencher o nome primeiro.');
          }
        }    

    return (<button className="text-center bg-gradient-to-b from-[#dff7df] to-[#98f286] text-[#999999] px-4 py-2 mt-5 rounded-md font-semibold" onClick={handleClick}>
    ENTRAR
    </button>)
}

  function handleChange(event) {
    setNome(event.target.value);
    setNomePreenchido(!!event.target.value);
  }
  return (
    <body className="bg-gradient-to-b from-[#dff7df] to-[#98f286] flex justify-center items-center h-screen">

        <form  className="bg-white p-9 rounded-lg shadow-md flex flex-col mx-auto min-w-lg">
            <p className="mb-7 text-4xl font-bold text-center">Login</p>
            <div className="my-2 flex flex-col">
                <label className="font-bold" htmlFor="nome">Nome</label>
                <input className="bg-[#efefef] p-3 rounded-lg shadow-md" type="text" id='nome' name='Digite seu nome'
                value={nome} placeholder="Digite seu Nome" onChange={handleChange}/>
            </div>
            <div className="my-2 flex flex-col">
                <label className="font-bold" htmlFor="senha">Senha</label>
                <input className="my-2 bg-[#efefef] p-3 rounded-lg shadow-md" type="password" id='senha' name='senha' placeholder="Digite sua senha"/>
            </div>
            
            <button className="text-sm text-end" onClick={esqueceuSenha}>Esqueceu sua senha?</button>
            <LoginButton></LoginButton>
        </form>
    </body>
  );
}
