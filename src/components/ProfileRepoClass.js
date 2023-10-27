import { Component } from "react";
import {
  Github_API_User,
  Github_UserName,
  Github_Repository_Name,
  options,
} from "../constants";
// import Pic from "../assets/img/pic.png"
import Pic from "../assets/img/picc.jpg"
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoInfo: [],
    };
    // console.log("ProfileRepoClass child constructor");
  }

  async componentDidMount() {
    const response = await fetch(
      Github_API_User + Github_UserName + "/repos",
      options
    );
    const json = await response.json();
    this.setState({
      repoInfo: json,
    });
    // console.log("ProfileRepoClass child componentDidMount");
  }
  componentDidUpdate() {
    // console.log("ProfileRepoClass child componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("ProfileRepoClass child componentWillUnmount");
  }
  render() {
    const { followers } = this.props; // accessing followers as props from parent class `ProfileClass`
    const [...repoList] = this.state.repoInfo;
    // console.log("ProfileRepoClass child render");
    return true?(
        <div>
          <img src={Pic} style={{ width: '200px', height: 'auto' }}/>
            <h1>My Name is <span>Amit</span></h1>
            <ul>
                <li><h3>Frontend Developer</h3></li>
                <li><h3>BTech in <bold>Electrical Engineering</bold></h3></li>
                <li><h3>2019-2023</h3></li>
            </ul>
        </div>
        )
        :(
      <div className="profile-repo-container">
        {repoList
          .filter((repo) => repo.name === Github_Repository_Name)
          .map((repo) => {
            return (
              <div key={repo.id}>
                <h1>
                  <a href={repo.html_url} target="_blank">{repo.name}</a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>
                <a href={repo.html_url} target="_blank">
                  <div className="profile-repo-items">
                    <h3>
                      <FiUsers />
                      <span>{followers} Followers</span>
                    </h3>
                    <h3>
                      <BiGitRepoForked />
                      <span>{repo.forks_count} Forks</span>
                    </h3>
                    <h3>
                      <BiStar />
                      <span>{repo.stargazers_count} Stars</span>
                    </h3>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepoClass;