export default function Bio() {

  return (
    <div className="cursor-pointer relative mt-10 w-[350px] h-[350px] text-sm rounded-[25px] bg-[#F5F5F7] transition-transform duration-200 ease-in-out hover:-translate-y-2">

      {/* Header label */}
      <div className="absolute top-5 left-5 bg-white rounded-[25px] z-10 px-5 py-2 text-[20px] font-semibold">
        Hey! :D
      </div>

      {/* Bio content */}
      <div className="p-10 pt-12 mt-6 text-[#878787] font-medium text-lg">
        I am a product designer, web developer, student, photographer, bike rider, val enjoyer, kpop listener, etc...
        <br></br>
        I want to keep being curious and explore different paths on top of product design; data analytics, machine learning, ux research, and even more
      </div>


    </div>
  );
}
