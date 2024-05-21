// @flow strict
"use client";

import * as React from 'react';
import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
    const [activeReviewIndex, setActiveReviewIndex] = useState(0);

    useEffect(() => {
        if (project.reviews && project.reviews.length > 0) {
            const intervalId = setInterval(() => {
                setActiveReviewIndex((current) => (current + 1) % project.reviews.length);
            }, 800); // changes every 8 seconds

            return () => clearInterval(intervalId);
        }
    }, [project.reviews]);

    return (
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
                <div className="font-mono text-xs md:text-sm lg:text-base">
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-cyan-400">{project.description}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-orange-400">{project.role}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-white">Impact:</span>
                        <span className="text-cyan-400">{' ' + project.impact}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-white">{project.visitMessage} </span>
                        <a href={project.link} className="text-amber-300 underline" target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
            </div>

            <div className="p-4 flex overflow-x-scroll hide-scrollbar">
                {project.pics.map((pic, index) => (
                    <div key={index} className="min-w-[250px] mr-4">
                        <Image
                            src={pic}
                            className="rounded-lg"
                            width={250}
                            height={200}
                            layout="intrinsic"
                            alt="related picture"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {project.reviews && project.reviews.length > 0 && (
                <div>
                    <div className="overflow-hidden relative w-full">
                        <div
                            style={{
                                transform: `translateX(-${activeReviewIndex * 100}%)`,
                                transition: 'transform 5s ease-in-out',
                                width: `${project.reviews.length * 100}%`,
                                display: 'flex',
                            }}
                        >
                            {project.reviews.map((review, index) => (
                                <div key={index} className={styles.review} style={{ width: '100%' }}>
                                   <img src={review.avatar} alt="Avatar" className={styles.reviewAvatar} />
                                    <div className={styles.reviewContent}>
                                        <div className={styles.reviewUsername}>{review.username}</div>
                                        <div className={styles.reviewQuote}>&quot;{review.comment}&quot;</div>
                                        <a href={review.link} target="_blank" rel="noopener noreferrer" className="underline text-[#EC4899]">Link</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(ProjectCard);
