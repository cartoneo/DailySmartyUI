import React, { Component } from 'react';

class RecentPosts extends Component {
    render() {
        return(
            <div className='recent-posts'>
                <div className='recent-posts-wrapper'>
                    <div className='recent-posts-heading'>
                        <ul className='recent-posts_posts'>
                            <li>recent posts 0</li>
                            <li>recent posts 1</li>
                            <li>recent posts 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default RecentPosts;