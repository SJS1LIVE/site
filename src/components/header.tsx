import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
    siteTitle: string,
    description: string
}

const Header = ({ siteTitle, description }: HeaderProps) => (
    <header
        style={{
            textAlign: `center`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <h3 style={{
                color: 'white'
            }}>
                {description}
            </h3>
        </div>
    </header>
)

export default Header
