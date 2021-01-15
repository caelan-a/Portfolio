import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
                /* CUSTOM LINE COLOR */
                    /* The line */
                    .vertical-timeline.vertical-timeline-custom-line::before {
                        background: #424242;
                    }

                    /* Icon container's border */
                    .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--work .vertical-timeline-element-icon {
                        box-shadow: 0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
                    }

                    .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--education .vertical-timeline-element-icon {
                        box-shadow: 0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
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
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img class=" w-16  " src={blog.data.iconPath} />}
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
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img class=" w-16  " src={blog.data.iconPath} />}
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
