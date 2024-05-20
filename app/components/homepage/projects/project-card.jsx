// @flow strict

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {

  return (
    <div className="rounded-full h-140 w-140 transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer">
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}</span>
                    {
                        project.tools.length - 1 !== i &&
                        <span className="text-gray-400">{`', '`}</span>
                    }
                  </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Impact:</span>
            <span className="text-cyan-400">{' ' + project.impact}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-white">Link:</span>
            <a href={project.link} className="text-amber-300">{' Source Code'}</a>
            <span className="text-gray-400">,</span>
            <span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
        <div
            className="rounded-full h-140 w-140 transition-all duration-1000  hover:grayscale-0 hover:scale-110 cursor-pointer"
            style={{display: 'flex', justifyContent: 'center'}}>
          <Image
                src={project.pics[0]}
                className='rounded-lg'
                width={250}
                height={200} // You should specify a height as Next.js Image component requires both width and height. Adjust this based on your design needs.
                layout="intrinsic" // This maintains the natural aspect ratio, but you need to specify width and height.
                alt="related picture"
          />
            </div>
          <div>
      </div>
    </div>
    </div>

  );
};

export default ProjectCard;
