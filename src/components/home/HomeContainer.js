import React, { Component } from 'react';
import './Home.css';
import {SlideDisplay} from './SlideDisplay';
import {AboutDisplay} from './AboutDisplay';
import {CommentDisplay} from './CommentDisplay';
import {WhyDisplay} from './WhyDisplay';
import {PromoDisplay} from './PromoDisplay';
import {BlogDisplay} from './BlogDisplay';
import {ProcessDisplay} from './ProcessDisplay';

class HomeContainer extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
               <SlideDisplay />
                <AboutDisplay />
                <WhyDisplay />
                <ProcessDisplay />
                <CommentDisplay />
                <PromoDisplay />
                <BlogDisplay />
            </div>
        );
    }
}

export default HomeContainer;