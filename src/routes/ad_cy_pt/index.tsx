import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-black h-screen text-white flex flex-col">
      <div class="m-10 doto font-extrabold bg-gradient-to-r text-8xl from-blue-400 to-red-400 bg-clip-text text-transparent transition-all duration-200">
        advanced cybersecurity pathway (aa)
      </div>
      <div class="m-10 font-semibold text-2xl">
        the (aa) pathway consists of the following classes:
        <ul class="m-10">
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-200 hover:bg-clip-text hover:text-transparent">
            • required courses:
            <br /> nic cybersecurity i, nic cybersecurity ii, ap computer
            science principles
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent">
            • two of the following ap courses: <br /> ap precalculus, ap
            calculus ab, ap calculus bc, ap computer science a, de cybersecurity
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-400 hover:bg-clip-text hover:text-transparent">
            • one of the following courses (can be substituted with an ap course
            listed above): <br /> mathematical modeling, nic principles of
            engineering & technology, robotics & automated systems, ap
            statistics, coding i, coding ii
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">
            • plus one ap/de course
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
  title: "advanced cybersecurity pathway",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
