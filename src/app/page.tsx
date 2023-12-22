export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello my Lucy &#128155;, I hope you have a very Merry Christmas with
          all your loved ones &#127877;. I am very proud of you and I am also
          happy to be a part of your life. Enjoy this day a lot.
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            footer
          </div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="max-w-md w-full h-full mx-auto z-10 bg-stone-50 rounded-3xl">
          <div className="flex flex-col">
            <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
              <div className="flex-none sm:flex">
                <div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                  <img
                    src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                    alt="aji"
                    className=" w-32 h-32 object-cover rounded-2xl"
                  />
                  <a
                    href="#"
                    className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center  my-1">
                      <span className="mr-3 rounded-full bg-white w-8 h-8">
                        <img
                          src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                          className="h-8 p-1"
                        />
                      </span>
                      <h2 className="font-medium">Airindia</h2>
                    </div>
                    <div className="ml-auto text-blue-800">A380</div>
                  </div>
                  <div className="border-b border-dashed border-b-2 my-5"></div>
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="flex-auto text-xs text-gray-400 my-1">
                        <span className="mr-1 ">MO</span>
                        <span>19 22</span>
                      </div>
                      <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
                        COK
                      </div>
                      <div className="text-xs">Cochi</div>
                    </div>
                    <div className="flex flex-col mx-auto">
                      <img
                        src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                        className="w-20 p-1"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex-auto text-xs text-gray-400 my-1">
                        <span className="mr-1">MO</span>
                        <span>19 22</span>
                      </div>
                      <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
                        DXB
                      </div>
                      <div className="text-xs">Dubai</div>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-b-2 my-5 pt-5">
                    <div className="absolute rounded-full w-5 h-5 bg-stone-50 -mt-2 -left-2"></div>
                    <div className="absolute rounded-full w-5 h-5 bg-stone-50 -mt-2 -right-2"></div>
                  </div>
                  <div className="flex items-center mb-5 p-5 text-sm">
                    <div className="flex flex-col">
                      <span className="text-sm">Flight</span>
                      <div className="font-semibold">Airbus380</div>
                    </div>
                    <div className="flex flex-col ml-auto">
                      <span className="text-sm">Gate</span>
                      <div className="font-semibold">B3</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 px-5">
                    <div className="flex flex-col text-sm">
                      <span className="">Board</span>
                      <div className="font-semibold">11:50AM</div>
                    </div>
                    <div className="flex flex-col mx-auto text-sm">
                      <span className="">Departs</span>
                      <div className="font-semibold">11:30Am</div>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="">Arrived</span>
                      <div className="font-semibold">2:00PM</div>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-b-2 my-5 pt-5">
                    <div className="absolute rounded-full w-5 h-5 bg-stone-50 -mt-2 -left-2"></div>
                    <div className="absolute rounded-full w-5 h-5 bg-stone-50 -mt-2 -right-2"></div>
                  </div>
                  <div className="flex items-center px-5 pt-3 text-sm">
                    <div className="flex flex-col">
                      <span className="">Passanger</span>
                      <div className="font-semibold">Ajimon</div>
                    </div>
                    <div className="flex flex-col mx-auto">
                      <span className="">Class</span>
                      <div className="font-semibold">Economic</div>
                    </div>
                    <div className="flex flex-col">
                      <span className="">Seat</span>
                      <div className="font-semibold">12 E</div>
                    </div>
                  </div>
                  <div className="flex flex-col py-5  justify-center text-sm ">
                    <h6 className="font-bold text-center">Boarding Pass</h6>
                    <div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
