import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useQuery } from "../Hooks";
import { getcommentbynewsApi, setcommentApi } from "../store/actions/campaign";
import { useSelector } from "react-redux";
import { selectUser } from "../store/reducers/userReducer";
import { translate } from "../utils";
import no_image from "../images/images.jpeg";

function CommentsView(props) {
    const [LoadComments, setLoadComments] = useState(false);
    const [Data, setData] = useState([]);
    const [Comment, setComment] = useState("");
    const query = useQuery();
    const Nid = query.get("Nid");
    const replyRef = useRef();
    const userData = useSelector(selectUser);

    useEffect(() => {
        getcommentbynewsApi(
            props.Nid,
            "0",
            "10",
            (response) => {
                if (response.data === undefined) {
                    setData([]);
                } else {
                    setData(response.data);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }, [props.Nid, props.LoadComments, LoadComments]);

    // set comment
    const setCommentData = (e, id) => {
        e.preventDefault();
        setcommentApi(
            id,
            Nid,
            Comment,
            (response) => {
                setLoadComments(true);
                setTimeout(() => {
                    setLoadComments(false);
                }, 1000);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    // set replay comment
    const setreplyComment = (e, id) => {
        e.preventDefault();
        setcommentApi(
            id,
            Nid,
            Comment,
            (response) => {
                setLoadComments(true);
                setTimeout(() => {
                    setLoadComments(false);
                }, 1000);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <div id="">
            {Data.length === 0 ? null : <h2>{translate("comment")}</h2>}
            {Data &&
                Data.map((element) => (
                    <div key={element.id}>
                        <div id="cv-comment">
                        <img id="cs-profile" src={element.profile ? element.profile : no_image} alt="" />
                            <div id="cs-card" className="card">
                                <b>
                                    <h5>{element.name}</h5>
                                </b>
                                {/* <Link id="cdbtnReport">Report</Link> */}
                                <p id="cs-card-text" className="card-text">
                                    {element.message}
                                </p>
                                {["bottom-end"].map((placement) =>
                                    userData && userData.data ? (
                                        <OverlayTrigger
                                            trigger="click"
                                            key={placement}
                                            placement={placement}
                                            rootClose
                                            overlay={
                                                <Popover id={`popover-positioned-${placement}`}>
                                                    <Popover.Header as="h3">{translate("addreplyhere")}</Popover.Header>
                                                    <Popover.Body id="cv-replay-propover">
                                                        <form id="cv-replay-form" method="post" onSubmit={(e) => setCommentData(e,element.id)}>
                                                            <textarea
                                                                name=""
                                                                id="cs-reply-input"
                                                                cols="30"
                                                                rows="5"
                                                                onChange={(e) => {
                                                                    setComment(e.target.value);
                                                                }}
                                                                placeholder="Share Your reply..."
                                                            ></textarea>
                                                            <button id="cdbtnsubReplay" type="submit" className="btn">
                                                            {translate("submitreply")}
                                                            </button>
                                                        </form>
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <Button id={`${element.id}`} className="cdbtnReplay" variant="secondary" ref={replyRef}>
                                            {translate("reply")}
                                            </Button>
                                        </OverlayTrigger>
                                    ) : null
                                )}
                            </div>
                        </div>
                        {element.replay.map((ele) => (
                            <div id="cv-Rcomment" key={ele.id}>
                                <img id="cs-profile" src={ele.profile ? ele.profile : no_image} alt="" />
                                <div id="cs-Rcard" className="card">
                                    <b>
                                        <h5>{ele.name}</h5>
                                    </b>
                                    {/* <Link id="cdbtnReport">Report</Link> */}
                                    <p id="cs-card-text" className="card-text">
                                        {ele.message}
                                    </p>
                                    {["bottom-end"].map((placement) =>
                                        userData && userData.data ? (
                                            <OverlayTrigger
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                rootClose
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`}>
                                                        <Popover.Header as="h3">{translate("addreplyhere")}</Popover.Header>
                                                        <Popover.Body id="cv-replay-propover">
                                                            <form method="post" onSubmit={(e) => setreplyComment(e,ele.parent_id)}>
                                                                <textarea
                                                                    name=""
                                                                    id="cs-input"
                                                                    cols="30"
                                                                    rows="5"
                                                                    onChange={(e) => {
                                                                        setComment(e.target.value);
                                                                    }}
                                                                    placeholder="Share Your reply..."
                                                                ></textarea>
                                                                <button id="cdbtnsubReplay" type="submit" className="btn">
                                                                {translate("submitreply")}
                                                                </button>
                                                            </form>
                                                        </Popover.Body>
                                                    </Popover>
                                                }
                                            >
                                                <Button id={`${element.id}`} className="cdbtnReplay" variant="secondary" ref={replyRef}>
                                                {translate("reply")}
                                                </Button>
                                            </OverlayTrigger>
                                        ) : null
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
}

export default CommentsView;
