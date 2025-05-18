import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-black h-screen text-white flex flex-col">
      <div class="m-10 doto font-extrabold bg-gradient-to-r text-8xl from-blue-400 to-red-400 bg-clip-text text-transparent transition-all duration-200">
        ap capstone diploma in computational science & cybersecurity
      </div>
      <div class="m-10 font-semibold text-2xl">
        the ap capstone diploma compsci/cyber pathway is a unique pathway
        curated towards the compsci and cyber fields, bringing fourth advanced
        classes for those with a strong interest in the field.
        <ul class="m-10">
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-200 hover:bg-clip-text hover:text-transparent">
            • sequence of two courses over two years: <br /> ap seminar + ap
            research (final requirement: academic paper, presentation, & oral
            defense)
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-300 hover:bg-clip-text hover:text-transparent">
            • ap seminar may be taken in 10th or 11th grade and is a
            prerequisite for ap research
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-400 hover:bg-clip-text hover:text-transparent">
            • must score 3+ on each exam in the ap capstone sequence
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">
            • take 4+ ap exams and score 3+ on each
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-600 hover:bg-clip-text hover:text-transparent">
            • capstone course options include: <br />
            ap computer science principles, ap computer science a, and one of
            the following: ap precalculus, ap statistics, ap calculus ab, ap
            calculus bc
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-700 hover:bg-clip-text hover:text-transparent">
            • plus one additional ap course
          </li>
          <li class="mt-4 transition-all duration-200 hover:font-extrabold hover:bg-gradient-to-r hover:from-blue-950 hover:to-purple-800 hover:bg-clip-text hover:text-transparent">
            • you will meet with your counselor/administrator to build your
            course of study
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
