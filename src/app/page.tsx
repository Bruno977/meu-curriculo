import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { UserIcon, WalletIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <div className="container m-auto p-4 lg:p-0">
        <div className="flex items-center justify-center flex-col lg:flex-row gap-20 min-h-screen">
          <Avatar />
          <div className="flex flex-col gap-5">
            <h4 className="uppercase font-normal text-sm text-gray-400">
              Olá, Bem-vindo !
            </h4>
            <Title>
              Meu nome é{' '}
              <strong className="text-emerald-500">Bruno Rodrigues</strong>
            </Title>
            <p className="text-gray-400">
              Sou Desenvolvedor Front-end e moro em Itaperuna, Rio de Janeiro.
              <br />
              Sou apaixonado pelo Javascript e atualmente venho me aperfeiçoando
              <br />
              em React utilizando typescript.
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 rounded-full transition h-11 px-6 uppercase 
                text-sm tracking-wider font-semibold border-2 bg-emerald-700 text-white border-emerald-700 hover:bg-transparent hover:text-emerald-500"
              >
                <UserIcon className="h-6 w-6" />
                Veja Mais Sobre mim
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full transition h-11 px-6 uppercase text-sm tracking-wider font-semibold border-2
              bg-transparent border-emerald-700 text-emerald-500 hover:bg-emerald-700 hover:text-white"
              >
                <WalletIcon className="h-6 w-6" />
                Portfólio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
