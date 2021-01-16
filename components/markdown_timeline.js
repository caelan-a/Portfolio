import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { VerticalTimeline, VerticalTimelineElement } from '../lib/react-vertical-timeline-master/src/index';


function MarkdownTimline({ data, highlightFirst, title }) {
    const RealData = data.map((data_element) => matter(data_element));

    const renderers = {
        paragraph: 'h3',
    };

    return (
        <>
            <p class="font-sans text-primary text-6xl items-center justify-center text-center">
                {title}</p>
            <br />
            <br />
            <div class="markdown">
                <style jsx>{`
                    h1 {
                        font-size: 1.5em;
                        font-weight: bold;
                        color: #242424;
                    }
                    
                    
                    h3 {
                        @apply text-base font-normal ;
                    }
                    
                    
                    h2 {
                        @apply text-base;
                    }
                
                `}</style>
                <VerticalTimeline class="vertical-timeline-custom-line">
                    {RealData.map((blog, i) => (
                        i == 0 && highlightFirst == true ?
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education vertical-timeline-element--work"

                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={blog.data.date}
                                icon={<img src={blog.data.iconPath} />}
                            >
                                <h1 style={{ color: "white" }}>{blog.data.title}</h1>
                                <h2 style={{ color: "white" }}>{blog.data.subtitle}</h2>
                                <br />
                                <ReactMarkdown
                                    escapeHtml={false}
                                    source={blog.content}
                                />
                            </VerticalTimelineElement> :
                            <VerticalTimelineElement

                                date={blog.data.date}
                                icon={<img src={blog.data.iconPath} />}
                            >
                                <h1 >{blog.data.title}</h1>
                                <h2 >{blog.data.subtitle}</h2>
                                <br />

                                <ReactMarkdown
                                    escapeHtml={false}
                                    source={blog.content}
                                    renderers={renderers}
                                />
                            </VerticalTimelineElement>
                    ))}

                </VerticalTimeline>
            </div>
        </>
    );
};

export default MarkdownTimline;
