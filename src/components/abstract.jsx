import { motion } from "framer-motion";

export default function Abstract() {
  return (
    <>
      <div className=" pb-10 border-b border-gray-400">
        <div className="flex justify-center text-4xl lg:text-5xl font-serif pt-12">
          <span className="text-red-600">A</span>bstract
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-16 gap-8 xl:px-20 px-10">
          <div className="hover:scale-105 cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-400 rounded-2xl bg-white min-h-96 px-8 pb-8">
            <div className="flex justify-center text-3xl py-4">
              <span className="text-red-600">A</span>wards
            </div>
            <div className="py-2 text-lg">
              (Best 18 posters and Best 18 oral presentations worth Rs. 2 Lakhs)
            </div>
            <div className="flex flex-col gap-1">
              <div>* Chandra P.Sharama Award</div>
              <div>* Life Time Achievement Award</div>
              <div>* Outstanding Biomaterial Scientiest</div>
              <div>* MAHE "Young Scientiest Award"</div>
              <div>* Bajpai-Saha "Student Award"</div>
              <div>* Best Thesis Award (UG/PG)</div>
              <div>* Oral/Poster Award</div>
              <div>* Technology Award</div>
            </div>
          </div>
          <div className="hover:scale-105 cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-400 rounded-2xl bg-white min-h-96 px-8 pb-8">
            <div className="flex justify-center text-3xl py-4">
              <span className="text-red-600 pr-2">Call</span> for Abstracts
            </div>
            <div className="py-2 text-lg">
              Extended Deadline: Nov' 05 2025
            </div>
            <div className="flex flex-col gap-1">
              <div>* 15 Aug' 25 - Abstract <span className="text-green-800 font-semibold">Open</span></div>
              <div>* 05 Nov' 25 -  Abstract <span className="text-red-800 font-semibold">Close</span></div>
              <div>* 25 Sept' 25- Early Bird Registration <span className="text-green-800 font-semibold">Open</span></div>
              <div>* 25 Oct' 25-   Early Bird Registration <span className="text-red-800 font-semibold">Close</span></div>
              <div>* 26 Oct' 25-   Regular Registration <span className="text-green-800 font-semibold">Open</span></div>
              <div>* 15 Nov' 25-  Regular Registration <span className="text-red-800 font-semibold">Close</span></div>
            </div>
            <div className="text-xl flex justify-center pt-2">Abstract Submission Online </div>
            <div className="text-sm flex justify-center text-blue-700 underline"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf7ovkrs4-uP8cbwDxvo0jKvDjMw0AUdWMA9gOEqW_azohy3w/viewform" target="_blank">Click here to Submit Abstract</a></div>
          </div>
          <div className="hover:scale-105 cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-400 rounded-2xl bg-white min-h-96 px-8 pb-8">
            <div className="flex justify-center text-3xl py-4">
              <span className="text-red-600">App</span>ly Now!
            </div>
            <div className="py-2 text-lg">
              Call for Abstracts- Bio MANTHAN-2025 (Join us  offline at the conference venue)
            </div>
            <div className="flex flex-col gap-1">
              <div>* Abstract Submission Open on <span className="font-bold">15th  August, 2025</span></div>
              <div>* Deadline to submit <span className="font-bold">05th  November, 2025</span> </div>
              <div>* <span className="pr-2 text-blue-600"><a href="https://sites.google.com/iitrpr.ac.in/biomanthan/registration" target="_blank">Registrations</a></span>Open</div>
              <div>* Venue: IIT Ropar</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
