import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faRss, faEnvelope, faLowVision, faPodcast } from '@fortawesome/free-solid-svg-icons' 
import { faFacebookF, faTwitter, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faTags)
library.add(faRss)
library.add(faPodcast)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faGithub)
library.add(faLinkedin)
library.add(faEnvelope)
library.add(faYoutube)
// interface SidebarProps {
//     siteTitle: string,
//     description: string
// }

const Sidebar = () => (
    <div>
    <p><a href="https://www.youtube.com/channel/UCeQMgrmDq_AbUMgzvAGTb3g"><FontAwesomeIcon icon={['fab', 'youtube']} /> On YouTube</a></p>
    <p><a href="https://twitter.com/sjs1live"><FontAwesomeIcon icon={['fab', 'twitter']} /> On Twitter</a> </p>
    <p><a href="https://www.facebook.com/sjs1live"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> On Facebook</a></p>
    <p><a href="https://podcasts.apple.com/us/podcast/the-sjs1-podcast/id1595246740"><FontAwesomeIcon icon={['fas', 'podcast']} /> On Apple Podcasts</a></p>
    </div>
)

export default Sidebar
