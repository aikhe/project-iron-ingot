import { _Transition_Page } from '../../../components/_Animations';
import { motion } from 'framer-motion';

const Page_Council = (e) => {
  return (
    <>
      <motion.section
        variants={_Transition_Page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="py-8  text-center"
      >
        <p className="text-2xl font-semibold">
          Computer Science Council Members
        </p>
        <div className="mt-16  grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="col-span-full">
            <p className="text-xl">Prof. Joemen G. Barrios, MIT</p>
            <p className="text-sm text-yellow-600">
              BS Computer Science Coordinator
            </p>
          </div>
          <div className="col-span-full">
            <p className="text-xl">Jhude A. Vergara</p>
            <p className="text-sm text-yellow-600">President</p>
          </div>
          <div className="col-span-full">
            <p className="text-xl">Rosemarie A. Bullo</p>
            <p className="text-sm text-yellow-600">Vice-President</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Jacelyn A. Caratao </p>
            <p className="text-sm text-yellow-600">Secretary</p>
          </div>
           <div className="col-span-full md:col-span-3">
            <p className="text-xl">Heshekiah M. Tambago</p>
            <p className="text-sm text-yellow-600">Assistant Secretary</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl">Karylle Dhoreign Daye E. de Torres</p>
            <p className="text-sm text-yellow-600">Treasurer</p>
          </div>
          {/* <div className="col-span-full md:col-span-3">
            <p className="text-xl">Joshua Gabriel P. Dantes </p>
            <p className="text-sm text-yellow-600">Business Manager</p>
          </div> */}
          <div className="col-span-full md:col-span-3">
            <p className="text-xl">Krisha Mae P. Alcaide</p>
            <p className="text-sm text-yellow-600">Auditor</p>
          </div>
           <div className="col-span-full md:col-span-3">
            <p className="text-xl">Gero Earl S. Pereyra</p>
            <p className="text-sm text-yellow-600">Public Relations Officer</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl">--</p>
            <p className="text-sm text-yellow-600">Public Relations Officer</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl">Jay Ann Rose B. Gerente</p>
            <p className="text-sm text-yellow-600">4th Year Representative</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl">Ralph Michael B. Rocabo</p>
            <p className="text-sm text-yellow-600">3rd Year Representative</p>
          </div>
            <div className="col-span-full md:col-span-3">
            <p className="text-xl">Daniel D. Bobis</p>
            <p className="text-sm text-yellow-600">2nd Year Representative</p>
          </div>
            <div className="col-span-full md:col-span-3">
            <p className="text-xl">--</p>
            <p className="text-sm text-yellow-600">1st Year Representative</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Gwyneth F. Uy </p>
            <p className="text-sm text-yellow-600">Creative Committee Head </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Genrey O. Cristobal </p>
            <p className="text-sm text-yellow-600">Program Committee Head </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Stephanie Cueto </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Jhon Keneth Ryan B. Namias </p>
            <p className="text-sm text-yellow-600"> Program Committee</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Marianne Celest T. Jerez </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Gian Higino O. Fungo </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Mico Jake A. Lutiva </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Ma. Catherine Bae </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Mark Relan Gercee Acedo </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Irheil Mae Antang </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Rafael Salve </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Denz Sabalbora </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">Creative Committee </p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">Program Committee </p>
          </div>
        </div>


        <p className="text-2xl mt-24  font-semibold">Class Presidents</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Rosemarie A. Bullo </p>
            <p className="text-sm text-yellow-600">BSCS 4A</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Jamaica Rose Grafil  </p>
            <p className="text-sm text-yellow-600">BSCS 4B</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Joshua Gabriel P. Dantes </p>
            <p className="text-sm text-yellow-600">BSCS 3A</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Laurence John Clarete </p>
            <p className="text-sm text-yellow-600">BSCS 3B</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Sandra Agustin </p>
            <p className="text-sm text-yellow-600">BSCS 2A</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> Michael Baynosa </p>
            <p className="text-sm text-yellow-600">BSCS 2B</p>
          </div>
           <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">BSCS 1A</p>
          </div>
          <div className="col-span-full md:col-span-3">
            <p className="text-xl"> -- </p>
            <p className="text-sm text-yellow-600">BSCS 1B </p>
          </div>
        </div>

        <div className="border-b-2 border-white max-w-xl mx-auto my-32" />

        <p className="text-xl mb-5">
          About Bachelor of Science in Computer Science{' '}
        </p>
        <p>
          The study of computers and computing, encompassing their theoretical
          and algorithmic underpinnings, hardware and software, and applications
          for information processing. Computer science is the study of
          algorithms and data structures, computer and network architecture,
          data and information modelling, and artificial intelligence. Because
          computer science has certain mathematical and technical basis, it
          combines concepts from queueing theory, probability and statistics,
          and electrical circuit design. During the conceptualization, creation,
          measurement, and refining of novel algorithms, information structures,
          and computer architectures, computer science makes extensive use of
          hypothesis testing and experimentation. Computer science degree holder
          can become Software Engineer, Web Developer, and Hardware Engineer.
        </p>
      </motion.section>
    </>
  );
};

export default Page_Council;
