import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-black h-screen text-white font-semibold items-center flex flex-col justify-center">
      <a href="https://www.knoxschools.org/landn">
        <img
          src="public/lnnstem.png"
          class="absolute scale-50 hover:scale-100 justify-center items-center transition-all duration-200 translate-y-120 -translate-x-25"
          width="200"
          height="200"
        />
      </a>
      <div class="mb-10 doto font-extrabold bg-gradient-to-r from-green-800 to-yellow-400 bg-clip-text text-transparent hover:bg-gradient-to-r text-8xl hover:from-green-400 hover:to-yellow-200 hover:bg-clip-text hover:text-transparent hover:scale-110 transition-all duration-200 relative">
        l&n stem academy
      </div>
      <div class="mt-4 text-2xl">
        this website will go over{" "}
        <span class="transition-all duration-200 font-bold hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-400 hover:bg-clip-text hover:text-transparent">
          the school of computational science and cybersecurity
        </span>
      </div>
      <p class="mt-10 scale-120">
        within the school of{" "}
        <span class="transition-all duration-200 font-bold hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-400 hover:bg-clip-text hover:text-transparent">
          the school of computational science and cybersecurity
        </span>
        , there are 5 pathways, curated to meet the unique needs of students,{" "}
        regardless of their background in compsci/cybersec.
      </p>
      <div class="grid grid-cols-2 gap-4 mt-10">
        <div class="flex flex-col">
          <button
            id="coding-pathway"
            class="transition-all duration-200 bg-white text-black px-4 py-2 rounded hover:bg-gradient-to-r hover:bg-blue-400 hover:font-bold hover:text-white"
          >
            <a href="/coding_pathway">coding pathway (ic)</a>
          </button>
          <button class="mt-2 transition-all duration-200 bg-white text-black px-4 py-2 rounded hover:bg-gradient-to-r hover:bg-blue-600 hover:font-bold hover:text-white">
            <a href="/ad_cod_pt">advanced computer science pathway (aa)</a>
          </button>
        </div>
        <div class="flex flex-col">
          <button class="transition-all duration-200 bg-white text-black px-4 py-2 rounded hover:bg-gradient-to-r hover:bg-purple-400 hover:font-bold hover:text-white">
            <a href="/cpic"> cybersecurity pathway (ic) </a>
          </button>
          <button class="transition-all duration-200 bg-white text-black px-4 py-2 rounded hover:bg-gradient-to-r hover:bg-purple-600 hover:font-bold hover:text-white mt-2">
            <a href="/ad_cy_pt">advanced cybersecurity pathway (aa) </a>
          </button>
        </div>
        <div class="col-span-2">
          <button class="transition-all duration-200 bg-white text-black px-40 py-2 rounded hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 hover:font-bold hover:text-white">
            <a href="/apcap">
              ap capstone diploma in computational science & cybersecurity
            </a>
          </button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "school of computational science and cybersecurity",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
