import * as React from "react";

import LiveSplitIcon from "../assets/icon_small.png";

import "../css/About.scss";

export class About extends React.Component {
    public render() {
        return (
            <div className="about">
                <div className="about-inner-container">
                    <div className="livesplit-title">
                        <span className="livesplit-icon">
                            <img src={LiveSplitIcon} alt="LiveSplit Logo" />
                        </span>
                        <div className="title-text">LiveSplit One</div>
                    </div>
                    <p className="build-version">
                        <a href={`https://github.com/LiveSplit/LiveSplitOne/commit/${COMMIT_HASH}`} target="_blank">
                            Version: {COMMIT_HASH} ({BUILD_DATE})
                        </a>
                    </p>
                    <p>LiveSplit One is a multiplatform version of LiveSplit, the sleek,
                    highly-customizable timer for speedrunners.</p>
                    <p>
                        <a href="https://github.com/LiveSplit/LiveSplitOne" target="_blank">
                            View Source Code on GitHub
                        </a>
                    </p>
                    <h1 className="contributors-header">Contributors</h1>
                    {
                        CONTRIBUTORS_LIST.map((contributor) => (
                            <p className="contributor">
                                <a href={`https://github.com/${contributor}`} target="_blank">{contributor}</a>
                            </p>
                        ))
                    }
                </div>
            </div>
        );
    }
}
