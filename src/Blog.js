import React from 'react';
import {
    useParams,
    Link,
    useRouteMatch
} from 'react-router-dom';

const blogPosts = [
    'first',
    'second',
    'third'
];

function Blog() {
    const params = useParams();
    console.table(params.blogId);
    const match = useRouteMatch();
    console.table(match);

    return (
        <div>
            <ul>
                {blogPosts.map((b, i) => (
                    <li><Link to={String(i)}>{b}</Link></li>
                ))}
            </ul>
            <p>
                {blogPosts[params.blogId]}
            </p>
        </div>
    );
}

export default Blog;