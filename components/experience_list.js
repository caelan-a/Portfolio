import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function ExperienceList({ content, data }) {
    const RealData = data.map((data_element) => matter(data_element));

    return (
        <>
            <div class="markdown">
                <VerticalTimeline>
                    {RealData.map((blog, i) => (
                        i == 0 ?
                            <VerticalTimelineElement

                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={blog.data.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img class=" w-16  " src={blog.data.iconPath} />}
                            >
                                <h1 style={{ color: "white" }}>{blog.data.title}</h1>
                                <h2 style={{ color: "white" }}>{blog.data.subtitle}</h2>

                                <ReactMarkdown
                                    escapeHtml={false}
                                    source={blog.content}
                                />
                            </VerticalTimelineElement> :
                            <VerticalTimelineElement

                                date={blog.data.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img class=" w-16  " src={blog.data.iconPath} />}
                            >
                                <h1 >{blog.data.title}</h1>
                                <h2 >{blog.data.subtitle}</h2>

                                <ReactMarkdown
                                    escapeHtml={false}
                                    source={blog.content}
                                />
                            </VerticalTimelineElement>
                    ))}

                </VerticalTimeline>
            </div>

            {/* <div className="markdown">
                <ul>

                    <div>

                        {RealData.map((blog, i) => (
                            <li key={i}>
                                <div class="justify-center">
                                    <div class="flex flex-row items-center space-x-4 w-1/2 self-center">
                                        <div>
                                            <img class=" w-16  " src={blog.data.iconPath} />
                                        </div>

                                        <div>
                                            <h1>{blog.data.title}</h1>
                                            <h2>{blog.data.subtitle}</h2>

                                            <ReactMarkdown
                                                escapeHtml={false}
                                                source={blog.content}
                                            />
                                            <p>{blog.data.date}</p>

                                        </div>

                                    </div>
                                </div>




                            </li>
                        ))}
                    </div>
                </ul>
            </div> */}
        </>
    );
};

export default ExperienceList;
