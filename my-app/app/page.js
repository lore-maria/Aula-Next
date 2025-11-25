import Image from "next/image";

export default function Home() {
  return (
        <div className="container">
          <h1>
            Bem-vindo à Biblioteca do IFPB!
          </h1>

          <Image
          src="/logoIF.png"
          alt="IFPB Logo"
          width={200}
          height={300}/>

          <p>
            Explore nossa coleção de livros, artigos e recursos digitais. 
          </p>
        </div>

       
      
   
  );
}
