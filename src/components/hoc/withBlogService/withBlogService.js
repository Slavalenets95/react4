import React from 'react'
import { BlogServiceConsumer } from '../../blogServiceContext'

const withBlogService = (Wrapped) => {

    return (props) => {
        return (
            <BlogServiceConsumer>
                {
                    (blogService) => {
                        return <Wrapped {...props} blogService={blogService} />
                    }
                }
            </BlogServiceConsumer>
        )
    }
}

export default withBlogService