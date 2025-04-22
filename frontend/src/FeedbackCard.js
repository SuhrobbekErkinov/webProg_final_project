import React from "react";

const FeedbackCard = ({ feedback, author, date }) => {
    return (
        <div className="card my-3 shadow-sm p-3 rounded">
            <div className="card-body">
                <p className="card-text">"{feedback}"</p>
                <footer className="blockquote-footer mt-3">
                    {author} <cite title="Date">{new Date(date).toLocaleDateString()}</cite>
                </footer>
            </div>
        </div>
    );
};

export default FeedbackCard;
