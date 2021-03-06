import React, { Component } from 'react';

import {conect, connect} from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if(index < 3) {
                return (
                
                    <li key={index}>
                        {post.title}
                    </li>
                )    
            }
        })
        return posts
    }

    render() {
        return(
            <div className='recent-posts'>
                <div className='recent-posts-wrapper'>
                    <div className='recent-posts-heading'>RecentPosts</div>
                    <ul className='recent-posts_posts'>
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions) (RecentPosts);