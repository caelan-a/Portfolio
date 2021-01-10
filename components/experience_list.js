const ExperienceList = ({ content, data }) => {
    const frontmatter = data;

    return (
        <>
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.subtitle}</h3>
            <ReactMarkdown escapeHtml={true} source={content} />
        </>
    );
};

export default ExperienceList;

ExperienceList.getInitialProps = async (context) => {
    const { experience } = context.query;
    // Import our .md file using the `slug` from the URL
    const content = await import(`../content/experience/${experience}.md`);
    const data = matter(content.default);

    return { ...data };
};
