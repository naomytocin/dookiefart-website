import { component$ } from "@builder.io/qwik";
import type { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-black h-screen text-white flex flex-col">
      <div class="m-10 doto font-extrabold bg-gradient-to-r text-8xl from-blue-400 to-red-400 bg-clip-text text-transparent transition-all duration-200">
        coding pathway (ic)
      </div>
      <div class="m-10 font-semibold text-2xl">
        the (ic) pathway consists of the following classes in order:
        <ul class="m-10">
          <li class="transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-200 hover:bg-clip-text hover:text-transparent">
            • nic computer science foundations
          </li>
          <li class="transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent">
            • coding i
          </li>
          <li class="transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-400 hover:bg-clip-text hover:text-transparent">
            • nic coding ii
          </li>
          <li class="transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">
            • ap computer science principles
          </li>
          <li class="transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
            • ap computer science a
          </li>
          <li class="transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-700 hover:bg-clip-text hover:text-transparent">
            • coding iii (practicum)
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-10">
        <div class="flex flex-col"></div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
