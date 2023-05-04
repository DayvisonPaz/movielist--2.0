import App from './App';

export default function Login() {
  return (
    <div className=' flex items-center justify-center bg-[#345B73] w-screen h-screen overflow-hidden '>
    
    <form  className="items-center justify-center bg-[#012340]  flex flex-col w-screen h-screen lg:h-[60vw] lg:w-[40vw] sm:h-2/3 sm:w-2/3  shadow-2xl text-white">
      
    
      <div className="flex items-center justify-center flex-col">
<img className="w-[20vh]" src="https://firebasestorage.googleapis.com/v0/b/movielist-8d28d.appspot.com/o/Movie%20List.png?alt=media&token=274bd5ad-65ec-44e0-9947-1c9d5bf77577" alt="" />

        <h1>welcome to Movie List</h1>
        <br />
      </div>



      <input placeholder="insira o seu nome" className="text-black h-12 w-2/3" type="text" name="" id="" />
      <br />

      <input placeholder="insira senha" className="text-black w-2/3 h-12" type="text" name="" id="" />
      <p>   forget the pass? <a href='reset' className='italic underline'>reset</a></p> 
      <br />
      <input
      className="h-10 w-32 bg-[#1f86c6]"
      type="button" value="entrar" />
   <p>or</p>
   <br />
     
      <input className='h-10 w-32 bg-[#345B73]' type="submit" value="subscribe" />
      </form>




    </div>
  )
}
